import { SVGProps } from 'react';

import clsx from 'clsx';

import Bcgx from '@/svgs/logos/bcgx.inline.svg';
import Corero from '@/svgs/logos/corero.inline.svg';
import Datacamp from '@/svgs/logos/datacamp.inline.svg';
import Icb from '@/svgs/logos/icb.inline.svg';
import Ifc from '@/svgs/logos/ifc.inline.svg';
import Kdnuggets from '@/svgs/logos/kdnuggets.inline.svg';
import Mousquetaires from '@/svgs/logos/les-mousquetaires.inline.svg';
import Lsdirect from '@/svgs/logos/lsdirect.inline.svg';
import Microsoft from '@/svgs/logos/microsoft.inline.svg';
import Nylas from '@/svgs/logos/nylas.inline.svg';
import Predictive from '@/svgs/logos/predictive-layer.inline.svg';
import Princeton from '@/svgs/logos/princeton-consultants.inline.svg';
import Probtp from '@/svgs/logos/pro-btp.inline.svg';
import Stevens from '@/svgs/logos/stevens.inline.svg';
import Tal from '@/svgs/logos/tal-group.inline.svg';
import Ttc from '@/svgs/logos/ttc.inline.svg';

const styles = {
  border: {
    right: 'border-r',
    bottom: 'border-b',
    left: 'border-l',
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
    logo: Microsoft,
    alt: 'Microsoft',
    width: 183,
    height: 39,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Mousquetaires,
    alt: 'Mousquetaires',
    width: 76,
    height: 54,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Corero,
    alt: 'Corero',
    width: 161,
    height: 36,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Lsdirect,
    alt: 'Lsdirect',
    width: 203,
    height: 40,
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
    logo: Bcgx,
    alt: 'Bcgx',
    width: 136,
    height: 36,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Ttc,
    alt: 'Ttc',
    width: 82,
    height: 55,
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
    logo: Kdnuggets,
    alt: 'Kdnuggets',
    width: 134,
    height: 40,
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
    logo: Datacamp,
    alt: 'Datacamp',
    width: 168,
    height: 36,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Probtp,
    alt: 'Probtp',
    width: 164,
    height: 38,
    borderSide: ['bottom'],
  },
  {
    logo: Icb,
    alt: 'Icb',
    width: 50,
    height: 50,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Nylas,
    alt: 'Nylas',
    width: 143,
    height: 40,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Ifc,
    alt: 'Ifc',
    width: 157,
    height: 40,
    borderSide: ['right', 'bottom'],
  },
  {
    logo: Stevens,
    alt: 'Stevens',
    width: 45,
    height: 57,
    borderSide: ['bottom'],
  },
];

export default function PartnersList() {
  return (
    <ul className="relative mx-auto mt-[58px] flex w-full max-w-[1280px] flex-wrap justify-center md:mt-11">
      {partnersListData.map(({ logo: Logo, width, height, alt, borderSide }, index) => (
        <li
          className={clsx(
            'relative flex h-[160px] w-full max-w-[319px] items-center justify-center border-grey-15',
            borderSide?.map((side) => styles.border[side]),
          )}
          key={index}
        >
          <Logo className="fill-grey-70" width={width} height={height} alt={alt} />
        </li>
      ))}
    </ul>
  );
}
