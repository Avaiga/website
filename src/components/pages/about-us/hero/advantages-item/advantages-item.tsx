type AdvantagesItemProps = {
  digit: string;
  description: string;
};

export default function AdvantagesItem({ digit, description }: AdvantagesItemProps) {
  return (
    <li className="flex w-full flex-col items-center gap-1">
      <span className="digit-gradient bg-clip-text text-[120px] font-light leading-none tracking-tight">
        {digit}
      </span>
      <p className="text-24 font-normal leading-none tracking-snug text-grey-40">{description}</p>
    </li>
  );
}
