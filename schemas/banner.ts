import { LinkIcon } from '@sanity/icons';
import { StringRule, defineField, defineType } from 'sanity';

export const banner = defineType({
  name: 'banner',
  type: 'document',
  title: 'Banner',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'linkText',
      type: 'string',
      title: 'Link text',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'linkUrl',
      type: 'string',
      title: 'Link URL',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'isPublished',
      type: 'boolean',
      title: 'Is published',
      initialValue: false,
    }),
  ],
});
