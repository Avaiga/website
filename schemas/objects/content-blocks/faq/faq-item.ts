import { defineType } from 'sanity';

export const faqItem = defineType({
  name: 'faqItem',
  type: 'object',
  title: 'FAQ Item',
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question',
      validation: (rule) => rule.required(),
    },
    {
      name: 'answer',
      type: 'string',
      title: 'Answer',
      validation: (rule) => rule.required(),
    },
  ],
});
