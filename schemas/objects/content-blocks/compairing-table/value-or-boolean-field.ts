import { defineField, defineType } from 'sanity';

export const valueOrBoolean = defineType({
  name: 'valueOrBoolean',
  type: 'object',
  title: 'Value or Boolean',
  fields: [
    defineField({
      name: 'value',
      type: 'string',
      title: 'String Value',
      description: 'If its a Row Title, just add one space to this field',
      validation: (rule) => rule.max(50).error('Max length is 50 symbols.'),
    }),
    defineField({
      name: 'booleanValue',
      type: 'boolean',
      title: 'Boolean Value',
    }),
  ],
});
