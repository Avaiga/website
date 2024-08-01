import { defineType } from 'sanity';

export const benefitsCard = defineType({
  name: 'benefitsCard',
  type: 'object',
  title: 'Benefits Card',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (rule) => rule.required(),
    },
  ],
});
