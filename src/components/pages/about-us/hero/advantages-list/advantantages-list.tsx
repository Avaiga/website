import AdvantagesItem from '../advantages-item/advantages-item';

const advantagesData = [
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
    <ul className="max-w-digitsWidth flex w-full justify-between gap-6">
      {advantagesData.map((item) => (
        <AdvantagesItem key={item.id} digit={item.digit} description={item.description} />
      ))}
    </ul>
  );
}
