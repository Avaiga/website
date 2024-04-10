import { SVGProps } from 'react';

import clsx from 'clsx';

import BirdLogo from './images/bird.inline.svg';
import BrainLogo from './images/brain.inline.svg';
import CoLogo from './images/co.inline.svg';
import IcbLogo from './images/icb.inline.svg';
import LayersLogo from './images/layers.inline.svg';
import LesLogo from './images/les.inline.svg';
import MicrosoftLogo from './images/microsoft.inline.svg';
import PredictiveLogo from './images/predictive.inline.svg';
import PrincetonLogo from './images/princeton.inline.svg';
import TalGroupLogo from './images/tal-group.inline.svg';

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
}

function LogosWall({ className, logos }: LogosProps) {
  return (
    <div className={clsx('logos', className)}>
      <ul className="logos-content">
        {logos.map((logo, idx) => {
          const Logo = allLogos[logo];

          return (
            <li key={idx}>
              <Logo className="h-10 w-auto md:h-8" />
            </li>
          );
        })}
      </ul>
      <ul className="logos-content" aria-hidden="true">
        {logos.map((logo, idx) => {
          const Logo = allLogos[logo];

          return (
            <li key={idx}>
              <Logo className="h-10 w-auto md:h-8" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Logos({ className = '', logos }: LogosProps) {
  return (
    <div
      className={clsx(
        'container mt-[136px] w-full max-w-[960px] lg:mt-[118px] lg:max-w-[832px]',
        className,
      )}
    >
      <h3 className="text-center leading-snug text-primary-red">They trust us</h3>
      <div className="mt-[56px] select-none md:-mb-8">
        <LogosWall className="logos-sides-fade" logos={logos} />
      </div>
    </div>
  );
}

export default Logos;
