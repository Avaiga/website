import Image from 'next/image';

import clsx from 'clsx';

import type { ClassName } from '@/types/classname';

import type { Tool } from '../tools';

type ToolBlockProps = ClassName & Tool;

function ToolBlock({ logo, title, description, image, gradient, className }: ToolBlockProps) {
  return (
    <li
      className={clsx('grid overflow-hidden rounded-lg p-px', className, {
        'col-span-2': image,
        'bg-gradient-grey-border': !gradient || gradient === 'right',
        'bg-gradient-left-bottom-orage-border': gradient === 'left',
        'bg-gradient-center-bottom-orange-border': gradient === 'center',
      })}
    >
      <div
        className={clsx('relative flex h-full rounded-lg bg-grey-10 p-8', {
          'bg-gradient-left-bottom-orange': gradient === 'left',
          'bg-gradient-center-bottom-orange': gradient === 'center',
          'bg-gradient-right-bottom-orange': gradient === 'right',
        })}
      >
        <div>
          <Image src={logo} alt="" width={40} height={40} />
          <h3 className="mt-6 text-20 font-semibold leading-snug">{title}</h3>
          <p className="mt-2 text-16 leading-snug text-grey-70">{description}</p>
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
