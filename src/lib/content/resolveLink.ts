import type { Link } from "./types";

/** Resolves a Sanity `link` object to a usable href. */
export function resolveLink(link?: Link): string {
  if (!link) return "#";
  return link.type === "external" ? link.externalUrl || "#" : link.internalPath || "/";
}

/** External links open in a new tab with safe `rel` attributes. */
export function isExternalLink(link?: Link): boolean {
  return link?.type === "external";
}
