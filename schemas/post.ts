import { BlockContentIcon, DocumentTextIcon, SearchIcon } from '@sanity/icons';
import {
  DatetimeRule,
  ImageRule,
  ReferenceRule,
  SlugRule,
  StringRule,
  defineField,
  defineType,
} from 'sanity';

import { getPublishDate } from '../src/lib/get-publish-date';
import { contentField } from './content';

export const post = defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  icon: DocumentTextIcon,
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
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      group: 'content',
      initialValue: () => new Date().toISOString(),
      validation: (Rule: DatetimeRule) => Rule.error('You have to fill in this field.').required(),
    }),
    defineField({
      name: 'cover',
      title: 'Cover image',
      type: 'image',
      options: {
        hotspot: false,
      },
      description: 'This image will be used as image of the post',
      validation: (rule: ImageRule) => rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'lead',
      type: 'string',
      title: 'Lead paragraph',
      group: 'content',
    }),
    contentField,
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{ type: 'author' }],
      group: 'content',
      validation: (rule: ReferenceRule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{ type: 'category' }],
      group: 'content',
      validation: (rule: ReferenceRule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      initialValue: false,
      group: 'content',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'publishedAt',
      media: 'cover',
    },
    prepare(selection) {
      const { title, author, media, date } = selection;

      return {
        title,
        subtitle: `${author} - ${getPublishDate(date)}`,
        media,
      };
    },
  },
});
