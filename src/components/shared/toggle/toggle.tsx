'use client';

import clsx from 'clsx';

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
    <div className={clsx('flex rounded-full bg-grey-10 p-[3px]', className)}>
      {items.map(({ title, specialInfo }, index) => (
        <div
          className={clsx(
            'flex min-w-[163px] cursor-pointer select-none flex-row items-center justify-center gap-x-1 rounded-full px-[18px] py-[5px] text-grey-50',
            {
              'bg-grey-20 font-medium text-white': toggleItem === title,
            },
          )}
          key={`${title}-${index}`}
          onClick={handleClick(title)}
        >
          <p className="text-16 leading-dense">{title}</p>
          {specialInfo && (
            <div className="shrink-0 rounded-full bg-[#FF3626] px-2 py-0.5 text-white">
              <p className="text-13 font-medium leading-[1.22] tracking-snug">{specialInfo}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Toggle;
