import { defineField, defineType } from 'sanity';

export const cols = defineType({
  name: 'cols',
  type: 'document',
  title: 'Cols',
  fields: [
    defineField({
      name: 'isRowTitle',
      title: 'Is Row Title',
      type: 'boolean',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'community',
      title: 'Community',
      type: 'valueOrBoolean',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'enterprise',
      title: 'Enterprise',
      type: 'valueOrBoolean',
      validation: (rule) => rule.required(),
    }),
  ],
});
