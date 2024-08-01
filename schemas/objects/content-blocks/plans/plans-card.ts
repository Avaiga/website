import { Rule, defineType } from 'sanity';

export const plansCard = defineType({
  name: 'plansCard',
  type: 'object',
  title: 'Plans Card',
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
});
