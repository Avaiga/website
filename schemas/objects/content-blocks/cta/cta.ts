import { LinkIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

import { title } from '../constants';

export const cta = defineType({
  name: 'cta',
  type: 'object',
  title: 'CTA',
  icon: LinkIcon,
  fields: [
    { ...title },
    defineField({
      name: 'cards',
      type: 'array',
      title: 'Cards',
      description: 'This is the order in which the cards will be displayed on the page',
      of: [{ type: 'ctaCards' }],
      validation: (rule) => rule.length(2).error('There must be 2 cards in total for CTA section.'),
    }),
  ],
});
