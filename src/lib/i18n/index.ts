import { en } from "./en";
import { ar } from "./ar";
import type { Dict, Lang } from "./types";

export type { Dict, Lang };

const DICTS: Record<Lang, Dict> = { en, ar };

export function getDict(lang: Lang): Dict {
  return DICTS[lang];
}

export * from "./routes";

export const LANG_LABELS: Record<Lang, { native: string; code: string }> = {
  en: { native: "English", code: "EN" },
  ar: { native: "العربية", code: "AR" },
};

export const OTHER_LANG: Record<Lang, Lang> = { en: "ar", ar: "en" };
