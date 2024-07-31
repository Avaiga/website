import { Route } from 'next';

import type { Dispatch, SetStateAction } from 'react';

export type Setter<T> = Dispatch<SetStateAction<T>>;

export type Breadcrumb = {
  title: string;
  url?: URL | Route<string>;
};

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
export type Banner = {
  _id: string;
  name: string;
  title: string;
  linkText: string;
  linkUrl: string;
  isPublished: boolean;
};

export type TestimonialsItem = {
  text: string;
  authorName: string;
  authorTitle: string;
  logoImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
};
