/**
 * Headings in this site are a single translated string, but some read as two
 * beats — a statement, then its payoff ("Everything your childcare center
 * needs. One connected platform."). Where that is true, the payoff can carry
 * the brand accent without adding a second key to every locale.
 *
 * Most section headings are a single phrase and split to nothing, which is the
 * expected outcome, not a failure: callers fall back to a plain heading and
 * pick up the section rule instead.
 *
 * `؟` is the Arabic question mark; `ar.ts` copy is otherwise period-separated
 * like the English.
 */
export interface AccentSplit {
  lead: string;
  accent: string;
  hasAccent: boolean;
}

export function splitAccent(text: string): AccentSplit {
  const parts = text.split(/(?<=[.!?؟])\s+/).filter(Boolean);

  if (parts.length < 2) {
    return { lead: text, accent: "", hasAccent: false };
  }

  return {
    lead: parts.slice(0, -1).join(" "),
    accent: parts[parts.length - 1]!,
    hasAccent: true,
  };
}
