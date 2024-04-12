import Image from 'next/image';

import FirstCard from '@/images/pages/about-us/contribute/1-card.png';
import SecondCard from '@/images/pages/about-us/contribute/2-card.png';
import ThirdCard from '@/images/pages/about-us/contribute/3-card.png';

import Button from '@/components/shared/button';

const contributeListData = [
  {
    secondaryClass: 'ml-[5px] mb:top-[-11px]',
    image: FirstCard,
    alt: 'Fix bugs',
    heading: 'Fix bugs',
    text: 'Help us identify unwanted behaviors in the product and fix them.',
  },
  {
    secondaryClass: 'mt-4 md:mt-[18px]',
    image: SecondCard,
    alt: 'Implement features',
    heading: 'Implement features',
    text: 'Chose one of the incoming features from our list, or develop your own.',
  },
  {
    secondaryClass: 'mt-[10px] md:mt-[10px]',
    image: ThirdCard,
    alt: 'Submit feedback',
    heading: 'Submit feedback',
    text: 'Tell us what you love and what you would improve in Taipy.',
  },
];

export default function Contribute() {
  return (
    <section className="contribute pt-[196px] lg:pt-36">
      <div className="container-narrow max-w-[1277px] text-center">
        <span className="text-16 font-normal leading-snug text-primary-red">Contribute</span>
        <h2 className="pt-4 text-56 font-semibold leading-dense tracking-tight lg:text-48">
          Get started to drive your data in minutes
        </h2>
        <p className="mx-auto w-full max-w-[768px] pt-4 text-18 font-light leading-snug text-grey-70">
          Join Taipy&apos;s development community today! Your contributions are greatly appreciated
          and will be duly acknowledged. Don&apos;t hesitate and be part of the Taipy adventure!
        </p>
        <ul className="mt-16 flex w-full justify-between gap-4 text-start lg:mt-[49px]">
          {contributeListData.map(({ secondaryClass, image, alt, heading, text }, index) => (
            <li
              className="flex h-[385px] w-full max-w-[383px] flex-col overflow-hidden bg-grey-10 lg:h-[305px] lg:max-w-[304px]"
              key={index}
            >
              <div className="relative h-[263px] w-full overflow-hidden lg:h-[208px]">
                <Image
                  className={`${'object-cover'} ${secondaryClass}`}
                  src={image}
                  fill={true}
                  alt={alt}
                />
              </div>
              <div className="p-8 pt-0 lg:p-[25px] lg:pt-0">
                <h3 className="text-20 font-semibold leading-snug lg:text-16">{heading}</h3>
                <p className="pt-2 text-18 font-normal leading-normal text-grey-70 lg:pt-2.5 lg:text-14">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <Button
          className="mt-[55px] w-full max-w-[180px] lg:mt-[40px] lg:text-16 sm:mt-5"
          size="lg"
          theme="red-filled"
          href="https://docs.taipy.io/en/latest/contributing/contributing/"
        >
          Learn more
          <span className="sr-only">about contributing to Taipy</span>
        </Button>
      </div>
    </section>
  );
}
