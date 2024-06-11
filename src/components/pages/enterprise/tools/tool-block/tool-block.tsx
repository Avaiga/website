import Image from 'next/image';

import clsx from 'clsx';

import Link from '@/components/shared/link';

import type { ClassName } from '@/types/classname';

import type { Tool } from '../tools';

type ToolBlockProps = ClassName & Tool;

function ToolBlock({ logo, title, description, link, gradient, className }: ToolBlockProps) {
  return (
    <li
      className={clsx('overflow-hidden rounded-lg p-px', className, {
        'bg-gradient-grey-border': !gradient,
        'bg-gradient-left-top-orange-border sm:bg-none': gradient === 'right',
        'bg-gradient-right-top-orange-border sm:bg-none': gradient === 'left',
        'bg-gradient-center-top-orange-border sm:order-first': gradient === 'center',
      })}
    >
      <div
        className={clsx(
          'relative flex h-full flex-col gap-y-2.5 rounded-lg bg-grey-10 p-[31px] lg:p-[23px] sm:flex-col',
          {
            'bg-gradient-right-top-orange sm:bg-none': gradient === 'left',
            'bg-gradient-center-top-orange': gradient === 'center',
            'bg-gradient-left-top-orange sm:bg-none': gradient === 'right',
          },
        )}
      >
        <div>
          <Image
            src={logo}
            alt={`${title}-image.jpg`}
            width={40}
            height={40}
            className="lg:h-9 lg:w-9 sm:h-8 sm:w-8"
          />
          <h3 className="mt-6 text-20 font-semibold leading-snug lg:text-16 sm:mt-5">{title}</h3>
          <p className="mt-2 text-16 leading-snug text-grey-70 lg:text-14">{description}</p>
        </div>
        {link && (
          <Link size="md" arrowTheme="red" href={link.href}>
            {link.linkText}
          </Link>
        )}
      </div>
    </li>
  );
}

export default ToolBlock;
