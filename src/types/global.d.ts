import type { Dispatch, SetStateAction } from 'react';

declare global {
  namespace React {
    type Setter<T> = Dispatch<SetStateAction<T>>;
  }
}
