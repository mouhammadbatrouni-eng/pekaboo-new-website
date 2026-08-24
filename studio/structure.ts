import type {StructureResolver} from 'sanity/structure'
import {CogIcon, HomeIcon, CommentIcon, HelpCircleIcon} from '@sanity/icons'

/**
 * Custom desk structure so editors see a purpose-built menu instead of a flat
 * alphabetical list of schema types. Site Settings and Home Page are pinned as
 * singletons, since there is only ever one of each.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Peekaboo Website')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings').title('Site Settings')),
      S.listItem()
        .title('Home Page')
        .icon(HomeIcon)
        .child(S.document().schemaType('homePage').documentId('homePage').title('Home Page')),
      S.divider(),
      S.documentTypeListItem('faq').title('FAQs').icon(HelpCircleIcon),
      S.documentTypeListItem('testimonial').title('Testimonials').icon(CommentIcon),
    ])
