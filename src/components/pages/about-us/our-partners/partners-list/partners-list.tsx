import Image from 'next/image';

import Icb from '@/images/pages/about-us/customers-partners/icb.png';
import Mousquetaires from '@/images/pages/about-us/customers-partners/mousquetaires.png';
import Predictive from '@/images/pages/about-us/customers-partners/predictive.png';
import Princeton from '@/images/pages/about-us/customers-partners/princeton.png';
import Tal from '@/images/pages/about-us/customers-partners/tal.png';
import clsx from 'clsx';

const styles = {
  border: {
    top: 'border-grey-15 border-t-[1px]',
    right: 'border-grey-15 border-r-[1px]',
    bottom: 'border-grey-15 border-b-[1px]',
    left: 'border-grey-15 border-l-[1px]',
  },
};

interface Partner {
  logo: typeof Tal | typeof Icb | typeof Princeton | typeof Predictive | typeof Mousquetaires;
  alt: string;
  width: number;
  height: number;
  borderSide?: (keyof typeof styles.border)[];
}

const partnersListData: Partner[] = [
  {
    logo: Tal,
    alt: '.Partners and customers logos',
    width: 99,
    height: 55,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Icb,
    alt: '.Partners and customers logos',
    width: 50,
    height: 50,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Princeton,
    alt: '.Partners and customers logos',
    width: 171,
    height: 49,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Icb,
    alt: '.Partners and customers logos',
    width: 50,
    height: 50,
    borderSide: ['bottom'],
  },
  {
    logo: Predictive,
    alt: '.Partners and customers logos',
    width: 127,
    height: 37,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Tal,
    alt: '.Partners and customers logos',
    width: 99,
    height: 55,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Mousquetaires,
    alt: '.Partners and customers logos',
    width: 79,
    height: 51,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Predictive,
    alt: '.Partners and customers logos',
    width: 127,
    height: 37,
    borderSide: ['bottom'],
  },
  {
    logo: Princeton,
    alt: '.Partners and customers logos',
    width: 171,
    height: 49,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Icb,
    alt: '.Partners and customers logos',
    width: 50,
    height: 50,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Predictive,
    alt: '.Partners and customers logos',
    width: 127,
    height: 37,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Mousquetaires,
    alt: '.Partners and customers logos',
    width: 79,
    height: 51,
    borderSide: ['bottom'],
  },
  {
    logo: Tal,
    alt: '.Partners and customers logos',
    width: 99,
    height: 55,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Mousquetaires,
    alt: '.Partners and customers logos',
    width: 79,
    height: 51,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Princeton,
    alt: '.Partners and customers logos',
    width: 171,
    height: 49,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Tal,
    alt: '.Partners and customers logos',
    width: 99,
    height: 55,
    borderSide: ['bottom'],
  },
  {
    logo: Icb,
    alt: '.Partners and customers logos',
    width: 50,
    height: 50,
    borderSide: ['right', 'left'],
  },
  {
    logo: Tal,
    alt: '.Partners and customers logos',
    width: 99,
    height: 99,
    borderSide: ['right'],
  },
];

export default function PartnersList() {
  return (
    <ul className="relative mx-auto mt-[58px] flex w-full max-w-[1280px] flex-wrap justify-center">
      {partnersListData.map((item, index) => (
        <li
          className={clsx(
            'relative flex h-[160px] w-full max-w-[320px] items-center justify-center',
            item.borderSide?.map((side) => styles.border[side]),
          )}
          key={index}
        >
          <Image src={item.logo} width={item.width} height={item.height} alt={item.alt} />
        </li>
      ))}
    </ul>
  );
}
