import siteSettings from './documents/siteSettings'
import homePage from './documents/homePage'
import testimonial from './documents/testimonial'
import faq from './documents/faq'

import seo from './objects/seo'
import link from './objects/link'
import cta from './objects/cta'

/**
 * Content model scope.
 *
 * Editorial content — the copy a marketer should be able to change — lives
 * here. The product's capability structure (module categories, the three
 * adoption models, curriculum steps) deliberately lives in the codebase
 * instead, because it describes what the software actually does and must stay
 * consistent with the product. That's a smaller, safer surface for editors
 * than a fully generic page builder.
 */
export const schemaTypes = [
  // Documents
  siteSettings,
  homePage,
  testimonial,
  faq,
  // Reusable objects
  seo,
  link,
  cta,
]
