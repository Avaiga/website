import { SanityAsset, SanityImageObject } from '@sanity/image-url/lib/types/types';
import { TableValue } from '@sanity/table';
import { PortableTextBlock } from 'sanity';

export type Author = {
  _id: string;
  image: {
    asset: {
      _id: string;
      altText: string | null;
      metadata: {
        lqip: string;
      };
    };
  } | null;
  name: string;
  position?: string;
};

export type Category = {
  _id: string;
  title: string;
  titleShort: string;
  slug: {
    current: string;
  };
};

export type SingleCategory = Category & {
  seo: SEO | null;
};

export type ContentBlockquote = {
  name?: string;
  role?: string;
  text: PortableTextBlock;
};

export type ContentNotice = {
  type: NoticeTypes;
  text: PortableTextBlock;
};

export type ContentCode = {
  language?: string;
  code: string;
};

export type ContentYoutube = {
  url: string;
  title?: string;
};

export type ContentPicture = {
  _key: string;
  _type: string;
  alt?: string;
  caption?: string;
};

export type TableTypes = 'withTopHeader' | 'withoutHeader';

export type ContentTable = {
  type: TableTypes;
  table: TableValue;
};

export type ContentBlockProps<T> = {
  value: T;
};

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

export type Post = {
  _id: string;
  publishedAt: string;
  title: string;
  slug: {
    current: string;
  };
  cover?: Omit<SanityImageObject, 'asset'> & { asset: SanityAsset };
  author: Author;
  category: Category;
};

export type SinglePost = Post & {
  lead: string;
  contentRaw: PortableTextBlock[];
  seo: SEO | null;
};

export type SEO = {
  metaTitle: string | null;
  metaDescription: string | null;
  socialImage: {
    _id: string;
    altText: string | null;
    metadata: {
      lqip: string;
    };
  } | null;
};

export enum NoticeTypes {
  INFO = 'info',
  NOTE = 'note',
  WARNING = 'warning',
  ATTENTION = 'attention',
}
