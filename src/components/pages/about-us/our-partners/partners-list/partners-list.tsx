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
    secondClass: 'border-r border-b xl:border-r-0 xl:border-b-0 2xs:border-b 2xs:border-r',
    secondLogoClass: 'w-[183px] md:w-[144px] sm:w-[91px]',
  },
  {
    logo: Mousquetaires,
    alt: 'Mousquetaires',
    secondClass: 'border-r border-b xl:border-r-0 xl:border-b-0 2xs:border-b',
    secondLogoClass: 'w-[76px] md:w-[60px] sm:w-[38px]',
  },
  {
    logo: Corero,
    alt: 'Corero',
    secondClass:
      'border-r border-b lg:border-r-0 xl:border-r-0 xl:border-b-0 2xs:border-b 2xs:border-r',
    secondLogoClass: 'w-[161px] md:w-[127px] sm:w-[80px]',
  },
  {
    logo: Lsdirect,
    alt: 'Lsdirect',
    secondClass: 'border-b xl:border-b-0 2xs:border-b',
    secondLogoClass: 'w-[203px] md:w-[160px] sm:w-[101px]',
  },
  {
    logo: Princeton,
    alt: 'Princeton Consultants',
    secondClass: 'border-r border-b xl:border-r-0 xl:border-b-0 2xs:border-b 2xs:border-r',
    secondLogoClass: 'w-[171px] md:w-[135px] sm:w-[85px]',
  },
  {
    logo: Bcgx,
    alt: 'Bcgx',
    secondClass: 'border-r border-b xl:border-r-0 xl:border-b-0 2xs:border-b',
    secondLogoClass: 'w-[136px] md:w-[107px] sm:w-[68px]',
  },
  {
    logo: Ttc,
    alt: 'Ttc',
    secondClass: 'border-r border-b xl:border-r-0 xl:border-b-0 2xs:border-b 2xs:border-r',
    secondLogoClass: 'w-[82px] md:w-[65px] sm:w-[41px]',
  },
  {
    logo: Knowledge,
    alt: 'Predictive Layer',
    secondClass: 'border-b xl:border-b-0 2xs:border-b',
    secondLogoClass: 'w-[196px] md:w-[158px] sm:w-[106px]',
  },
  {
    logo: Kdnuggets,
    alt: 'Kdnuggets',
    secondClass:
      'border-r border-b lg:border-r-0 xl:border-r-0 xl:border-b-0 2xs:border-b 2xs:border-r',
    secondLogoClass: 'w-[135px] md:w-[105px] sm:w-[67px]',
  },
  {
    logo: Tal,
    alt: 'Tal Group',
    secondClass: 'border-r border-b xl:border-r-0 xl:border-b-0 2xs:border-b',
    secondLogoClass: 'w-[110px] md:w-[79px] sm:w-[50px]',
  },
  {
    logo: Datacamp,
    alt: 'Datacamp',
    secondClass: 'border-r border-b xl:border-r-0 xl:border-b-0 2xs:border-b 2xs:border-r',
    secondLogoClass: 'w-[168px] md:w-[132px] sm:w-[84px]',
  },
  {
    logo: Probtp,
    alt: 'Probtp',
    secondClass: 'border-b xl:border-b-0 2xs:border-b 2xs:border-b',
    secondLogoClass: 'w-[164px] md:w-[129px] sm:w-[82px]',
  },
  {
    logo: Icb,
    alt: 'Icb',
    secondClass: 'border-r xl:border-r-0 2xs:border-b 2xs:border-r',
    secondLogoClass: 'w-[50px] md:w-[43px] sm:w-[27px]',
  },
  {
    logo: Nylas,
    alt: 'Nylas',
    secondClass: 'border-r xl:border-r-0 2xs:border-b',
    secondLogoClass: 'w-[143px] md:w-[113px] sm:w-[71px]',
  },
  {
    logo: Ifc,
    alt: 'Ifc',
    secondClass: 'border-r xl:border-r-0',
    secondLogoClass: 'w-[157px] md:w-[124px] sm:w-[78px]',
  },
  {
    logo: Stevens,
    alt: 'Stevens',
    secondClass: 'border-l xl:border-l-0 2xs:border-l',
    secondLogoClass: 'w-[45px] md:w-[35px] sm:w-[22px]',
  },
];

export default function PartnersList() {
  const buttonClassName = clsx(styles.border);

  return (
    <ul className="relative mx-auto mt-[58px] flex w-full max-w-[1280px] flex-wrap justify-center overflow-hidden lg:mt-11 md:mt-[34px]">
      {partnersListData.map(({ logo: Logo, alt, secondClass, secondLogoClass }, index) => (
        <li
          className={clsx(
            'relative flex h-[160px] w-full max-w-[319px] items-center justify-center border-grey-15 md:h-[126px] md:max-w-[256px] sm:h-[80px] sm:max-w-[159px]',
            secondClass,
            buttonClassName,
          )}
          key={index}
        >
          <Logo className={clsx('fill-grey-70', secondLogoClass)} alt={alt} />
        </li>
      ))}
    </ul>
  );
}
