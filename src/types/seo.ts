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
