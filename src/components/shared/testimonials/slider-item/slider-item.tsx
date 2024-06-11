import clsx from 'clsx';

import QuoteIcon from '@/svgs/pages/enterprise/testimonials.inline.svg';

import { TestimonialItem } from '../testimonials';

function SliderItem({ text, authorName, authorTitle }: TestimonialItem) {
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
        <QuoteIcon className="h-[36px] w-[36px]" width={72} height={72} aria-hidden />
        <div className="flex flex-col gap-y-0.5">
          <p className="text-16 leading-snug">{authorName}</p>
          <p className="text-14 font-light not-italic leading-snug text-grey-70">{authorTitle}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default SliderItem;
