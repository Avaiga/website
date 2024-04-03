import Image from 'next/image';

import clsx from 'clsx';

import type { ClassName } from '@/types/classname';

import type { Tool } from '../tools';

type ToolBlockProps = ClassName & Tool;

function ToolBlock({ logo, title, description, image, gradient, className }: ToolBlockProps) {
  return (
    <div
      className={clsx(
        'col-span-1 grid overflow-hidden rounded-lg bg-[linear-gradient(180deg,#2A2A2D_0%,rgba(42,42,45,0.5)_4.86%,rgba(42,42,45,0.4)_16.55%)] p-px',
        className,
        {
          'col-span-2': image,
          'bg-[conic-gradient(from_150deg_at_50%_50%,#71C4FF00_4%,rgba(255,102,26,0.5)_24%,#71C4FF00_34%,#71C4FF00_56%)]':
            gradient === 'left',
          'bg-[conic-gradient(from_90deg_at_55%_53%,#71C4FF00_1%,rgba(255,102,26,0.5)_22%,#71C4FF00_48%,#71C4FF00_62%)]':
            gradient === 'center',
          'bg-[conic-gradient(from_50deg_at_50%_50%,#71C4FF00_4%,rgba(255,102,26,0.5)_24%,#71C4FF00_34%,#71C4FF00_56%)]':
            gradient === 'right',
        },
      )}
    >
      <div
        className={clsx('relative flex h-full rounded-lg bg-grey-10 p-8', {
          'bg-[linear-gradient(242.12deg,rgba(255,102,26,0)_47.5%,rgba(255,55,26,0.05)_100%)]':
            gradient === 'left',
          'bg-[linear-gradient(180deg,rgba(255,102,26,0)_47.5%,rgba(255,55,26,0.05)_100%)]':
            gradient === 'center',
          'bg-[linear-gradient(117.88deg,rgba(255,102,26,0)_47.5%,rgba(255,55,26,0.05)_100%)]':
            gradient === 'right',
        })}
      >
        <div className="h-fit">
          <Image src={logo} alt={title} width={40} height={40} />
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
    </div>
  );
}

export default ToolBlock;
