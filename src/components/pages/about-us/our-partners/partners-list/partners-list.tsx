import Image from 'next/image';

import Icb from '@/images/pages/about-us/customers-partners/icb.png';
import Mousquetaires from '@/images/pages/about-us/customers-partners/mousquetaires.png';
import Predictive from '@/images/pages/about-us/customers-partners/predictive.png';
import Princeton from '@/images/pages/about-us/customers-partners/princeton.png';
import Tal from '@/images/pages/about-us/customers-partners/tal.png';

const partnersListData = [
  {
    logo: Tal,
    alt: '.Partners and customers logos',
    width: 99,
    height: 55,
  },
  {
    logo: Icb,
    alt: '.Partners and customers logos',
    width: 50,
    height: 50,
  },
  {
    logo: Princeton,
    alt: '.Partners and customers logos',
    width: 171,
    height: 49,
  },
  {
    logo: Icb,
    alt: '.Partners and customers logos',
    width: 50,
    height: 50,
  },
  {
    logo: Predictive,
    alt: '.Partners and customers logos',
    width: 127,
    height: 37,
  },
  {
    logo: Tal,
    alt: '.Partners and customers logos',
    width: 99,
    height: 55,
  },
  {
    logo: Mousquetaires,
    alt: '.Partners and customers logos',
    width: 79,
    height: 51,
  },
  {
    logo: Predictive,
    alt: '.Partners and customers logos',
    width: 127,
    height: 37,
  },
  {
    logo: Princeton,
    alt: '.Partners and customers logos',
    width: 171,
    height: 49,
  },
  {
    logo: Icb,
    alt: '.Partners and customers logos',
    width: 50,
    height: 50,
  },
  {
    logo: Predictive,
    alt: '.Partners and customers logos',
    width: 127,
    height: 37,
  },
  {
    logo: Mousquetaires,
    alt: '.Partners and customers logos',
    width: 79,
    height: 51,
  },
  {
    logo: Tal,
    alt: '.Partners and customers logos',
    width: 99,
    height: 55,
  },
  {
    logo: Mousquetaires,
    alt: '.Partners and customers logos',
    width: 79,
    height: 51,
  },
  {
    logo: Princeton,
    alt: '.Partners and customers logos',
    width: 171,
    height: 49,
  },
  {
    logo: Tal,
    alt: '.Partners and customers logos',
    width: 99,
    height: 55,
  },
  {
    logo: Icb,
    alt: '.Partners and customers logos',
    width: 50,
    height: 50,
  },
  {
    logo: Tal,
    alt: '.Partners and customers logos',
    width: 99,
    height: 55,
  },
];

export default function PartnersList() {
  return (
    <ul className="relative mt-20 flex w-full max-w-[1228px] flex-wrap justify-center">
      {partnersListData.map((item, index) => (
        <li
          className="relative flex h-[133px] w-full max-w-[280px] items-center justify-center"
          key={index}
        >
          <Image
            src={item.logo}
            width={item.width}
            height={item.height}
            quality={70}
            alt={item.alt}
          />
        </li>
      ))}
    </ul>
  );
}
