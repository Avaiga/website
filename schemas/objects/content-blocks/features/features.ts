import { LinkIcon } from '@sanity/icons';
import { StringRule, defineField, defineType } from 'sanity';

import { title } from '../constants';

export const features = defineType({
  name: 'features',
  type: 'object',
  title: 'Features',
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
      name: 'description',
      type: 'string',
      title: 'Section Description',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Items',
      description: 'This is the order in which the cards will be displayed on the page',
      of: [{ type: 'featuresItem' }],
      validation: (rule) =>
        rule.length(3).error('There must be 3 cards in total for Features section.'),
    }),
  ],
});
