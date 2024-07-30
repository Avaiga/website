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
      title: 'Related Posts',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }],
        },
      ],
      validation: (rule: ArrayRule<ReferenceRule>) => rule.min(3).max(3),
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      description:
        'Do not change the order, it may crash all page design. Correct order is: 1) Hero, 2) Tools, 3) Plans, 4) Benefits, 5) Features, 6) Compairing table, 7) FAQ, 8) CTA',
      of: [
        { type: 'hero' },
        { type: 'tools' },
        { type: 'plans' },
        { type: 'benefits' },
        { type: 'features' },
        { type: 'compairingTable' },
        { type: 'faq' },
        { type: 'cta' },
      ],
    }),
  ],
});
