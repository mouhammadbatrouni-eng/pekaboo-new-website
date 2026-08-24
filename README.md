# Peekaboo Website

The public marketing site for **Peekaboo** — the nursery operating system by
[Educore Systems & Technologies](https://peek-a-boo.app), Dubai.

Built with Astro and Sanity, and brand-matched to the live
[Peekaboo Care portal](https://portal.peek-a-boo.app) and the Peekaboo Parent
mobile app.

Intended repository: `peekaboo-website`.

## Two concepts

The repo contains two website concepts sharing one design system, content
layer and set of product visuals:

| | Route | Shape |
| --- | --- | --- |
| **Concept A** | `/` | Multi-page — home plus `/features`, `/solutions`, `/peekaboo-care`, `/peekaboo-parent`, `/about` |
| **Concept B** | `/v2` | Single-page guided scroll — the whole story in one page, following the existing site's Plans → Our App → Features → Improve → About → Why Us → Curriculum → Contact journey |

Concept B additionally has a **light/dark theme switch** using the portal's own
dark palette. To promote either concept to the main site, rename its page file
to `index.astro`.

---

## Tech stack

| Concern | Choice |
| --- | --- |
| Framework | **Astro** — static-first; only `/api/contact` runs on demand |
| Language | **TypeScript**, strict |
| Styling | **Tailwind CSS v4**, design tokens in `src/styles/global.css` |
| CMS | **Sanity** (standalone Studio in `studio/`) |
| Validation | **Zod** (shared between client and server) |
| Icons | `@lucide/astro` |
| Hosting | **Vercel** (`@astrojs/vercel`) |

The site ships **zero JavaScript bundles**. The three interactive pieces
(mobile nav, platform explorer, contact form) are small inline scripts that
progressively enhance working HTML.

---

## Getting started

```sh
npm install
cp .env.example .env
npm run dev          # http://localhost:4321
```

The site runs **fully populated without any Sanity project configured**. Every
query falls back to bundled content in `src/lib/content/`, so you can develop
the design before content exists — and a CMS outage in production degrades to
slightly stale copy rather than a broken page.

### Environment variables

None are required to run locally. See `.env.example`.

| Variable | Purpose |
| --- | --- |
| `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_VERSION` | Connect a Sanity project. Unset ⇒ bundled content. |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL` | Email delivery for the demo request form. Unset ⇒ submissions validate and succeed but are logged to the server console instead of sent. |

Never commit `.env`. Only `.env.example` (placeholders) is tracked.

---

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Dev server on `localhost:4321` |
| `npm run build` | `astro check` then production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run astro check` | Type-check only |

---

## Project structure

```
src/
├── pages/                 # one file per route
│   ├── index.astro          /            homepage
│   ├── features.astro       /features    all seven platform areas
│   ├── solutions.astro      /solutions   the three adoption models
│   ├── peekaboo-care.astro  /peekaboo-care    staff portal
│   ├── peekaboo-parent.astro /peekaboo-parent parent app
│   ├── about.astro, contact.astro, privacy.astro, terms.astro, 404.astro
│   └── api/contact.ts       POST endpoint for the demo form
├── layouts/
│   ├── BaseLayout.astro     <head>, SEO, OG, JSON-LD, skip link
│   └── PageLayout.astro     header + footer shell
├── components/
│   ├── ui/                  Button, Card, Badge, Section, Container, Logo…
│   ├── nav/                 Header (+ mobile menu), Footer
│   ├── product/             portal & parent-app UI recreations
│   └── sections/            Hero, ModuleExplorer, Curriculum, Solutions…
├── lib/
│   ├── content/             typed content: site, modules, solutions, marketing
│   ├── sanity/              client, image builder, GROQ queries
│   ├── validations/         Zod schemas
│   └── seo.ts               per-page SEO + structured data
└── styles/global.css        design tokens + font faces
studio/                    standalone Sanity Studio
```

---

## Content: what lives where

This is the most important thing to understand before editing.

**In code (`src/lib/content/`)** — the product's capability structure: the
seven platform areas and their capabilities, the three adoption models, the
Peekaboo Care / Peekaboo Parent product definitions, curriculum steps and
contact details. This describes *what the software actually does*, so it's
version-controlled and reviewed rather than editable into drift.

**In Sanity** — editorial copy: the hero headline and buttons, site
navigation and footer, the About/Privacy/Terms pages, FAQs, testimonials, and
per-page SEO.

That split is deliberate. A fully generic page builder would let an editor
accidentally dismantle the design or claim a feature that doesn't exist; this
gives editors real control over messaging with guardrails around product
truth.

### Sanity Studio

```sh
cd studio
npm install
cp .env.example .env    # add SANITY_STUDIO_PROJECT_ID
npm run dev             # http://localhost:3333
```

Create a project at [sanity.io/manage](https://www.sanity.io/manage) or via
`npx sanity@latest init`. Use a **new, dedicated project** for the website
rather than the one behind the portal, so marketing content and product data
stay decoupled.

Document types: `siteSettings` and `homePage` are singletons (pinned at the
top of the Studio); `page`, `faq` and `testimonial` are collections.

**Testimonials are intentionally empty.** The section is hidden on the site
until at least one real, attributable customer quote exists. Please don't add
invented quotes to fill it.

---

## Claims policy

Marketing copy on this site is deliberately constrained to what can be
verified against the product:

- **Languages** — the portal implements **English and Arabic** with automatic
  RTL. The previous website's "supports over 16 languages" is not supported by
  the codebase, so this site describes language support qualitatively instead
  of quoting a number.
- **No invented metrics** — no customer counts, percentages, ratings, awards
  or logos appear anywhere.
- **Capabilities** — every feature listed in `src/lib/content/modules.ts` maps
  to a real module in the Peekaboo Care portal.

If a claim can't be verified, it isn't on the site.

---

## Design system

Tokens in `src/styles/global.css` are taken from the portal's own
`src/index.css` — the same sky/gold/coral/mint/violet palette, the Baloo 2 +
Manrope pairing, and the 1.45rem-based radius scale — so the website and the
product visibly belong together.

**One deliberate deviation:** the portal's button gradient (`#2fc5f7 → #1cb6ea`)
gives white text a 2.35:1 contrast ratio, well below the 4.5:1 WCAG AA
requires. The website's primary button uses the same hue deepened to
`#0e7fa8 → #0e77a1` (4.55:1) so the label is actually readable. The bright
brand blue is retained everywhere it isn't sitting behind text. Several
secondary text tokens were darkened for the same reason — each is annotated in
`global.css`.

### Light and dark themes

The single-page concept can switch between light and dark, using the exact
palette from the portal's own `.dark` block — so a visitor who toggles the
website and then signs into the portal sees the same deep navy and warm
off-white.

Only a small set of semantic tokens change between themes: `--color-canvas`,
`--color-surface`, `--color-line`, the three text levels, and the accent
"ink" colours. The fixed scales (`ink-*`, `brand-*`) don't move, which is what
keeps surfaces that are *deliberately* dark in both themes — portal previews,
the footer, CTA banners — looking identical either way.

Components opt in by using `bg-surface` / `text-body` / `text-muted` /
`border-line` instead of `bg-white` / `text-ink-900`. Anything still using the
fixed scale stays put by design.

The theme is applied by a `.dark` class on `<html>`, set by a small inline
script in `<head>` before first paint so there's no flash of the wrong theme.
A stored choice wins over the OS setting; with no stored choice we follow
`prefers-color-scheme`. All dark-theme text was contrast-checked numerically,
including alpha-composited chip backgrounds.

### Product imagery

The portal and app visuals in `src/components/product/` are **reproduced in
markup**, not screenshots. Layout, navigation grouping, terminology and colours
come from the real product, but rendering them as HTML means they stay crisp at
any resolution, reflow on mobile, add no image weight, and carry clean demo
data — the live environment's seed data contains lorem ipsum and malformed
timestamps that would otherwise appear on the marketing site.

---

## Accessibility

- Semantic landmarks, ordered headings, skip-to-content link
- The platform explorer is a real ARIA tablist with roving `tabindex` and
  arrow/Home/End key support
- Form errors are wired with `aria-invalid` + `aria-describedby`, and focus
  moves to the first invalid field or to the result banner
- All text meets WCAG 2.2 AA contrast (verified numerically, not by eye);
  dark portal previews use separate `*-onDark` status tokens
- `prefers-reduced-motion` disables animation and smooth scrolling

---

## Deployment

Configured for Vercel. Set the environment variables above in the project
settings and deploy — nine pages prerender to static HTML; only
`/api/contact` runs as a function.

Astro's `checkOrigin` protection is active, so `POST /api/contact` rejects
cross-site submissions. Same-origin browser requests are unaffected.

---

## Adding a blog later

The architecture supports it without rework: add a `post` document type in
`studio/schemaTypes/`, a query in `src/lib/sanity/queries.ts`, and
`src/pages/blog/[slug].astro`. It's deliberately not scaffolded now — an empty
blog route is a placeholder, and this site doesn't ship placeholders.
