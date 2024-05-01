import clsx from 'clsx';

import QuoteIcon from '@/svgs/pages/enterprise/testimonials.inline.svg';

interface TestimonialProps {
  className?: string;
  quote: string;
  name: string;
  position: string;
}

function Testimonial({ className = '', quote, name, position }: TestimonialProps) {
  return (
    <div
      className={clsx(
        'testimonial safe-paddings mt-[184px] lg:mt-[152px] md:mt-[85px] sm:mt-6',
        className,
      )}
    >
      <figure className="mx-auto flex max-w-[703px] flex-col items-center text-center md:max-w-[512px] sm:max-w-[320px]">
        <h2 className="text-40 font-medium leading-dense tracking-tight lg:text-32 lg:font-semibold md:text-28">
          They speak for us
        </h2>
        <blockquote className="mt-[48px] lg:mt-8 md:mt-7 sm:mt-6">
          <p className="text-28 font-light leading-normal tracking-tight lg:text-24 md:text-20">
            {quote}
          </p>
        </blockquote>

        <figcaption className="mt-8 flex items-center gap-x-4 text-start leading-tight text-white md:mt-[29px] sm:mt-6">
          <QuoteIcon className="h-[36px] w-[36px]" width={72} height={72} aria-hidden />
          <div className="flex flex-col gap-y-0.5">
            <p className="text-16 leading-snug">{name}</p>
            <p className="text-14 font-light not-italic leading-snug text-grey-70">{position}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default Testimonial;
