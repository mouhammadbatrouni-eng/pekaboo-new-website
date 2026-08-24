/**
 * Legal documents as structured data.
 *
 * Kept as data rather than markup so the same renderer produces both
 * languages with identical structure, and so section order, headings and
 * lists can't drift between them.
 */

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export interface LegalSection {
  /** Rendered as an h2. */
  heading?: string;
  blocks: LegalBlock[];
}

export interface LegalDoc {
  title: string;
  /** Full sentence, e.g. "Last updated on August 10, 2026." */
  lastUpdated: string;
  /** Optional lead paragraphs before the first section heading. */
  intro?: LegalBlock[];
  sections: LegalSection[];
}
