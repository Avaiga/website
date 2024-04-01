import clsx from 'clsx';

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
      <ul className="flex flex-col gap-y-2.5 bg-transparent text-grey-60">
        {data.map(({ label, href }, index) => (
          <li key={index}>
            <Link
              className={clsx(
                'block border-l-2 pb-[5px] pl-3 pt-1 text-15 leading-[1.47] -tracking-[0.01em] transition-all hover:border-l-primary-red hover:text-white',
                {
                  'border-l-primary-red text-white': index === 0,
                  'border-l-transparent': index !== 0,
                },
              )}
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
