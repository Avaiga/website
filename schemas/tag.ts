import { TagsIcon } from '@sanity/icons';
import { SlugRule, StringRule, defineField, defineType } from 'sanity';

export const tag = defineType({
  name: 'tag',
  type: 'document',
  title: 'Tag',
  icon: TagsIcon,
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'label',
      },
      validation: (rule: SlugRule) => rule.required(),
    }),
  ],
});
