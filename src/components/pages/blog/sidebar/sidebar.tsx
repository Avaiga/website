'use client';

import { useParams } from 'next/navigation';

import { ROUTE } from '@/constants/routes';
import clsx from 'clsx';

import Link from '@/components/shared/link';

import { Category } from '@/types/blog';

// import SearchIcon from '@/svgs/icons/search.inline.svg';

type CategoriesListProps = {
  categories: Category[];
};

function Sidebar({ categories }: CategoriesListProps) {
  const { category: currentCategorySlug = '' } = useParams();

  const navigation = [
    { _id: 'id-all-posts', title: 'All posts', titleShort: 'All posts', slug: { current: '' } },
    ...categories.filter((category) => category.title !== 'All posts'),
  ];

  return (
    <aside className="sticky top-16">
      {/* TODO: algolia integration */}
      {/* <label className="relative mb-8 flex h-9 items-center rounded border border-grey-20 bg-transparent px-[9px] hover:border-grey-30 focus:border-2 lg:hidden">
        <SearchIcon className="absolute h-4 w-4" />
        <input
          className="block w-full border-none bg-transparent pl-6 pr-2.5 text-14 leading-none tracking-snug text-white placeholder-grey-50 outline-none"
          type="search"
          placeholder="Search posts..."
          aria-label="Search posts..."
          autoComplete="off"
        />
      </label> */}
      <nav className="no-scrollbars sm:-mx-5 sm:overflow-auto sm:px-5">
        <ul className="flex flex-col gap-y-3 bg-transparent text-grey-60 lg:flex-row lg:gap-x-6 md:after:shrink-0 md:after:grow-0 md:after:basis-px md:after:content-['']">
          {navigation.map(({ _id, titleShort, slug }) => (
            <li key={_id}>
              <Link
                className={clsx(
                  'block border-l-2 py-[7px] pl-3 text-15 leading-none tracking-snug transition-all hover:border-l-primary-red hover:text-white lg:border-b-2 lg:border-l-0 lg:pb-1 lg:pl-0 lg:pt-2 lg:text-14 lg:hover:border-b-primary-red sm:whitespace-nowrap',
                  {
                    'border-l-primary-red text-white lg:border-b-primary-red':
                      slug.current === currentCategorySlug,
                    'border-l-transparent lg:border-b-transparent':
                      slug.current !== currentCategorySlug,
                  },
                )}
                href={slug.current ? `${ROUTE.BLOG_CATEGORY}/${slug.current}` : ROUTE.BLOG}
              >
                {titleShort}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
