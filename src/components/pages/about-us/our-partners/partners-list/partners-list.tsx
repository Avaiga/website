import {SVGProps} from 'react';

import clsx from 'clsx';

import Icb from '@/svgs/logos/icb.inline.svg';
import Ifc from '@/svgs/logos/ifc.inline.svg';
import Kdnuggets from '@/svgs/logos/kdnuggets.inline.svg';
import Awc from '@/svgs/logos/partners/aws.inline.svg';
import Colab from '@/svgs/logos/partners/colab.inline.svg';
import Databricks from '@/svgs/logos/partners/databricks.inline.svg';
import Dataiku from '@/svgs/logos/partners/dataiku.inline.svg';
import IBMWatson from '@/svgs/logos/partners/ibm-watson.inline.svg';
import Ifp from '@/svgs/logos/partners/ifp.inline.svg';
import Knowledge from '@/svgs/logos/partners/knowledge.inline.svg';
import Mousquetaires from '@/svgs/logos/partners/les-mousquetaires.inline.svg';
import Microsoft from '@/svgs/logos/partners/microsoft.inline.svg';
import Suaee from '@/svgs/logos/partners/suaee.inline.svg';
import Tal from '@/svgs/logos/partners/tal-group.inline.svg';
import Princeton from '@/svgs/logos/princeton-consultants.inline.svg';
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
    secondLogoClass: 'w-[38px] md:w-[30px] sm:w-[25px]',
  },
  {
    logo: Mousquetaires,
    alt: 'Les Mousquetaires',
    secondLogoClass: 'w-[76px] md:w-[42px] sm:w-[35px]',
  },
  {
    logo: Databricks,
    alt: 'Databricks',
    secondLogoClass: 'w-[47px] md:w-[35px] sm:w-[27px]',
  },
  {
    logo: Dataiku,
    alt: 'Dataiku',
    secondLogoClass: 'w-[46px] md:w-[32px] sm:w-[27px]',
  },
  {
    logo: Princeton,
    alt: 'Princeton Consultants',
    secondLogoClass: 'w-[171px] md:w-[125px] sm:w-[105px]',
  },
  {
    logo: IBMWatson,
    alt: 'IBM Watson',

    secondLogoClass: 'w-[58px] md:w-[42px] sm:w-[32px]',
  },
  {
    logo: Ttc,
    alt: 'TTC AgriS',
    secondLogoClass: 'w-[82px] md:w-[54px] sm:w-[45px]',
  },
  {
    logo: Knowledge,
    alt: 'Knowledge Touch',
    secondLogoClass: 'w-[44px] md:w-[34px] sm:w-[26px]',
  },
  {
    logo: Kdnuggets,
    alt: 'Kdnuggets',
    secondLogoClass: 'w-[135px] md:w-[94px] sm:w-[79px]',
  },
  {
    logo: Tal,
    alt: 'Tal Group',
    secondLogoClass: 'w-[37px] md:w-[27px] sm:w-[23px]',
  },
  {
    logo: Awc,
    alt: 'AWS SageMaker',
    secondLogoClass: 'w-[48px] md:w-[30px] sm:w-[25px]',
  },
  {
    logo: Colab,
    alt: 'Google Colab',
    secondLogoClass: 'w-[76px] md:w-[55px] sm:w-[46px]',
  },
  {
    logo: Icb,
    alt: 'ICB',
    secondLogoClass: 'w-[50px] md:w-[36px] sm:w-[30px]',
  },
  {
    logo: Suaee,
    alt: 'SUAEE Group',
    secondLogoClass: 'w-[42px] md:w-[33px] sm:w-[27px]',
  },
  {
    logo: Ifc,
    alt: 'IFC',
    secondLogoClass: 'w-[157px] md:w-[118px] sm:w-[100px]',
  },
  {
    logo: Ifp,
    alt: 'IFP Energies nouvelles',
    secondLogoClass: 'w-[109px] md:w-[84px] sm:w-[px]',
  },
];

export default function PartnersList() {
  const buttonClassName = clsx(styles.border);

  return (
    <ul
      className="partners-list relative mx-auto mt-[58px] flex w-full max-w-[1280px] flex-wrap justify-center overflow-hidden lg:mt-11 md:mt-[34px]">
      {partnersListData.map(({logo: Logo, alt, secondLogoClass}, index) => (
        <li
          className={clsx(
            'relative flex h-[160px] w-full max-w-[319px] flex-col space-b items-center justify-center gap-[30px] md:gap-[16px] border-grey-15 md:h-[126px] md:max-w-[256px]  sm:max-w-[159px] md:text-14 sm:text-12',

            buttonClassName,
          )}
          key={index}
        >
          <Logo className={clsx('fill-grey-70', secondLogoClass)} alt={alt}/>
          <div className="text-[14px] text-[#797986] md:text-13">{alt}</div>
        </li>
      ))}
    </ul>
  );
}
