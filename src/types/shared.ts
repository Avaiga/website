import type { Dispatch, SetStateAction } from 'react';

type ToggleItem<T extends string> = {
  title: T;
  specialInfo?: string;
};

type ToggleItems<T extends string> = [ToggleItem<T>, ToggleItem<T>];

type Setter<T> = Dispatch<SetStateAction<T>>;

export type { ToggleItems, Setter };
