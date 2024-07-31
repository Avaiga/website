import { LinkIcon } from '@sanity/icons';
import { ArrayRule, ReferenceRule, defineField, defineType } from 'sanity';

import { title } from './constants';

export const relatedPosts = defineType({
  name: 'relatedPosts',
  type: 'object',
  title: 'Related Posts',
  icon: LinkIcon,
  fields: [
    { ...title },
    defineField({
      name: 'posts',
      type: 'array',
      title: 'Posts',
      description: 'Should be only 3 posts',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }],
        },
      ],
      validation: (rule: ArrayRule<ReferenceRule>) => rule.min(3).max(3),
    }),
  ],
});
