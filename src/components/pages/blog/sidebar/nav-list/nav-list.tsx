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
    <nav className="no-scrollbars sm:-mx-5 sm:overflow-auto sm:px-5">
      <ul className="flex flex-col gap-y-3 bg-transparent text-grey-60 lg:flex-row lg:gap-x-6 md:after:shrink-0 md:after:grow-0 md:after:basis-px md:after:content-['']">
        {data.map(({ label, href }, index) => (
          <li key={index}>
            <Link
              className={clsx(
                'block border-l-2 py-[7px] pl-3 text-15 leading-none tracking-snug transition-all hover:border-l-primary-red hover:text-white lg:border-b-2 lg:border-l-0 lg:pb-1 lg:pl-0 lg:pt-2 lg:text-14 lg:hover:border-b-primary-red sm:whitespace-nowrap',
                {
                  'border-l-primary-red text-white lg:border-b-primary-red': index === 0,
                  'border-l-transparent lg:border-b-transparent': index !== 0,
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
