/**
 * Colour pairs for the `glow-card` travelling ring (see `global.css`).
 *
 * Keyed by the same `tone` a card already gives its FeatureIcon, so the light
 * around a card matches the icon inside it and a grid reads as several
 * colours rather than a row of identical cyan boxes.
 *
 * Each pair runs warm→cool (or cool→warm) so the light shifts hue as it
 * travels, instead of just brightening and dimming.
 */
export type GlowTone = "brand" | "gold" | "coral" | "mint" | "violet";

const PAIRS: Record<GlowTone, [string, string]> = {
  brand: ["--color-brand-400", "--color-mint"],
  gold: ["--color-gold-400", "--color-coral"],
  coral: ["--color-coral", "--color-gold-300"],
  mint: ["--color-mint", "--color-brand-300"],
  violet: ["--color-violet", "--color-brand-300"],
};

/** Inline `style` string setting the two custom properties `glow-card` reads. */
export function glow(tone: GlowTone): string {
  const [a, b] = PAIRS[tone];
  return `--glow-a:var(${a});--glow-b:var(${b});`;
}
