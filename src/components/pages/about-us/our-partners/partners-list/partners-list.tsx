import { SVGProps } from 'react';

import clsx from 'clsx';

import IBMWatson from '@/svgs/logos/partners/ibm-watson.inline.svg';
import Databricks from '@/svgs/logos/partners/databricks.inline.svg';
import Icb from '@/svgs/logos/icb.inline.svg';
import Ifc from '@/svgs/logos/ifc.inline.svg';
import Kdnuggets from '@/svgs/logos/kdnuggets.inline.svg';
import Knowledge from '@/svgs/logos/partners/knowledge.inline.svg';
import Mousquetaires from '@/svgs/logos/partners/les-mousquetaires.inline.svg';
import Dataiku from '@/svgs/logos/partners/dataiku.inline.svg';
import Microsoft from '@/svgs/logos/partners/microsoft.inline.svg';
import Princeton from '@/svgs/logos/princeton-consultants.inline.svg';
import Stevens from '@/svgs/logos/stevens.inline.svg';
import Tal from '@/svgs/logos/partners/tal-group.inline.svg';
import Ttc from '@/svgs/logos/ttc.inline.svg';
import Awc from '@/svgs/logos/partners/aws.inline.svg';
import Colab from '@/svgs/logos/partners/colab.inline.svg';
import Suaee from "@/svgs/logos/partners/suaee.inline.svg";
import Ifp from '@/svgs/logos/partners/ifp.inline.svg';

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
    secondLogoClass: 'w-[38px] md:w-[38px] sm:w-[38px]',
  },
  {
    logo: Mousquetaires,
    alt: 'Les Mousquetaires',
    secondClass: 'border-r border-b xl:border-r-0 xl:border-b-0 2xs:border-b',
    secondLogoClass: 'w-[76px] md:w-[60px] sm:w-[38px]',
  },
  {
    logo: Databricks,
    alt: 'Databricks',
    secondClass:
      'border-r border-b lg:border-r-0 xl:border-r-0 xl:border-b-0 2xs:border-b 2xs:border-r',
    secondLogoClass: 'w-[47px] md:w-[47px] sm:w-[47px]',
  },
  {
    logo: Dataiku,
    alt: 'Dataiku',
    secondClass: 'border-b xl:border-b-0 2xs:border-b',
    secondLogoClass: 'w-[46px] md:w-[46px] sm:w-[46px]',
  },
  {
    logo: Princeton,
    alt: 'Princeton Consultants',
    secondClass: 'border-r border-b xl:border-r-0 xl:border-b-0 2xs:border-b 2xs:border-r',
    secondLogoClass: 'w-[171px] md:w-[135px] sm:w-[85px]',
  },
  {
    logo: IBMWatson,
    alt: 'IBM Watson',
    secondClass: 'border-r border-b xl:border-r-0 xl:border-b-0 2xs:border-b',
    secondLogoClass: 'w-[58px] md:w-[58px] sm:w-[58px]',
  },
  {
    logo: Ttc,
    alt: 'TTC AgriS',
    secondClass: 'border-r border-b xl:border-r-0 xl:border-b-0 2xs:border-b 2xs:border-r',
    secondLogoClass: 'w-[82px] md:w-[65px] sm:w-[41px]',
  },
  {
    logo: Knowledge,
    alt: 'Knowledge Touch',
    secondClass: 'border-b xl:border-b-0 2xs:border-b',
    secondLogoClass: 'w-[44px] md:w-[44px] sm:w-[44px]',
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
    secondLogoClass: 'w-[37px] md:w-[37px] sm:w-[37px]',
  },
  {
    logo: Awc,
    alt: 'AWS SageMaker',
    secondClass: 'border-r border-b xl:border-r-0 xl:border-b-0 2xs:border-b 2xs:border-r',
    secondLogoClass: 'w-[48px] md:w-[48px] sm:w-[48px]',
  },
  {
    logo: Colab,
    alt: 'Google Colab',
    secondClass: 'border-b xl:border-b-0 2xs:border-b 2xs:border-b',
    secondLogoClass: 'w-[76px] md:w-[76px] sm:w-[76px]',
  },
  {
    logo: Icb,
    alt: 'ICB',
    secondClass: 'border-r xl:border-r-0 2xs:border-b 2xs:border-r',
    secondLogoClass: 'w-[50px] md:w-[43px] sm:w-[27px]',
  },
  {
    logo: Suaee,
    alt: 'SUAEE Group',
    secondClass: 'border-r xl:border-r-0 2xs:border-b',
    secondLogoClass: 'w-[42px] md:w-[42px] sm:w-[42px]',
  },
  {
    logo: Ifc,
    alt: 'IFC',
    secondClass: 'border-r xl:border-r-0',
    secondLogoClass: 'w-[157px] md:w-[124px] sm:w-[78px]',
  },
  {
    logo: Ifp,
    alt: 'IFP Energies nouvelles',
    secondClass: 'border-l xl:border-l-0 2xs:border-l',
    secondLogoClass: 'w-[109px] md:w-[109px] sm:w-[109px]',
  },
];

export default function PartnersList() {
  const buttonClassName = clsx(styles.border);

  return (
    <ul className="relative mx-auto mt-[58px] flex w-full max-w-[1280px] flex-wrap justify-center overflow-hidden lg:mt-11 md:mt-[34px]">
      {partnersListData.map(({ logo: Logo, alt, secondClass, secondLogoClass }, index) => (
        <li
          className={clsx(
            'relative flex flex-col gap-[30px] h-[160px] w-full max-w-[319px] items-center justify-center border-grey-15 md:h-[126px] md:max-w-[256px] sm:h-[80px] sm:max-w-[159px]',
            secondClass,
            buttonClassName,
          )}
          key={index}
        >
          <Logo className={clsx('fill-grey-70', secondLogoClass)} alt={alt} />
          <div className="text-[#797986] text-[14px]">{alt}</div>
        </li>
      ))}
    </ul>
  );
}
