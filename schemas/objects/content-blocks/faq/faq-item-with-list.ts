import { defineType } from 'sanity';

export const faqItemWithList = defineType({
  name: 'faqItemWithList',
  type: 'object',
  title: 'FAQ Item with List',
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question',
      validation: (rule) => rule.required(),
    },
    {
      name: 'answer',
      type: 'faqAnswerWithList',
      title: 'Answer',
      validation: (rule) => rule.required(),
    },
  ],
});
