import type { APIRoute } from "astro";
import Anthropic from "@anthropic-ai/sdk";
import { buildSystemPrompt } from "../../lib/chat/knowledge";
import type { Lang } from "../../lib/i18n/types";

export const prerender = false;

/** Opus 4.8 unless overridden. Override with CHAT_MODEL to trade cost for depth. */
const MODEL = import.meta.env.CHAT_MODEL || "claude-opus-4-8";

/** Answers are a chat bubble, not an essay — the system prompt asks for 2–3 sentences. */
const MAX_TOKENS = 1024;

// Bounds on what a single visitor can send. These cap the cost of one request;
// the rate limiter below caps how many requests they can make.
const MAX_MESSAGE_CHARS = 2000;
const MAX_TURNS = 20;

const RATE_LIMIT = { windowMs: 60_000, maxRequests: 12 };

/**
 * Per-instance rate limiting.
 *
 * This is a speed bump, not a guarantee: Vercel runs many instances and recycles
 * them, so the counter is neither shared nor durable. It stops a single visitor
 * hammering one warm instance, which is the common case. If this endpoint gets
 * real abuse, move the counter to Redis/Upstash or put a WAF rule in front —
 * the interface below stays the same.
 */
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic sweep so an instance that lives a long time doesn't grow the
  // map without bound.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT.windowMs)) hits.delete(key);
    }
  }
  return recent.length > RATE_LIMIT.maxRequests;
}

function clientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

type Turn = { role: "user" | "assistant"; content: string };

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    // Mirrors the contact endpoint: not configured (e.g. a fresh checkout) is a
    // clear 503, not a crash, so the rest of the site stays testable.
    console.info("[chat] ANTHROPIC_API_KEY not set — chat endpoint disabled.");
    return json({ error: "unconfigured" }, 503);
  }

  if (rateLimited(clientIp(request))) {
    return json({ error: "rate_limited" }, 429);
  }

  let payload: { messages?: Turn[]; lang?: string };
  try {
    payload = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  const lang: Lang = payload.lang === "ar" ? "ar" : "en";
  const messages = (payload.messages ?? []).filter(
    (m) => (m?.role === "user" || m?.role === "assistant") && typeof m.content === "string",
  );

  if (messages.length === 0) return json({ error: "no_messages" }, 400);
  if (messages.at(-1)?.role !== "user") return json({ error: "expected_user_turn" }, 400);
  if (messages.some((m) => m.content.length > MAX_MESSAGE_CHARS)) {
    return json({ error: "message_too_long" }, 413);
  }

  const client = new Anthropic({ apiKey });

  try {
    const stream = client.messages.stream({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      // The system prompt is byte-identical for every visitor in this language,
      // so it is a stable cache prefix worth marking.
      system: [
        {
          type: "text",
          text: buildSystemPrompt(lang),
          cache_control: { type: "ephemeral" },
        },
      ],
      // Not pure retrieval: "we run three branches on paper registers, would
      // this help?" needs reasoning over the material, and a prospective
      // customer's first impression is worth more than the saved latency.
      // "low" made answers noticeably shallower for exactly those questions.
      output_config: { effort: "medium" },
      // Keep only the recent turns. Older context adds cost without improving
      // answers to what is almost always a self-contained question.
      messages: messages.slice(-MAX_TURNS).map((m) => ({ role: m.role, content: m.content })),
    });

    // `messages.stream()` is lazy — no HTTP request is made until the iterator is
    // pulled. Pull the first event here, inside the try, so upstream failures
    // (billing, rate limits, overload) surface as a real status code. Returning
    // the Response first would commit us to 200 and leak those as an empty body.
    const iterator = stream[Symbol.asyncIterator]();
    const first = await iterator.next();

    const encoder = new TextEncoder();
    const body = new ReadableStream({
      async start(controller) {
        const push = (event: Anthropic.MessageStreamEvent) => {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        };
        try {
          if (!first.done) push(first.value);
          for (let next = await iterator.next(); !next.done; next = await iterator.next()) {
            push(next.value);
          }
        } catch (error) {
          // Headers are already sent, so the status can't change. Close cleanly
          // and let the client render whatever arrived before the break.
          console.error("[chat] stream failed mid-response:", error);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(body, {
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return json({ error: "upstream_rate_limited" }, 429);
    }
    if (error instanceof Anthropic.AuthenticationError) {
      console.error("[chat] ANTHROPIC_API_KEY rejected.");
      return json({ error: "unconfigured" }, 503);
    }
    if (error instanceof Anthropic.BadRequestError) {
      // Most often an exhausted credit balance, which is an operator problem
      // rather than a bad request. Log it loudly — from the visitor's side it is
      // indistinguishable from any other outage.
      console.error("[chat] request rejected by the API:", error.message);
      return json({ error: "upstream_error" }, 502);
    }
    console.error("[chat] request failed:", error);
    return json({ error: "upstream_error" }, 502);
  }
};
