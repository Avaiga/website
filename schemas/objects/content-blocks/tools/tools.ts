import { LinkIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

import { title } from '../constants';

export const tools = defineType({
  name: 'tools',
  type: 'object',
  title: 'Tools',
  icon: LinkIcon,
  fields: [
    { ...title },
    defineField({
      name: 'cards',
      type: 'array',
      title: 'Cards',
      description: 'This is the order in which the cards will be displayed on the page',
      of: [{ type: 'toolsCardWithLink' }, { type: 'toolsCard' }],
      validation: (rule) =>
        rule.length(9).error('There must be 9 cards in total for Tools section.'),
    }),
  ],
});
