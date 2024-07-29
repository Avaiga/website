import { defineType } from 'sanity';

import { toolsCard } from './tools-card';

export const toolsCardWithLink = defineType({
  ...toolsCard,
  name: 'toolsCardWithLink',
  title: 'Tools Card With Link',
  fields: [
    ...toolsCard.fields,
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
      validation: (rule) => rule.required(),
    },
  ],
});
