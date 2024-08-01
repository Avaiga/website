import { defineType } from 'sanity';

export const faqAnswerWithList = defineType({
  name: 'faqAnswerWithList',
  type: 'object',
  title: 'FAQ Answer With List',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
      validation: (rule) => rule.required(),
    },
    {
      name: 'listOfItems',
      type: 'array',
      title: 'List of items',
      of: [{ type: 'string' }],
      validation: (rule) => rule.min(1).required(),
    },
  ],
});
