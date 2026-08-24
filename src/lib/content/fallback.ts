import type { Faq, HomePage } from "./types";
import { CTA, SITE } from "./site";
import { FAQS } from "./marketing";

/**
 * Bundled content used whenever Sanity has nothing to return — before a
 * project is connected, for a field an editor hasn't filled in, or if a query
 * fails in production. The site is always fully populated as a result.
 *
 * Only the hero copy and FAQs are Sanity-overridable. The rest of the
 * single-page site's wording lives in src/lib/i18n, because it has to exist
 * in both languages and stay structurally identical between them.
 */

export { fallbackSiteSettings } from "./site";

export const fallbackHomePage: HomePage = {
  heroEyebrow: SITE.systemName,
  heroHeading: "One platform to run your entire childcare center.",
  heroDescription:
    "Peekaboo connects classrooms, families, staff and finance in a single system — so your team stops re-entering the same information and starts getting time back.",
  heroCtas: [
    {
      label: CTA.primary.label,
      style: "primary",
      link: { label: CTA.primary.label, type: "internal", internalPath: CTA.primary.href },
    },
    {
      label: CTA.secondary.label,
      style: "secondary",
      link: { label: CTA.secondary.label, type: "internal", internalPath: CTA.secondary.href },
    },
  ],
};

export const fallbackFaqs: Faq[] = FAQS.map((faq, index) => ({
  _id: `faq-${index}`,
  ...faq,
}));

