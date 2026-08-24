import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  description:
    'The headline messaging at the top of the homepage. The sections below the hero are built from the product’s capability structure and are managed in code, so they always match what Peekaboo actually does.',
  groups: [
    {name: 'hero', title: 'Hero', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'heroEyebrow',
      title: 'Eyebrow label',
      type: 'string',
      group: 'hero',
      description: 'The small label above the headline. Currently “Nursery Operating System”.',
      validation: (rule) => rule.max(48),
    }),
    defineField({
      name: 'heroHeading',
      title: 'Headline',
      type: 'string',
      group: 'hero',
      description: 'The first thing a visitor reads. Aim for one clear sentence under 60 characters.',
      validation: (rule) => rule.required().max(80).warning('Shorter headlines read better at mobile sizes.'),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Supporting paragraph',
      type: 'text',
      rows: 3,
      group: 'hero',
      description: 'One or two sentences explaining what Peekaboo does and who it is for.',
      validation: (rule) => rule.max(260).warning('Long hero paragraphs get skipped. Try to stay under 260 characters.'),
    }),
    defineField({
      name: 'heroCtas',
      title: 'Buttons',
      type: 'array',
      of: [{type: 'cta'}],
      group: 'hero',
      description: 'One primary button, optionally one secondary. More than two weakens the main action.',
      validation: (rule) => rule.max(2),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {title: 'heroHeading'},
    prepare({title}) {
      return {title: 'Home Page', subtitle: title}
    },
  },
})
