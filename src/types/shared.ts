import type { Dispatch, SetStateAction } from 'react';

type ToggleItem<T extends string> = {
  title: T;
};

export type ToggleItems<T extends string> = [ToggleItem<T>, ToggleItem<T>];

export type Setter<T> = Dispatch<SetStateAction<T>>;

export type Banner = {
  _id: string;
  name: string;
  title: string;
  linkText: string;
  linkUrl: string;
  isPublished: boolean;
};
