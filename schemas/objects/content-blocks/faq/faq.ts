import { LinkIcon } from '@sanity/icons';
import { StringRule, defineField, defineType } from 'sanity';

import { title } from '../constants';

export const faq = defineType({
  name: 'faq',
  type: 'object',
  title: 'Faq',
  icon: LinkIcon,
  fields: [
    { ...title },
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Section Heading',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Items',
      description: 'This is the order in which the items (questions) will be displayed on the page',
      of: [{ type: 'faqItem' }, { type: 'faqItemWithList' }],
      validation: (rule) =>
        rule.min(5).max(5).error('There must be 5 items in total for FAQ section.'),
    }),
  ],
});
