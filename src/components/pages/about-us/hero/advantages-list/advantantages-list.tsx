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
    <ul className="mt-16 flex w-full justify-between gap-6 md:mt-[49px]">
      {advantagesData.map((item, index) => (
        <li className=" relative w-full text-center" key={index}>
          <span className="bg-gradient-digit bg-clip-text text-[128px] font-light leading-none tracking-snug text-transparent">
            {item.digit}
          </span>
          <p className="text-18 leading-none tracking-snug text-grey-40">{item.description}</p>
          <span className="absolute left-1/2 top-1/2 h-[78px] w-full max-w-[170px] -translate-x-1/2 -translate-y-1/2 bg-gradient-about-digit opacity-30 blur-[25px]" />
        </li>
      ))}
    </ul>
  );
}
