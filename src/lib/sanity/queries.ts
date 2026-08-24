import { sanityClient } from "./client";
import { fallbackFaqs, fallbackHomePage, fallbackSiteSettings } from "../content/fallback";
import type { Faq, HomePage, SiteSettings, Testimonial } from "../content/types";

const SEO_FIELDS = `metaTitle, metaDescription, ogImage, noIndex`;
const LINK_FIELDS = `{label, type, internalPath, externalUrl}`;
const CTA_FIELDS = `{label, style, link${LINK_FIELDS}}`;

/**
 * Runs a Sanity query, returning `null` on missing config or any error rather
 * than throwing. Callers fall back to bundled content, so a CMS outage
 * degrades to slightly stale copy instead of a broken page.
 */
async function safeFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!sanityClient) return null;
  try {
    return (await sanityClient.fetch<T>(query, params)) ?? null;
  } catch (error) {
    console.error("[sanity] Query failed; using bundled content instead.", error);
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await safeFetch<SiteSettings>(
    `*[_type == "siteSettings"][0]{
      title, tagline,
      navLinks[]${LINK_FIELDS},
      headerCta${CTA_FIELDS},
      footerColumns[]{heading, links[]${LINK_FIELDS}},
      socialLinks[]{platform, url},
      contactEmail,
      defaultSeo{${SEO_FIELDS}}
    }`,
  );
  // Merge rather than replace: an editor filling in only some fields shouldn't
  // blank out the rest of the site chrome.
  return { ...fallbackSiteSettings, ...stripEmpty(data) };
}

export async function getHomePage(): Promise<HomePage> {
  const data = await safeFetch<HomePage>(
    `*[_type == "homePage"][0]{
      heroEyebrow, heroHeading, heroDescription,
      heroCtas[]${CTA_FIELDS},
      seo{${SEO_FIELDS}}
    }`,
  );
  return { ...fallbackHomePage, ...stripEmpty(data) };
}


export async function getFaqs(): Promise<Faq[]> {
  const data = await safeFetch<Faq[]>(
    `*[_type == "faq"] | order(_createdAt asc){_id, question, answer, group}`,
  );
  return data && data.length > 0 ? data : fallbackFaqs;
}

/**
 * Testimonials are Sanity-only by design. We don't ship placeholder quotes —
 * an empty result means the section simply isn't rendered until real,
 * attributable customer quotes exist.
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await safeFetch<Testimonial[]>(
    `*[_type == "testimonial"] | order(_createdAt asc){
      _id, quote, authorName, authorRole, nurseryName, photo
    }`,
  );
  return data ?? [];
}

/** Drops null/undefined/empty-array values so they don't override fallbacks. */
function stripEmpty<T extends object>(input: T | null): Partial<T> {
  if (!input) return {};
  return Object.fromEntries(
    Object.entries(input).filter(([, value]) => {
      if (value === null || value === undefined) return false;
      if (Array.isArray(value) && value.length === 0) return false;
      return true;
    }),
  ) as Partial<T>;
}
