import { SEO } from '@/types/seo';

export type Category = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
};

export type SingleCategory = Category & {
  seo: SEO | null;
};
