import { SVGProps } from 'react';

import clsx from 'clsx';

import Icb from '@/svgs/logos/icb.inline.svg';
import Mousquetaires from '@/svgs/logos/les-mousquetaires.inline.svg';
import Predictive from '@/svgs/logos/predictive-layer.inline.svg';
import Princeton from '@/svgs/logos/princeton-consultants.inline.svg';
import Tal from '@/svgs/logos/tal-group.inline.svg';

const styles = {
  border: {
    top: 'border-grey-15 border-t-[1px]',
    right: 'border-grey-15 border-r-[1px]',
    bottom: 'border-grey-15 border-b-[1px]',
    left: 'border-grey-15 border-l-[1px]',
  },
};

type ExtendedSVGProps<T extends SVGElement> = SVGProps<T> & {
  alt?: string;
};

interface Partner {
  logo: React.FunctionComponent<ExtendedSVGProps<SVGSVGElement>>;
  alt: string;
  width: number;
  height: number;
  borderSide?: (keyof typeof styles.border)[];
}

const partnersListData: Partner[] = [
  {
    logo: Tal,
    alt: 'Tal Group',
    width: 99,
    height: 55,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Icb,
    alt: 'Icb',
    width: 50,
    height: 50,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Princeton,
    alt: 'Princeton Consultants',
    width: 171,
    height: 49,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Icb,
    alt: 'Icb',
    width: 50,
    height: 50,
    borderSide: ['bottom'],
  },
  {
    logo: Predictive,
    alt: 'Predictive Layer',
    width: 127,
    height: 37,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Tal,
    alt: 'Tal Group',
    width: 99,
    height: 55,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Mousquetaires,
    alt: 'Les Mousquetaires',
    width: 79,
    height: 51,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Predictive,
    alt: 'Predictive Layer',
    width: 127,
    height: 37,
    borderSide: ['bottom'],
  },
  {
    logo: Princeton,
    alt: 'Princeton Consultants',
    width: 171,
    height: 49,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Icb,
    alt: 'Icb',
    width: 50,
    height: 50,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Predictive,
    alt: 'Predictive Layer',
    width: 127,
    height: 37,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Mousquetaires,
    alt: 'Les Mousquetaires',
    width: 79,
    height: 51,
    borderSide: ['bottom'],
  },
  {
    logo: Tal,
    alt: 'Tal Group',
    width: 99,
    height: 55,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Mousquetaires,
    alt: 'Les Mousquetaires',
    width: 79,
    height: 51,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Princeton,
    alt: 'Princeton Consultants',
    width: 171,
    height: 49,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Tal,
    alt: 'Tal Group',
    width: 99,
    height: 55,
    borderSide: ['bottom'],
  },
  {
    logo: Icb,
    alt: 'Icb',
    width: 50,
    height: 50,
    borderSide: ['right', 'left'],
  },
  {
    logo: Tal,
    alt: 'Tal Group',
    width: 99,
    height: 99,
    borderSide: ['right'],
  },
];

export default function PartnersList() {
  return (
    <ul className="relative mx-auto mt-[58px] flex w-full max-w-[1280px] flex-wrap justify-center">
      {partnersListData.map(({ logo: Logo, width, height, alt, borderSide }, index) => (
        <li
          className={clsx(
            'relative flex h-[160px] w-full max-w-[320px] items-center justify-center',
            borderSide?.map((side) => styles.border[side]),
          )}
          key={index}
        >
          <Logo
            className="fill-grey-70 md:h-[33px] sm:h-[19px] sm:w-auto"
            width={width}
            height={height}
            alt={alt}
          />
        </li>
      ))}
    </ul>
  );
}
