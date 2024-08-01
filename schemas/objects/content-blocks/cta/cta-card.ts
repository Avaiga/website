import { Rule, defineType } from 'sanity';

import { buttonLink, buttonText } from '../constants';

export const ctaCards = defineType({
  name: 'ctaCards',
  type: 'object',
  title: 'CTA Cards',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (rule: Rule) => rule.required(),
    },
    { ...buttonText },
    { ...buttonLink },
  ],
});
