import { LinkIcon } from '@sanity/icons';
import { StringRule, defineField, defineType } from 'sanity';

import { title } from '../constants';

export const plans = defineType({
  name: 'plans',
  type: 'object',
  title: 'Plans',
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
      name: 'card1',
      type: 'plansCard',
      title: 'Card 1',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'card2',
      type: 'plansCardWithBtn',
      title: 'Card 2',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'card3',
      type: 'plansCardWithBtn',
      title: 'Card 3',
      validation: (rule) => rule.required(),
    }),
  ],
});
