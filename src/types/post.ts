import { SanityAsset, SanityImageObject } from '@sanity/image-url/lib/types/types';
import { PortableTextBlock } from 'sanity';

import { Author } from '@/types/author';
import { Category } from '@/types/category';
import { SEO } from '@/types/seo';

export type Post = {
  _id: string;
  publishedAt: string;
  title: string;
  slug: {
    current: string;
  };
  cover?: Omit<SanityImageObject, 'asset'> & { asset: SanityAsset };
  author: Author;
  categories: Category[];
};

export type SinglePost = Post & {
  contentRaw: PortableTextBlock[];
  seo: SEO | null;
};
