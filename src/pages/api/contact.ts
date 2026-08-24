import type { APIRoute } from "astro";
import { contactSchema, type ContactFieldErrors } from "../../lib/validations/contact";

export const prerender = false;

/** True when the client submitted via fetch() and expects JSON back. */
function wantsJson(request: Request) {
  return request.headers.get("accept")?.includes("application/json") ?? false;
}

type Submission = {
  name: string;
  email: string;
  organisation: string;
  phone?: string;
  centers?: string;
  message: string;
};

async function sendNotification(data: Submission) {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    // Not configured (e.g. local dev). Log rather than fail, so the whole form
    // flow stays testable before email delivery is wired up.
    console.info("[contact] Email not configured — submission received but not sent:", data);
    return;
  }

  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Organisation: ${data.organisation}`,
    `Phone: ${data.phone || "—"}`,
    `Centers: ${data.centers || "—"}`,
    "",
    data.message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `Peekaboo Website <noreply@peek-a-boo.app>`,
      to,
      reply_to: data.email,
      subject: `Demo request — ${data.organisation} (${data.name})`,
      text: lines,
    }),
  });

  if (!response.ok) {
    console.error("[contact] Resend error:", response.status, await response.text());
    throw new Error("Notification email failed to send.");
  }
}

export const POST: APIRoute = async ({ request, redirect }) => {
  const asJson = wantsJson(request);

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return asJson
      ? jsonResponse({ success: false, serverError: true }, 400)
      : redirect("/contact?error=1");
  }

  const parsed = contactSchema.safeParse({
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    organisation: String(formData.get("organisation") || ""),
    phone: String(formData.get("phone") || ""),
    centers: String(formData.get("centers") || ""),
    message: String(formData.get("message") || ""),
    company: String(formData.get("company") || ""),
  });

  if (!parsed.success) {
    const errors: ContactFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactFieldErrors;
      if (key && !errors[key]) errors[key] = issue.message;
    }
    return asJson ? jsonResponse({ success: false, errors }, 400) : redirect("/contact?error=1");
  }

  // Honeypot tripped — respond as success so bots learn nothing, but send nothing.
  if (parsed.data.company) {
    return asJson ? jsonResponse({ success: true }) : redirect("/contact?success=1");
  }

  try {
    await sendNotification(parsed.data);
  } catch (error) {
    console.error("[contact] Submission failed:", error);
    return asJson
      ? jsonResponse({ success: false, serverError: true }, 502)
      : redirect("/contact?error=1");
  }

  return asJson ? jsonResponse({ success: true }) : redirect("/contact?success=1");
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
