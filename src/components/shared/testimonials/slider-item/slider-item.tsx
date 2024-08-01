import Image from 'next/image';

import clsx from 'clsx';

import { TestimonialsItem } from '@/types/shared';

function SliderItem({ text, authorName, authorTitle, logoImage }: TestimonialsItem) {
  return (
    <figure
      className={clsx(
        'mx-auto mt-12 flex max-w-[703px] flex-col items-center justify-center lg:mt-8 md:mt-7 md:max-w-[512px] sm:mb-4 sm:mt-6',
      )}
    >
      <blockquote>
        <p className="text-center text-28 font-light leading-normal tracking-tight lg:text-24 md:text-20">
          &quot;{text}&quot;
        </p>
      </blockquote>

      <figcaption className="mt-8 flex items-center gap-x-4 text-start leading-tight text-white md:mt-[29px] sm:mt-6">
        <Image
          className="h-9 w-9"
          src={logoImage.asset.url}
          width={36}
          height={36}
          alt=""
          aria-hidden
        />
        <div className="flex flex-col gap-y-0.5">
          <p className="text-16 leading-snug">{authorName}</p>
          <p className="text-14 font-light not-italic leading-snug text-grey-70">{authorTitle}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default SliderItem;
