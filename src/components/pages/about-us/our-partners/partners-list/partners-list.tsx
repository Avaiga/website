import { SVGProps } from 'react';

import clsx from 'clsx';

import Bcgx from '@/svgs/logos/bcgx.inline.svg';
import Corero from '@/svgs/logos/corero.inline.svg';
import Datacamp from '@/svgs/logos/datacamp.inline.svg';
import Icb from '@/svgs/logos/icb.inline.svg';
import Ifc from '@/svgs/logos/ifc.inline.svg';
import Kdnuggets from '@/svgs/logos/kdnuggets.inline.svg';
import Knowledge from '@/svgs/logos/knowledge.inline.svg';
import Mousquetaires from '@/svgs/logos/les-mousquetaires.inline.svg';
import Lsdirect from '@/svgs/logos/lsdirect.inline.svg';
import Microsoft from '@/svgs/logos/microsoft.inline.svg';
import Nylas from '@/svgs/logos/nylas.inline.svg';
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
  secondClass?: string;
}

const partnersListData: Partner[] = [
  {
    logo: Microsoft,
    alt: 'Microsoft',
    width: 183,
    height: 39,
    secondClass: 'border-r border-b',
  },
  {
    logo: Mousquetaires,
    alt: 'Mousquetaires',
    width: 76,
    height: 54,
    secondClass: 'border-r border-b',
  },
  {
    logo: Corero,
    alt: 'Corero',
    width: 161,
    height: 36,
    secondClass: 'border-r border-b lg:border-r-0',
  },
  {
    logo: Lsdirect,
    alt: 'Lsdirect',
    width: 203,
    height: 40,
    secondClass: 'border-b lg:border-r',
  },
  {
    logo: Princeton,
    alt: 'Princeton Consultants',
    width: 171,
    height: 49,
    secondClass: 'border-r border-b',
  },
  {
    logo: Bcgx,
    alt: 'Bcgx',
    width: 136,
    height: 36,
    secondClass: 'border-r border-b lg:border-r-0',
  },
  {
    logo: Ttc,
    alt: 'Ttc',
    width: 82,
    height: 55,
    secondClass: 'border-r border-b',
  },
  {
    logo: Knowledge,
    alt: 'Predictive Layer',
    width: 196,
    height: 39,
    secondClass: 'border-b lg:border-r',
  },
  {
    logo: Kdnuggets,
    alt: 'Kdnuggets',
    width: 135,
    height: 40,
    secondClass: 'border-r border-b lg:border-r-0',
  },
  {
    logo: Tal,
    alt: 'Tal Group',
    width: 110,
    height: 55,
    secondClass: 'border-r border-b',
  },
  {
    logo: Datacamp,
    alt: 'Datacamp',
    width: 168,
    height: 36,
    secondClass: 'border-r border-b',
  },
  {
    logo: Probtp,
    alt: 'Probtp',
    width: 164,
    height: 38,
    secondClass: 'border-b',
  },
  {
    logo: Icb,
    alt: 'Icb',
    width: 50,
    height: 50,
    secondClass: 'border-r lg:border-b',
  },
  {
    logo: Nylas,
    alt: 'Nylas',
    width: 143,
    height: 40,
    secondClass: 'border-r lg:border-b',
  },
  {
    logo: Ifc,
    alt: 'Ifc',
    width: 157,
    height: 40,
    secondClass: 'border-r lg:border-r-0 lg:border-b',
  },
  {
    logo: Stevens,
    alt: 'Stevens',
    width: 45,
    height: 57,
    secondClass: 'lg:border-r lg:border-l',
  },
];

export default function PartnersList() {
  const buttonClassName = clsx(styles.border);

  return (
    <ul className="relative mx-auto mt-[58px] flex w-full max-w-[1280px] flex-wrap justify-center overflow-hidden lg:mt-11">
      {partnersListData.map(({ logo: Logo, width, height, alt, secondClass }, index) => (
        <li
          className={clsx(
            'relative flex h-[160px] w-full max-w-[319px] items-center justify-center border-grey-15',
            secondClass,
            buttonClassName,
          )}
          key={index}
        >
          <Logo className="fill-grey-70" width={width} height={height} alt={alt} />
        </li>
      ))}
    </ul>
  );
}
