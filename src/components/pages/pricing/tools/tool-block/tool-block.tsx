import Image from 'next/image';

import clsx from 'clsx';

import type { ClassName } from '@/types/classname';

import type { Tool } from '../tools';

type ToolBlockProps = ClassName & Tool;

function ToolBlock({ logo, title, description, image, gradient, className }: ToolBlockProps) {
  return (
    <li
      className={clsx('overflow-hidden rounded-lg p-px', className, {
        'col-span-2 sm:col-span-full sm:min-h-[287px]': image,
        'bg-gradient-grey-border': !gradient,
        'bg-gradient-right-bottom-orange-border sm:bg-none': gradient === 'right',
        'bg-gradient-left-bottom-orage-border md:bg-gradient-right-top-orange-border sm:bg-none':
          gradient === 'left',
        'bg-gradient-center-bottom-orange-border sm:order-last': gradient === 'center',
      })}
    >
      <div
        className={clsx('relative flex h-full rounded-lg bg-grey-10 p-8 lg:p-[23px] sm:flex-col', {
          'bg-gradient-left-bottom-orange md:bg-gradient-right-top-orange sm:bg-none':
            gradient === 'left',
          'bg-gradient-center-bottom-orange': gradient === 'center',
          'bg-gradient-right-bottom-orange sm:bg-none': gradient === 'right',
        })}
      >
        <div
          className={clsx({
            'w-1/3 sm:flex sm:w-full sm:flex-col': image,
          })}
        >
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
        {image && (
          <div className="w-2/3">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={image.className}
            />
          </div>
        )}
      </div>
    </li>
  );
}

export default ToolBlock;
