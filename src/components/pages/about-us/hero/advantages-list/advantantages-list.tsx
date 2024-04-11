type AdvantagesItemProps = {
  digit: string;
  description: string;
};

const advantagesData: AdvantagesItemProps[] = [
  {
    digit: '5x',
    description: 'reduction in project costs',
  },
  {
    digit: '10x',
    description: 'reduction in lines of code',
  },
  {
    digit: '4x',
    description: 'reduction in project duration',
  },
];

export default function AdvantagesList() {
  return (
    <ul className="mx-auto mt-16 flex w-full max-w-[952px] justify-between gap-6 lg:mt-[49px] lg:max-w-[888px]">
      {advantagesData.map((item, index) => (
        <li className=" relative w-full max-w-[232px] text-center" key={index}>
          <span className="absolute left-1/2 top-1/2 h-[78px] w-full max-w-[170px] -translate-x-1/2 -translate-y-1/2 bg-gradient-hero-digit opacity-30 blur-[25px]" />
          <span className="relative bg-gradient-digit bg-clip-text text-[128px] font-light leading-none tracking-snug text-transparent">
            {item.digit}
          </span>
          <p className="relative text-18 leading-none tracking-snug text-grey-40">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
