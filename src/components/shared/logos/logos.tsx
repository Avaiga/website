import { SVGProps } from 'react';

import BirdLogo from '@/images/pages/enterprise/logos/bird.inline.svg';
import BrainLogo from '@/images/pages/enterprise/logos/brain.inline.svg';
import CoLogo from '@/images/pages/enterprise/logos/co.inline.svg';
import IcbLogo from '@/images/pages/enterprise/logos/icb.inline.svg';
import LayersLogo from '@/images/pages/enterprise/logos/layers.inline.svg';
import LesLogo from '@/images/pages/enterprise/logos/les.inline.svg';
import MicrosoftLogo from '@/images/pages/enterprise/logos/microsoft.inline.svg';
import PredictiveLogo from '@/images/pages/enterprise/logos/predictive.inline.svg';
import PrincetonLogo from '@/images/pages/enterprise/logos/princeton.inline.svg';
import TalGroupLogo from '@/images/pages/enterprise/logos/tal-group.inline.svg';
import clsx from 'clsx';

interface LogoComponents {
  [key: string]: React.FunctionComponent<SVGProps<SVGSVGElement>>;
}

const allLogos: LogoComponents = {
  bird: BirdLogo,
  brain: BrainLogo,
  co: CoLogo,
  icb: IcbLogo,
  layers: LayersLogo,
  les: LesLogo,
  microsoft: MicrosoftLogo,
  predictive: PredictiveLogo,
  princeton: PrincetonLogo,
  'tal-group': TalGroupLogo,
};

interface LogosProps {
  className?: string;
  logos: string[];
  isWide?: boolean;
}

function LogosWall({ className, logos, isWide }: LogosProps) {
  return (
    <div className={clsx('logos', className)}>
      <ul className="logos-content">
        {logos.map((logo, idx) => {
          const Logo = allLogos[logo];

          return (
            <li key={idx}>
              <Logo
                className={clsx('sm:h-6.5 h-10 w-auto', {
                  'md:h-12 sm:h-10': !isWide,
                  'md:h-8': isWide,
                })}
              />
            </li>
          );
        })}
      </ul>
      <ul className="logos-content" aria-hidden="true">
        {logos.map((logo, idx) => {
          const Logo = allLogos[logo];

          return (
            <li key={idx}>
              <Logo
                className={clsx('sm:h-6.5 h-10 w-auto ', {
                  'md:h-12 sm:h-10': !isWide,
                  'md:h-8': isWide,
                })}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Logos({ className = '', logos, isWide = true }: LogosProps) {
  return (
    <div
      className={clsx(
        'container w-full max-w-[960px] lg:max-w-[832px] md:max-w-[704px]',
        className,
        { 'mt-8 px-2 sm:mt-6': !isWide, 'mt-[136px] lg:mt-[118px] md:mt-[78px]': isWide },
      )}
    >
      <h3
        className={clsx('text-center leading-snug text-primary-red sm:text-14', {
          hidden: !isWide,
        })}
      >
        They trust us
      </h3>
      <div
        className={clsx('select-none md:-mb-8', {
          'mt-2': !isWide,
          'mt-[56px] md:mt-[43px] sm:mt-[41px]': isWide,
        })}
      >
        <LogosWall className="logos-sides-fade" logos={logos} isWide={isWide} />
      </div>
    </div>
  );
}

export default Logos;
