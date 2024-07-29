import { defineType } from 'sanity';

import { plansCard } from './plans-card';

export const plansCardWithBtn = defineType({
  ...plansCard,
  name: 'plansCardWithBtn',
  fields: [
    ...plansCard.fields,
    {
      name: 'btnText',
      type: 'string',
      title: 'CTA Button Text',
      validation: (rule) => rule.required(),
    },
  ],
});
