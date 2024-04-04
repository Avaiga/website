import { BlockContentIcon, ClipboardIcon, SearchIcon } from '@sanity/icons';
import { SlugRule, StringRule, defineField, defineType } from 'sanity';

import { contentField } from './content';

export const legal = defineType({
  name: 'legal',
  type: 'document',
  title: 'Legal',
  icon: ClipboardIcon,
  groups: [
    {
      title: 'Content',
      name: 'content',
      default: true,
      icon: BlockContentIcon,
    },
    {
      title: 'SEO',
      name: 'seo',
      icon: SearchIcon,
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule: StringRule) => rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (rule: SlugRule) => rule.required(),
      group: 'content',
    }),
    contentField,
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    }),
  ],
});
