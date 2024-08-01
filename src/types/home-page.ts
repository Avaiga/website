import { Post } from './blog';

export type HomePageQueryResult = {
  allPage: HomePage[];
};

export type HomePage = {
  content: RelatedPosts[];
};

export type RelatedPosts = {
  _type: 'relatedPosts';
  posts: Post[];
};
