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
    <ul className="mx-auto mt-[69px] flex w-full max-w-[896px] justify-between text-start">
      {textCardsData.map((item, index) => (
        <li className="w-full max-w-[384px]" key={index}>
          <Image className="" src={item.icon} width={24} height={24} alt={item.heading} />
          <b className="mt-4 block text-20 font-medium leading-dense tracking-[-0.8px]">
            {item.heading}
          </b>
          <p className="mt-4 text-16 font-light leading-normal text-grey-70">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
