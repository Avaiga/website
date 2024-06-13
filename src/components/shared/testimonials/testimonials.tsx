'use client';

import Slider from 'react-slick';

import clsx from 'clsx';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import SliderItem from '@/components/shared/testimonials/slider-item';

import ArrowIcon from '@/svgs/pages/pricing/faq/new-arrow.inline.svg';

interface ArrowProps {
  onClick?: () => void;
}

export interface TestimonialItem {
  text: string;
  authorName: string;
  authorTitle: string;
  logo: string;
}

interface TestimonialsProps {
  items: TestimonialItem[];
  className?: string;
}

function SampleNextArrow(props: ArrowProps) {
  const { onClick } = props;

  return (
    <button type="button" aria-label="Next testimonial" onClick={onClick}>
      <ArrowIcon
        className="h-8 w-8 shrink-0 rotate-90 opacity-80 transition-[fill,transform] duration-200"
        aria-hidden
      />
    </button>
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { onClick } = props;

  return (
    <button type="button" aria-label="Prev testimonial" onClick={onClick}>
      <ArrowIcon
        className="h-8 w-8 shrink-0 -rotate-90 opacity-80 transition-[fill,transform] duration-200"
        aria-hidden
      />
    </button>
  );
}

function Testimonials({ items, className }: TestimonialsProps) {
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          customPaging: () => (
            <div className="h-2 w-2 rounded-full border border-grey-80 bg-transparent" />
          ),
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className={clsx('testimonials safe-paddings mt-[120px]', className)}>
      <div className="container relative flex max-w-[920px] flex-col items-center md:max-w-[696px]">
        <h2 className="text-40 font-medium leading-dense tracking-tight lg:text-32 lg:font-semibold md:text-28">
          They speak for us
        </h2>
        <Slider className="!flex w-full justify-between" {...settings}>
          {items.map((item, index) => (
            <SliderItem key={index} {...item} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
