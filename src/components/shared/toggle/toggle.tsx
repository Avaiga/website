'use client';

import clsx from 'clsx';

import Button from '@/components/shared/button';

import type { ClassName } from '@/types/classname';
import type { Setter, ToggleItems } from '@/types/shared';

type ToggleProps<T extends string> = ClassName & {
  items: ToggleItems<T>;
  toggleItem: T;
  setToggleItem: Setter<T>;
};

function Toggle<T extends string>({ items, toggleItem, setToggleItem, className }: ToggleProps<T>) {
  const handleClick = (title: T) => () => {
    setToggleItem(title);
  };

  return (
    <div className={clsx('flex h-[42px] items-center rounded-full bg-grey-10 px-1', className)}>
      {items.map(({ title }, index) => (
        <Button
          className={clsx(
            'flex h-9 min-w-[160px] cursor-pointer select-none items-center justify-center gap-x-1.5 rounded-full text-grey-50',
            {
              'bg-grey-20 font-medium text-white ': toggleItem === title,
            },
          )}
          key={`${title}-${index}`}
          onClick={handleClick(title)}
        >
          <span className="text-16 leading-snug">{title}</span>
        </Button>
      ))}
    </div>
  );
}

export default Toggle;
