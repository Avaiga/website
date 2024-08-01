import { DocumentTextIcon } from '@sanity/icons';
import { StringRule, defineField, defineType } from 'sanity';

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
      name: 'content',
      type: 'array',
      title: 'Content',
      description: 'Do not change the order, it may crash all page design.',
      of: [
        { type: 'hero' },
        { type: 'tools' },
        { type: 'plans' },
        { type: 'benefits' },
        { type: 'features' },
        { type: 'compairingTable' },
        { type: 'faq' },
        { type: 'cta' },
        { type: 'relatedPosts' },
      ],
    }),
  ],
});
