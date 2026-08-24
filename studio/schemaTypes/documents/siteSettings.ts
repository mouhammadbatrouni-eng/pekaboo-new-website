import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  description: 'Global site chrome — navigation, footer, and default social sharing image.',
  fields: [
    defineField({
      name: 'title',
      title: 'Site title',
      type: 'string',
      initialValue: 'Peekaboo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short phrase used in the footer and default meta description.',
    }),
    defineField({
      name: 'navLinks',
      title: 'Header navigation links',
      type: 'array',
      of: [{type: 'link'}],
    }),
    defineField({
      name: 'headerCta',
      title: 'Header call-to-action button',
      type: 'cta',
    }),
    defineField({
      name: 'footerColumns',
      title: 'Footer link columns',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'footerColumn',
          fields: [
            defineField({name: 'heading', title: 'Column heading', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'links', title: 'Links', type: 'array', of: [{type: 'link'}]}),
          ],
          preview: {
            select: {title: 'heading'},
          },
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {list: ['LinkedIn', 'Instagram', 'X (Twitter)', 'Facebook', 'YouTube']},
            }),
            defineField({name: 'url', title: 'URL', type: 'url', validation: (rule) => rule.required()}),
          ],
          preview: {
            select: {title: 'platform', subtitle: 'url'},
          },
        },
      ],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact email',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'seo',
      description: 'Used as a fallback whenever a page doesn’t set its own SEO fields.',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
