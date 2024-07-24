'use client';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import QuoteIcon from '@/svgs/icons/quote-sign.inline.svg';
import ArrowIcon from '@/svgs/pages/pricing/faq/new-arrow.inline.svg';

interface TestimonialItem {
  text: string;
  authorName: string;
  authorTitle: string;
  logo?: string;
}

interface ArrowProps {
  onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
  const { onClick } = props;

  return (
    <button
      className="absolute right-0 top-[-50px] md:-top-11"
      type="button"
      aria-label="Next testimonial"
      onClick={onClick}
    >
      <ArrowIcon
        className="size-9 shrink-0 rotate-90 opacity-80 transition-[fill,transform] duration-200 md:size-6"
        aria-hidden
      />
    </button>
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { onClick } = props;

  return (
    <button
      className="absolute right-[50px] top-[-50px] md:-top-11 md:right-[38px]"
      type="button"
      aria-label="Prev testimonial"
      onClick={onClick}
    >
      <ArrowIcon
        className="size-9 shrink-0 -rotate-90 opacity-80 transition-[fill,transform] duration-200 md:size-6"
        aria-hidden
      />
    </button>
  );
}

function SliderItem({ text, authorName, authorTitle }: TestimonialItem) {
  return (
    <figure>
      <blockquote>
        <p className="text-24 font-light leading-normal tracking-tight text-white lg:text-20 sm:text-18 sm:tracking-normal">
          {text}
        </p>
      </blockquote>
      <figcaption className="mt-3.5 flex items-center gap-x-3.5">
        <div className="flex items-center gap-x-2">
          <span className="font-medium leading-tight tracking-snug text-grey-70 sm:text-14">
            {authorName}
          </span>
          <div className="size-1 rounded-full bg-grey-30" aria-hidden />
          <span className="leading-tight tracking-snug text-grey-60 sm:text-14">{authorTitle}</span>
        </div>
      </figcaption>
    </figure>
  );
}

function Testimonials({ items }: { items: TestimonialItem[] }) {
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative">
      <QuoteIcon className="w-10 lg:w-9 sm:w-[30px]" width={40} height={40} aria-hidden />
      <Slider className="mt-[18px] !flex w-full justify-between md:mt-5 sm:mt-3.5" {...settings}>
        {items.map((item, index) => (
          <SliderItem key={index} {...item} />
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
