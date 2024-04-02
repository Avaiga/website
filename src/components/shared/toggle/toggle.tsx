'use client';

import clsx from 'clsx';

import { ClassName } from '@/types/classname';

type ToggleProps<T extends string> = ClassName & {
  items: [Shared.ToggleItem<T>, Shared.ToggleItem<T>];
  toggleItem: T;
  setToggleItem: React.Setter<T>;
};

function Toggle<T extends string>({ items, toggleItem, setToggleItem, className }: ToggleProps<T>) {
  return (
    <div className={clsx('flex rounded-full bg-grey-10 p-[3px]', className)}>
      {items.map(({ title, specialInfo }, index) => (
        <div
          className={clsx(
            'flex min-w-[166px] cursor-pointer select-none flex-row items-center justify-center gap-x-1 rounded-full px-[18px] py-[5px] font-normal text-grey-50 hover:bg-grey-20/50',
            {
              'bg-grey-20 font-medium text-white hover:bg-grey-20': toggleItem === title,
            },
          )}
          key={`${title}-${index}`}
          onClick={() => setToggleItem(title)}
        >
          <p className="text-16 leading-[26px]">{title}</p>
          {specialInfo && (
            <div className="shrink-0 rounded-full bg-[#FF3626] px-[9px] py-[2px] text-white">
              <p className="text-13 font-medium leading-[18px]">{specialInfo}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Toggle;
