import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Link type',
      type: 'string',
      options: {
        list: [
          {title: 'Internal page', value: 'internal'},
          {title: 'External URL', value: 'external'},
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
    }),
    defineField({
      name: 'internalPath',
      title: 'Internal path',
      type: 'string',
      description: 'e.g. /pricing or /blog. Include the leading slash.',
      hidden: ({parent}) => parent?.type !== 'internal',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      hidden: ({parent}) => parent?.type !== 'external',
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'internalPath', external: 'externalUrl'},
    prepare({title, subtitle, external}) {
      return {title, subtitle: subtitle || external}
    },
  },
})
