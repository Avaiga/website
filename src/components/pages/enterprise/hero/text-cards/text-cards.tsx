import Image from 'next/image';

import Scalability from '@/svgs/pages/enterprise/hero/scalability-icon.svg';
import User from '@/svgs/pages/enterprise/hero/users-icon.svg';

const textCardsData = [
  {
    icon: Scalability,
    heading: 'Performance & Scalability',
    text: 'Taipy Enterprise excels in backend operations, effortlessly managing large-scale tasks across CPU or GPU clusters and providing advanced Telemetry controls for monitoring.',
  },
  {
    icon: User,
    heading: 'User management',
    text: 'Easily tailor access levels for different user groups, granting full application access to some and restricting others to specific features like pages, buttons, or charts.',
  },
];

export default function TextCards() {
  return (
    <ul className="mx-auto mt-16 flex max-w-[896px] justify-between text-start lg:mt-[54px] lg:max-w-[768px] lg:gap-x-[128px] md:mt-9 md:max-w-[640px] md:gap-x-[66px] sm:mt-7 sm:flex-col sm:gap-y-[26px]">
      {textCardsData.map(({ icon, heading, text }, index) => (
        <li className="w-full max-w-[384px]" key={index}>
          <Image
            className="sm:h-5 sm:w-5"
            src={icon}
            width={24}
            height={24}
            alt={`${heading}-image.jpg`}
          />
          <h3 className="mt-4 block text-20 font-medium leading-dense tracking-tight lg:text-18 sm:text-16 sm:font-semibold sm:tracking-normal">
            {heading}
          </h3>
          <p className="lg:text-normal mt-4 font-light leading-normal text-grey-70 lg:mt-[14px] lg:text-14 lg:leading-snug sm:mt-2.5">
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
}
