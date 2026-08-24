import {defineField, defineType} from 'sanity'
import {SearchIcon} from '@sanity/icons'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  icon: SearchIcon,
  description: 'Search and social sharing metadata for this page.',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string',
      description: 'Shown in browser tabs and search results. Falls back to the page title if left empty.',
      validation: (rule) => rule.max(60).warning('Titles longer than 60 characters may be truncated in search results.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      description: 'A short summary shown in search results. Aim for 150–160 characters.',
      validation: (rule) => rule.max(160).warning('Descriptions longer than 160 characters may be truncated.'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Social share image',
      type: 'image',
      description: 'Shown when this page is shared on social media. Falls back to the site default if left empty.',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Required for accessibility and SEO.',
        }),
      ],
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from search engines',
      type: 'boolean',
      description: 'Enable for pages you don’t want indexed by Google (e.g. thank-you pages).',
      initialValue: false,
    }),
  ],
  options: {collapsible: true, collapsed: true},
})
