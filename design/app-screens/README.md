# App screens drawn in markup

The parent app has no Arabic captures yet, and Payments had no capture at all, so
these screens are rebuilt here in HTML and rendered to PNG. They copy the real
app's chrome and use its own artwork (`img/a*.png`, from the portal repo's
`src/assets/peekaboo-daily-report`) and its own Arabic strings. The child and
parent photos are cropped from the English captures.

| File | Site capture |
| --- | --- |
| `feed-ar.html` | `src/assets/product/ar/app-daily-report.png` |
| `messages-ar.html` | `src/assets/product/ar/app-messages.png` |
| `progress-ar.html` | `src/assets/product/ar/app-progress.png` |
| `create-ar.html` | `src/assets/product/ar/app-daily-report-create.png` |
| `assessment-ar.html` | `src/assets/product/ar/app-assessment-report.png` |
| `payments.html?lang=en` | `src/assets/product/app-payments.png` |
| `payments.html?lang=ar` | `src/assets/product/ar/app-payments.png` |

Render one at 2x (804×1748) with `./render.sh feed-ar` (needs Google Chrome);
payments takes the `?lang=` query, see the command in `render.sh`. If a layout
changes, re-measure its motion map in `src/components/product/motion.ts` — load
the page with `measure.js` appended and read the rects it prints.

Replace any of these with a real capture as soon as one exists.
