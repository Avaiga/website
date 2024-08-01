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
      name: 'pricingLabel',
      type: 'string',
      title: 'Pricing Label',
      description: 'If not necessary, leave the field empty.',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'paymentPeriod',
      type: 'string',
      title: 'Payment Period',
      description: 'If not necessary, leave the field empty.',
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [{ type: 'string' }],
    },
  ],
});
