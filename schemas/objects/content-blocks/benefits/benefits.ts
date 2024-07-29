import { LinkIcon } from '@sanity/icons';
import { StringRule, defineField, defineType } from 'sanity';

import { title } from '../constants';

export const benefits = defineType({
  name: 'benefits',
  type: 'object',
  title: 'Benefits',
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
      name: 'btnText',
      type: 'string',
      title: 'CTA Button Text',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'cards',
      type: 'array',
      title: 'Cards',
      description: 'This is the order in which the cards will be displayed on the page',
      of: [{ type: 'benefitsCard' }],
      validation: (rule) =>
        rule.length(4).error('There must be 4 cards in total for Benefits section.'),
    }),
  ],
});
