import { TagIcon } from '@sanity/icons';
import { NumberRule, SlugRule, StringRule, defineField, defineType } from 'sanity';

export const category = defineType({
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: TagIcon,
  groups: [
    {
      title: 'Content',
      name: 'content',
      default: true,
    },
    {
      title: 'SEO',
      name: 'seo',
      icon: () => '🔍',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      group: 'content',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      group: 'content',
      validation: (rule: SlugRule) => rule.required(),
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'Position in blog navigation',
      group: 'content',
      validation: (rule: NumberRule) => rule.required(),
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    }),
  ],
  initialValue: {
    order: 10,
  },
  orderings: [
    {
      title: 'Essential order',
      name: 'essential',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
