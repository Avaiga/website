import Image from 'next/image';

import FirstCard from '@/images/pages/about-us/contribute/1-card.png';
import SecondCard from '@/images/pages/about-us/contribute/2-card.png';
import ThirdCard from '@/images/pages/about-us/contribute/3-card.png';

import Button from '@/components/shared/button';

const contributeListData = [
  {
    secondaryClass: 'ml-[5px] lg:top-[-11px] md:mt-[-16px] md:ml-[8px] sm:mt-[-7px]',
    image: FirstCard,
    alt: 'Fix bugs',
    heading: 'Fix bugs',
    text: 'Help us identify unwanted behaviors in the product and fix them.',
  },
  {
    secondaryClass: 'mt-4 lg:mt-[18px] md:mt-[5px] md:ml-[5px] sm:ml-[1px] sm:mt-[14px]',
    image: SecondCard,
    alt: 'Implement features',
    heading: 'Implement features',
    text: 'Chose one of the incoming features from our list, or develop your own.',
  },
  {
    secondaryClass: 'mt-[10px] lg:mt-[10px] md:mt-[5px]',
    image: ThirdCard,
    alt: 'Submit feedback',
    heading: 'Submit feedback',
    text: 'Tell us what you love and what you would improve in Taipy.',
  },
];

export default function Contribute() {
  return (
    <section className="contribute pt-[196px] lg:pt-36 md:pt-[126px] sm:pt-[77px]">
      <div className="container-narrow max-w-[1277px] text-center">
        <span className="text-16 font-normal leading-snug text-primary-red">Contribute</span>
        <h2 className="mx-auto pt-4 text-56 font-semibold leading-dense tracking-tight lg:text-48 md:max-w-[516px] md:text-40 sm:pt-3 sm:text-28">
          Get started to drive your data in minutes
        </h2>
        <p className="mx-auto max-w-[768px] pt-4 text-18 font-light leading-snug text-grey-70 md:max-w-[608px] sm:max-w-[303px] sm:pt-2.5 sm:text-16">
          Join Taipy&apos;s development community today! Your contributions are greatly appreciated
          and will be duly acknowledged. Don&apos;t hesitate and be part of the Taipy adventure!
        </p>
        <ul className="mt-16 flex w-full justify-between gap-4 text-start lg:mt-[49px] md:mt-10 md:flex-col md:items-center md:gap-5 sm:mt-8">
          {contributeListData.map(({ secondaryClass, image, alt, heading, text }, index) => (
            <li
              className="flex h-[385px] w-full max-w-[383px] overflow-hidden rounded-[8px] border border-[#2A2A2D] bg-grey-10 lg:h-[305px] lg:max-w-[304px] md:h-[192px] md:max-w-[647px] sm:h-[322px] sm:flex-wrap sm:gap-0"
              key={index}
            >
              <div className="relative h-[263px] w-full overflow-hidden lg:h-[208px] md:max-w-[304px] sm:h-[217px]">
                <Image
                  className={`${'object-cover'} ${secondaryClass}`}
                  src={image}
                  fill={true}
                  alt={alt}
                />
              </div>
              <div className="w-full md:flex md:max-w-[336px] md:flex-col md:items-center md:justify-center sm:justify-start">
                <div className="w-full p-8 pt-0 lg:p-[25px] lg:pt-0 md:max-w-[232px] md:p-0 sm:min-h-[90px] sm:max-w-[272px]">
                  <h3 className="text-20 font-semibold leading-snug lg:text-16 md:text-20 sm:text-16">
                    {heading}
                  </h3>
                  <p className="pt-2 text-18 leading-normal text-grey-70 lg:pt-2.5 lg:text-14 md:text-16 sm:max-w-[263px] sm:pt-2 sm:text-14">
                    {text}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Button
          className="mt-[55px] w-full max-w-[180px] lg:mt-[40px] lg:text-16 md:mt-[38px] md:text-16 sm:mt-[26px]"
          size="lg"
          theme="red-filled"
          href="https://docs.taipy.io/en/latest/contributing/contributing/"
        >
          Learn more
        </Button>
      </div>
    </section>
  );
}
