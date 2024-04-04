type AdvantagesItemProps = {
  id: number;
  digit: string;
  description: string;
};

const advantagesData: AdvantagesItemProps[] = [
  {
    id: 1,
    digit: '10x',
    description: 'reduction in lines of code',
  },
  {
    id: 2,
    digit: '4x',
    description: 'reduction in project duration',
  },
  {
    id: 3,
    digit: '5x',
    description: 'reduction in project costs',
  },
];

export default function AdvantagesList() {
  return (
    <ul className="mt-11 flex w-full justify-between gap-6 ">
      {advantagesData.map((item) => (
        <li className=" w-full text-center" key={item.id}>
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
