import { Rule } from 'sanity';

export const title = {
  name: 'title',
  type: 'string',
  title: 'Title',
  description:
    'Please no edits, just a label for visibility in Sanity Studio (not shown on the page)',
  validation: (rule: Rule) => rule.required(),
};

export const buttonText = {
  name: 'buttonText',
  title: 'Button Text',
  type: 'string',
  validation: (rule: Rule) => rule.required(),
};

export const buttonLink = {
  name: 'buttonLink',
  title: 'Button Link',
  type: 'string',
  description: 'Button Link must be specified as the page path, for example: /blog',
  validation: (rule: Rule) => rule.required(),
};
