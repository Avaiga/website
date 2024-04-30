import { StringRule, defineField, defineType } from 'sanity';

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Title',
      type: 'string',
      validation: (rule: StringRule) =>
        rule.required().max(70).warning('Keep titles under 70 characters'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Description',
      type: 'string',
      validation: (rule: StringRule) =>
        rule.max(180).warning('Keep description under 180 characters'),
    }),
    defineField({
      name: 'socialImage',
      title: 'Social Image',
      type: 'image',
      description:
        'This image will be used in social media previews. Recommended size is 1200x630px.',
    }),
  ],
});
