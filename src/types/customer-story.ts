import { SanityAsset, SanityImageObject } from '@sanity/image-url/lib/types/types';
import { PortableTextBlock } from 'sanity';

import { Post, SEO } from './blog';
import { Author } from './shared';

export type CustomerStory = {
  _id: string;
  publishedAt: string;
  title: string;
  slug: {
    current: string;
  };
  cover: Omit<SanityImageObject, 'asset'> & { asset: SanityAsset };
  companyLogo: Omit<SanityImageObject, 'asset'> & { asset: SanityAsset };
  author: Author;
  lead: string;
};

export type SingleCustomerStory = CustomerStory & {
  contentRaw: PortableTextBlock[];
  related: Post[];
  seo: SEO | null;
};
