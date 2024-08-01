import { LinkIcon } from '@sanity/icons';
import { ImageRule, StringRule, defineField, defineType } from 'sanity';

export const testimonialsItem = defineType({
  name: 'testimonialsItem',
  type: 'object',
  title: 'Testimonials Item',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'authorTitle',
      type: 'string',
      title: 'Author Title',
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: false,
      },
      description: 'This image will be used as author of the testimonial',
      validation: (rule: ImageRule) => rule.required(),
    }),
  ],
});
