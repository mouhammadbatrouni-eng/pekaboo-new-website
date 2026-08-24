import type { Faq, Seo, SiteSettings } from "./content/types";
import { urlForImage } from "./sanity/image";
import { SITE } from "./content/site";

export interface ResolvedSeo {
  title: string;
  description?: string;
  ogImageUrl?: string;
  noIndex: boolean;
}

/**
 * Resolves the effective title/description/OG image for a page: the page's own
 * `seo` fields win, then the site-wide defaults, then the plain page title —
 * so a page is never left with an empty <title>.
 */
export function resolveSeo(pageTitle: string, pageSeo: Seo | undefined, site: SiteSettings): ResolvedSeo {
  const fallbackTitle = site.defaultSeo?.metaTitle || SITE.name;
  const title =
    pageSeo?.metaTitle ||
    (pageTitle && pageTitle !== "Home" ? `${pageTitle} — ${SITE.name}` : fallbackTitle);

  return {
    title,
    description: pageSeo?.metaDescription || site.defaultSeo?.metaDescription,
    ogImageUrl: urlForImage(pageSeo?.ogImage || site.defaultSeo?.ogImage)?.width(1200).height(630).url(),
    noIndex: Boolean(pageSeo?.noIndex),
  };
}

/**
 * Organization structured data, used on the home page.
 * Deliberately omits email — it isn't published on the site yet, and
 * structured data is still public.
 */
export function organizationSchema(siteUrl: string | undefined, description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: siteUrl,
    logo: siteUrl ? new URL("/peekaboo-mark.png", siteUrl).toString() : undefined,
    description,
    telephone: SITE.phone,
    parentOrganization: { "@type": "Organization", name: SITE.parentCompany },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  };
}

/** SoftwareApplication structured data — Peekaboo is the product being described. */
export function softwareSchema(siteUrl: string | undefined, description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: siteUrl,
    description,
    publisher: { "@type": "Organization", name: SITE.parentCompany },
  };
}

/**
 * FAQPage structured data. Only emitted for FAQs whose answers are plain
 * strings (our bundled set) — portable-text answers from Sanity would need
 * flattening, and a partial FAQ list is worse than none for search.
 */
export function faqSchema(faqs: Faq[]) {
  const plain = faqs.filter((faq): faq is Faq & { answer: string } => typeof faq.answer === "string");
  if (plain.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: plain.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
