import { createClient } from "@sanity/client";

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET || "production";
const apiVersion = import.meta.env.SANITY_API_VERSION || "2025-01-01";

/**
 * Whether Sanity is configured for this build. Pages fall back to bundled
 * placeholder content (see `src/lib/content/fallback.ts`) when this is
 * false, so `npm run dev` renders a fully populated site before a Sanity
 * project has been created and connected.
 */
export const isSanityConfigured = Boolean(projectId);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: import.meta.env.PROD,
      perspective: "published",
    })
  : null;
