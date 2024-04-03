import { Route } from 'next';

import Link from '@/components/shared/link';

interface Breadcrumb {
  title: string;
  url?: URL | Route<string>;
}

interface BreadcrumbsProps {
  items: Breadcrumb[];
  className?: string;
}

function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav className={className}>
      <ol className="">
        {items.map(({ title, url }, index) => (
          <li className="" key={index}>
            {url ? (
              <Link className="text-15" href={url} theme="orange">
                {title}
              </Link>
            ) : (
              <span className="line-clamp-1">{title}</span>
            )}
            {index < items.length - 1 && <span className="">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
