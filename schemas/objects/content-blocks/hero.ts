import { LinkIcon } from '@sanity/icons';
import { StringRule, defineField, defineType } from 'sanity';

import { buttonLink, buttonText, title } from './constants';

export const hero = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  icon: LinkIcon,
  fields: [
    { ...title },
    defineField({
      name: 'tag',
      type: 'string',
      title: 'Tag',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (rule: StringRule) => rule.required(),
    }),
    { ...buttonText },
    { ...buttonLink },
  ],
});
