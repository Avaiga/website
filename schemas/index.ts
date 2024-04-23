import { author } from './author';
import { banner } from './banner';
import { category } from './category';
import { customBlockquote, customNotice, customTable, customYoutube } from './content';
import { legal } from './legal';
import { post } from './post';
import { seo } from './seo';

export const schemaTypes = [
  author,
  category,
  seo,
  customTable,
  customBlockquote,
  customNotice,
  customYoutube,
  post,
  legal,
  banner,
];
