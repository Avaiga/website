import clsx from 'clsx';

import Icb from '@/svgs/logos/icb.inline.svg';
import LesMousquetaires from '@/svgs/logos/les-mousquetaires.inline.svg';
import PredictiveLayer from '@/svgs/logos/predictive-layer.inline.svg';
import PrincetonConsultants from '@/svgs/logos/princeton-consultants.inline.svg';
import TalGroup from '@/svgs/logos/tal-group.inline.svg';

const LOGOS = [
  {
    logo: TalGroup,
    width: 100,
    height: 57,
  },
  {
    logo: Icb,
    width: 51,
    height: 51,
  },
  {
    logo: PrincetonConsultants,
    width: 172,
    height: 51,
  },
  {
    logo: PredictiveLayer,
    width: 129,
    height: 37,
  },
  {
    logo: LesMousquetaires,
    width: 80,
    height: 51,
  },
];

const styles = {
  logosWrapper: 'flex h-full items-center justify-center gap-x-14 md:gap-x-0 md:justify-between',
};

function Logos() {
  return (
    <div className="mt-12 h-[91px] lg:mt-[9px] lg:scale-[0.585] md:mx-auto md:mt-6 md:h-14 md:max-w-[560px] md:scale-100 sm:max-w-[310px]">
      <ul
        className={clsx(
          styles.logosWrapper,
          '[mask-image:linear-gradient(90deg,rgba(217,217,217,0.4)_0%,rgba(217,217,217,0.8)_48.89%,rgba(217,217,217,0.4)_100.68%)]',
        )}
      >
        {LOGOS.map(({ logo: Logo, width, height }, index) => (
          <li key={index}>
            <Logo
              className="fill-white md:h-[33px] sm:h-[19px] sm:w-auto"
              width={width}
              height={height}
            />
          </li>
        ))}
      </ul>
      <ul
        className={clsx(
          styles.logosWrapper,
          '-translate-y-full [mask-image:radial-gradient(730px_460px_at_50%_-375px,#000_25%,transparent_100%)]',
        )}
      >
        {LOGOS.map(({ logo: Logo, width, height }, index) => (
          <li key={index}>
            <Logo
              className="fill-[#ff462b] md:h-[33px] sm:h-[19px] sm:w-auto"
              width={width}
              height={height}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Logos;
