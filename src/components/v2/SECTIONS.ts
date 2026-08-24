import type { Dict } from "../../lib/i18n";

/**
 * The single-page journey, in scroll order. Drives the nav, scroll spy and
 * anchors. `key` maps to `Dict["nav"]`, so labels come from the active
 * language rather than being hardcoded.
 */
export const SECTIONS = [
  { id: "plans", key: "plans" },
  { id: "app", key: "app" },
  { id: "features", key: "features" },
  { id: "improve", key: "improve" },
  { id: "about", key: "about" },
  { id: "why-us", key: "whyUs" },
  { id: "curriculum", key: "curriculum" },
  { id: "faq", key: "faq" },
  { id: "contact", key: "contact" },
] as const satisfies readonly { id: string; key: keyof Dict["nav"] }[];

export type SectionId = (typeof SECTIONS)[number]["id"];
