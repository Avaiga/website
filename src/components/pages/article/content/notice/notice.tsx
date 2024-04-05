import { ReactNode } from 'react';

import clsx from 'clsx';

import { NoticeTypes } from '@/types/blog';

type NoticeProps = {
  children: ReactNode;
  type: NoticeTypes;
  className?: string;
};

function Notice({ type, children, className }: NoticeProps) {
  return (
    <figure
      className={clsx(
        className,
        'not-prose relative my-8 overflow-hidden rounded bg-grey-20 py-4 pl-5 pr-4',
        'after:absolute after:left-0 after:top-0 after:h-full after:w-[3px]',
        {
          'after:bg-grey-80': type === NoticeTypes.NOTE,
          'after:bg-secondary-blue': type === NoticeTypes.INFO,
          'after:bg-code-orange': type === NoticeTypes.WARNING,
          'after:bg-semitones-red': type === NoticeTypes.ATTENTION,
        },
      )}
    >
      <h3
        className={clsx('text-12 font-semibold leading-snug', {
          'text-grey-80': type === NoticeTypes.NOTE,
          'text-secondary-blue': type === NoticeTypes.INFO,
          'text-code-orange': type === NoticeTypes.WARNING,
          'text-semitones-red': type === NoticeTypes.ATTENTION,
        })}
      >
        {type.toUpperCase()}
      </h3>
      <div className="mt-1.5 max-w-none text-16 leading-relaxed text-grey-98">{children}</div>
    </figure>
  );
}

export default Notice;
