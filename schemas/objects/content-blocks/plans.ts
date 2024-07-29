import { LinkIcon } from '@sanity/icons';
import { Rule, StringRule, defineField, defineType } from 'sanity';

import { title } from './constants';

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
      type: 'object',
      title: 'Card 1',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'price',
          type: 'string',
          title: 'Price',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'features',
          type: 'array',
          title: 'Features',
          of: [{ type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'card2',
      type: 'object',
      title: 'Card 2',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'price',
          type: 'string',
          title: 'Price',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'features',
          type: 'array',
          title: 'Features',
          of: [{ type: 'string' }],
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'btnText',
          type: 'string',
          title: 'CTA Button text',
          validation: (rule: Rule) => rule.required(),
        },
      ],
    }),
    defineField({
      name: 'card3',
      type: 'object',
      title: 'Card 3',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'price',
          type: 'string',
          title: 'Price',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'btnText',
          type: 'string',
          title: 'CTA Button text',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'features',
          type: 'array',
          title: 'Features',
          of: [{ type: 'string' }],
          validation: (rule: Rule) => rule.required(),
        },
      ],
    }),
  ],
});
