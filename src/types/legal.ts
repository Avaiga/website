import { PortableTextBlock } from 'sanity';

import { SEO } from '@/types/seo';

export type Legal = {
  _id: string;
  _updatedAt: string;
  title: string;
  slug: {
    current: string;
  };
};

export type SingleLegal = Legal & {
  contentRaw: PortableTextBlock[];
  seo: SEO | null;
};
