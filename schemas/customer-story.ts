import { BlockContentIcon, DocumentTextIcon, SearchIcon } from '@sanity/icons';
import {
  ArrayRule,
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

export const customerStory = defineType({
  name: 'customerStory',
  type: 'document',
  title: 'Customer Story',
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
      name: 'companyName',
      type: 'string',
      title: 'Company name',
      validation: (rule: StringRule) => rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'companyName',
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
      name: 'companyLogo',
      title: 'Company logo',
      type: 'image',
      options: {
        hotspot: false,
      },
      description: 'This image will be used as a company logo',
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
      name: 'related',
      type: 'array',
      title: 'Related Posts',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }],
        },
      ],
      group: 'content',
      validation: (rule: ArrayRule<ReferenceRule>) => rule.min(3),
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
