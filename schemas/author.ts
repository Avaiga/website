import { UsersIcon } from '@sanity/icons';
import { ImageRule, StringRule, defineField, defineType } from 'sanity';

export const author = defineType({
  name: 'author',
  type: 'document',
  title: 'Author',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: false,
      },
      validation: (rule: ImageRule) => rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'position',
      type: 'string',
      title: 'Position',
    }),
  ],
});
