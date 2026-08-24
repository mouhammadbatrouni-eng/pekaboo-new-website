import { createImageUrlBuilder } from "@sanity/image-url";
import type { Image } from "@sanity/types";
import { sanityClient } from "./client";

const builder = sanityClient ? createImageUrlBuilder(sanityClient) : null;

/**
 * Builds an optimized, responsive Sanity CDN image URL. Returns null when
 * Sanity isn't configured or the source image is missing, so callers can
 * fall back to a static asset.
 */
export function urlForImage(source?: Image | null) {
  if (!builder || !source?.asset) return null;
  return builder.image(source).auto("format").fit("max");
}
