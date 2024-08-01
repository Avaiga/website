import { defineType } from 'sanity';

export const toolsCard = defineType({
  name: 'toolsCard',
  type: 'object',
  title: 'Tools Card',
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
