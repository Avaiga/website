import { LinkIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

import { title } from '../constants';

export const compairingTable = defineType({
  name: 'compairingTable',
  type: 'object',
  title: 'Compairing Table',
  icon: LinkIcon,
  fields: [
    { ...title },
    defineField({
      name: 'labels',
      title: 'Labels',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.length(3).error('There must be exactly 3 labels'),
    }),
    defineField({
      name: 'cols',
      title: 'Columns',
      type: 'array',
      of: [{ type: 'cols' }],
    }),
  ],
});
