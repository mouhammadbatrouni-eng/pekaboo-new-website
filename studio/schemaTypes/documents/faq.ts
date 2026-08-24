import {defineField, defineType} from 'sanity'
import {HelpCircleIcon} from '@sanity/icons'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: HelpCircleIcon,
  description:
    'Questions shown on the homepage. Adding any FAQ here replaces the full built-in set, so add all the questions you want shown.',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      description: 'Phrase it the way a nursery owner would actually ask it.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [{type: 'block', styles: [{title: 'Normal', value: 'normal'}]}],
      description: 'Keep it to a short paragraph or two. Only claim what the product genuinely does.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'group',
      title: 'Group',
      type: 'string',
      description: 'Optional grouping, for when there are enough questions to need categories.',
      options: {list: ['General', 'Product', 'Pricing & plans', 'Security & privacy']},
    }),
  ],
  preview: {
    select: {title: 'question', subtitle: 'group'},
  },
})
