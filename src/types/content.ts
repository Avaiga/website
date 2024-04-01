import { TableValue } from '@sanity/table';
import { PortableTextBlock } from 'sanity';

export type ContentBlockqoute = {
  name?: string;
  role?: string;
  text: PortableTextBlock;
};

export type ContentNotice = {
  title: string;
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
