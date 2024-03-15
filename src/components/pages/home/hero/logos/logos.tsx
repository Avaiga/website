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

function Logos() {
  return (
    <div className="h-[91px]">
      <ul className="logos-mask-white mt-[71px] flex h-[91px] items-center justify-center gap-x-14">
        {LOGOS.map(({ logo: Logo, width, height }, index) => (
          <li key={index}>
            <Logo className="fill-white" width={width} height={height} />
          </li>
        ))}
      </ul>
      <ul className="logos-mask-red flex h-[91px] translate-y-[-91px] items-center justify-center gap-x-14">
        {LOGOS.map(({ logo: Logo, width, height }, index) => (
          <li key={index}>
            <Logo className="fill-[#ff462b]" width={width} height={height} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Logos;
