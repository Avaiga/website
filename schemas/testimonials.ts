import { LinkIcon } from '@sanity/icons';
import { StringRule, defineField, defineType } from 'sanity';

export const testimonials = defineType({
  name: 'testimonials',
  type: 'document',
  title: 'Testimonials',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{ type: 'testimonialsItem' }],
      validation: (rule) =>
        rule.min(2).error('There must be at least 2 items for Testimonials section.'),
    }),
  ],
});
