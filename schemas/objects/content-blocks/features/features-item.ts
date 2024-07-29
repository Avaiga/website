import { defineType } from 'sanity';

export const featuresItem = defineType({
  name: 'featuresItem',
  type: 'object',
  title: 'Features Item',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      validation: (rule) => rule.required(),
    },
  ],
});
