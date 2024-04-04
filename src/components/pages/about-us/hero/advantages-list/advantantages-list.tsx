type AdvantagesItemProps = {
  digit: string;
  description: string;
};

const advantagesData: AdvantagesItemProps[] = [
  {
    digit: '10x',
    description: 'reduction in lines of code',
  },
  {
    digit: '4x',
    description: 'reduction in project duration',
  },
  {
    digit: '5x',
    description: 'reduction in project costs',
  },
];

export default function AdvantagesList() {
  return (
    <ul className="mt-11 flex w-full justify-between gap-6">
      {advantagesData.map((item, index) => (
        <li className=" w-full text-center" key={index}>
          <span className="bg-gradient-digit bg-clip-text text-[120px] font-light leading-none tracking-snug text-transparent">
            {item.digit}
          </span>
          <p className="mt-0.5 text-24 font-normal leading-none tracking-snug text-grey-40">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
