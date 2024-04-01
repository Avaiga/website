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
