import {defineField, defineType} from 'sanity'
import {RocketIcon} from '@sanity/icons'

export default defineType({
  name: 'cta',
  title: 'Call to action',
  type: 'object',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Button label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'style',
      title: 'Button style',
      type: 'string',
      options: {
        list: [
          {title: 'Primary (filled)', value: 'primary'},
          {title: 'Secondary (outline)', value: 'secondary'},
        ],
        layout: 'radio',
      },
      initialValue: 'primary',
    }),
  ],
  preview: {
    select: {title: 'label'},
  },
})
