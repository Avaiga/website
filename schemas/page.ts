import { DocumentTextIcon } from '@sanity/icons';
import { ArrayRule, ReferenceRule, StringRule, defineField, defineType } from 'sanity';

export const page = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'posts',
      type: 'array',
      title: 'Chosen Posts',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }],
        },
      ],
      validation: (rule: ArrayRule<ReferenceRule>) => rule.min(1),
    }),
  ],
});
