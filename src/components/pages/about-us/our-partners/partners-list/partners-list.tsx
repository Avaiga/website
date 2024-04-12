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
  secondClass?: string;
  secondLogoClass?: string;
}

const partnersListData: Partner[] = [
  {
    logo: Microsoft,
    alt: 'Microsoft',
    secondClass: 'border-r border-b',
    secondLogoClass: 'w-[183px] h-[39px] md:w-[144px] md:h-[31px]',
  },
  {
    logo: Mousquetaires,
    alt: 'Mousquetaires',
    secondClass: 'border-r border-b md:border-r-0',
    secondLogoClass: 'w-[76px] h-[54px] md:w-[60px] md:h-[43px]',
  },
  {
    logo: Corero,
    alt: 'Corero',
    secondClass: 'border-r border-b lg:border-r-0 md:border-r',
    secondLogoClass: 'w-[161px] h-[36px] md:w-[127px] md:h-[28px]',
  },
  {
    logo: Lsdirect,
    alt: 'Lsdirect',
    secondClass: 'border-b lg:border-r md:border-r-0',
    secondLogoClass: 'w-[203px] h-[40px] md:w-[160px] md:h-[32px]',
  },
  {
    logo: Princeton,
    alt: 'Princeton Consultants',
    secondClass: 'border-r border-b',
    secondLogoClass: 'w-[171px] h-[49px] md:w-[135px] md:h-[39px]',
  },
  {
    logo: Bcgx,
    alt: 'Bcgx',
    secondClass: 'border-r border-b lg:border-r-0',
    secondLogoClass: 'w-[136px] h-[36px] md:w-[107px] md:h-[28px]',
  },
  {
    logo: Ttc,
    alt: 'Ttc',
    secondClass: 'border-r border-b',
    secondLogoClass: 'w-[82px] h-[55px] md:w-[65px] md:h-[43px]',
  },
  {
    logo: Knowledge,
    alt: 'Predictive Layer',
    secondClass: 'border-b lg:border-r md:border-r-0',
    secondLogoClass: 'w-[196px] h-[39px] md:w-[158px] md:h-[30px]',
  },
  {
    logo: Kdnuggets,
    alt: 'Kdnuggets',
    secondClass: 'border-r border-b lg:border-r-0 md:border-r',
    secondLogoClass: 'w-[135px] h-[40px] md:w-[105px] md:h-[42px]',
  },
  {
    logo: Tal,
    alt: 'Tal Group',
    secondClass: 'border-r border-b md:border-r-0',
    secondLogoClass: 'w-[110px] h-[55px] md:w-[79px] md:h-[44px]',
  },
  {
    logo: Datacamp,
    alt: 'Datacamp',
    secondClass: 'border-r border-b',
    secondLogoClass: 'w-[168px] h-[36px] md:w-[132px] md:h-[28px]',
  },
  {
    logo: Probtp,
    alt: 'Probtp',
    secondClass: 'border-b md:border-r-0',
    secondLogoClass: 'w-[164px] h-[38px] md:w-[129px] md:h-[30px]',
  },
  {
    logo: Icb,
    alt: 'Icb',
    secondClass: 'border-r lg:border-b',
    secondLogoClass: 'w-[50px] h-[50px] md:w-[43px] md:h-[43px]',
  },
  {
    logo: Nylas,
    alt: 'Nylas',
    secondClass: 'border-r lg:border-b md:border-r-0',
    secondLogoClass: 'w-[143px] h-[40px] md:w-[113px] md:h-[32px]',
  },
  {
    logo: Ifc,
    alt: 'Ifc',
    secondClass: 'border-r lg:border-r-0 lg:border-b md:border-b-0',
    secondLogoClass: 'w-[157px] h-[40px] md:w-[124px] md:h-[32px]',
  },
  {
    logo: Stevens,
    alt: 'Stevens',
    secondClass: 'lg:border-r lg:border-l md:border-r-0',
    secondLogoClass: 'w-[45px] h-[57px] md:w-[35px] md:h-[45px]',
  },
];

export default function PartnersList() {
  const buttonClassName = clsx(styles.border);

  return (
    <ul className="relative mx-auto mt-[58px] flex w-full max-w-[1280px] flex-wrap justify-center overflow-hidden lg:mt-11 md:mt-[37px]">
      {partnersListData.map(({ logo: Logo, alt, secondClass, secondLogoClass }, index) => (
        <li
          className={clsx(
            'relative flex h-[160px] w-full max-w-[319px] items-center justify-center border-grey-15 md:h-[126px] md:max-w-[256px]',
            secondClass,
            buttonClassName,
          )}
          key={index}
        >
          <Logo className={`${'fill-grey-70'} ${secondLogoClass}`} alt={alt} />
        </li>
      ))}
    </ul>
  );
}
