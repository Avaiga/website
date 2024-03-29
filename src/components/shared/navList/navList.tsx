import Link from '@/components/shared/link';

interface NavItem {
  label: string;
  href: URL;
}

interface NavListProps {
  data: NavItem[];
}
export default function NavList({ data }: NavListProps) {
  return (
    <nav>
      <ul className="flex flex-col gap-y-2.5 bg-transparent leading-none text-grey-60">
        {data.map(({ label, href }, index) => (
          <li key={index}>
            <Link
              className={`block border-l-2 pb-[5px] pl-[11px] pt-1 text-15 leading-normal  tracking-snug transition-all hover:text-white ${
                index === 0 ? 'border-l-primary-red text-white' : 'border-l-transparent'
              }`}
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
