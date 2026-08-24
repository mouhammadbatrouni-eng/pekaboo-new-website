import type { Lang } from "./types";

/**
 * Every page, in every language, in one table.
 *
 * Switching language resolves through this map, so a visitor reading the
 * Privacy Policy in English lands on the Privacy Policy in Arabic — not the
 * Arabic homepage. Adding a page means adding one entry here rather than
 * touching the nav.
 */
export const ROUTES = {
  home: { en: "/", ar: "/ar" },
  getStarted: { en: "/get-started", ar: "/ar/get-started" },
  privacy: { en: "/privacy-policy", ar: "/ar/privacy-policy" },
  terms: { en: "/terms-of-service", ar: "/ar/terms-of-service" },
} as const;

export type RouteKey = keyof typeof ROUTES;

export function routePath(key: RouteKey, lang: Lang): string {
  return ROUTES[key][lang];
}

/** The same page in the other language. */
export function alternatePath(key: RouteKey, target: Lang): string {
  return ROUTES[key][target];
}

/** hreflang alternates for a given page. */
export function alternatesFor(key: RouteKey) {
  return [
    { lang: "en", path: ROUTES[key].en },
    { lang: "ar", path: ROUTES[key].ar },
    { lang: "x-default", path: ROUTES[key].en },
  ];
}

/**
 * Href for a homepage section. On the homepage this is a plain hash so the
 * browser scrolls smoothly; anywhere else it's an absolute path back to the
 * homepage, because there is no such section on a legal page to scroll to.
 */
export function sectionHref(sectionId: string, lang: Lang, isHome: boolean): string {
  return isHome ? `#${sectionId}` : `${ROUTES.home[lang]}#${sectionId}`;
}
