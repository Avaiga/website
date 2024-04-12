import Image from 'next/image';

import FirstCard from '@/images/pages/about-us/contribute/1-card.png';
import SecondCard from '@/images/pages/about-us/contribute/2-card.png';
import ThirdCard from '@/images/pages/about-us/contribute/3-card.png';

import Button from '@/components/shared/button';

const contributeListData = [
  {
    image: FirstCard,
    alt: 'Fix bugs',
    heading: 'Fix bugs',
    text: 'Help us identify unwanted behaviors in the product and fix them.',
  },
  {
    image: SecondCard,
    alt: 'Implement features',
    heading: 'Implement features',
    text: 'Chose one of the incoming features from our list, or develop your own.',
  },
  {
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
        <p className="mx-auto max-w-[768px] pt-4 text-18 font-light leading-snug text-grey-70 md:max-w-[608px] md:pt-[19px] sm:max-w-[303px] sm:pt-2.5 sm:text-16">
          Join Taipy&apos;s development community today! Your contributions are greatly appreciated
          and will be duly acknowledged. Don&apos;t hesitate and be part of the Taipy adventure!
        </p>
        <ul className="mx-auto mt-16 flex w-full justify-between gap-4 text-start lg:mt-[49px] lg:max-w-[960px] md:mt-10 md:flex-col md:items-center md:gap-[18px] sm:mt-8 sm:gap-[22px]">
          {contributeListData.map(({ image, alt, heading, text }, index) => (
            <li
              className="max-w-[383px] overflow-hidden rounded-[8px] border border-[#2A2A2D] bg-grey-10 lg:max-w-[304px] md:flex md:w-full md:max-w-[647px] sm:flex-wrap sm:gap-0"
              key={index}
            >
              <div className="relative h-[263px] w-full overflow-hidden lg:h-[208px] md:h-[192px] sm:h-[217px]">
                <Image className="mt-2.5 object-cover" src={image} fill={true} alt={alt} />
              </div>
              <div className="w-full md:flex md:max-w-[336px] md:flex-col md:content-center md:justify-center md:pl-[42px] sm:pl-6 sm:pt-2.5">
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
          className="mt-[55px] w-full max-w-[180px] lg:mt-[40px] lg:text-16 md:mt-[35px] md:text-16 sm:mt-[31px]"
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
