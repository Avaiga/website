import Link from 'next/link';

import clsx from 'clsx';

import LeftArrow from '@/svgs/pages/blog/arrow-left.inline.svg';
import RightArrow from '@/svgs/pages/blog/arrow-right.inline.svg';

export default function Pagination() {
  const pageNumbers = [1, 2, 3, 4, 5, '...', 16];

  return (
    <nav className="text-15 text-white" aria-label="pagination">
      <ul className="flex list-none items-center justify-center gap-x-4">
        <li className="mr-auto w-20">
          <Link className="flex items-center" href="#">
            <LeftArrow className="mr-1 h-[13px] w-[13px] fill-current" />
            <span>Previous</span>
          </Link>
        </li>
        {pageNumbers.map((number, index) => (
          <li className="flex" key={index}>
            <Link
              className={clsx(
                'flex h-9 w-9 items-center justify-center rounded-full font-medium leading-none',
                {
                  'bg-primary-red': number === 1,
                  'bg-grey-15': number !== 1,
                },
              )}
              href="#"
            >
              {number}
            </Link>
          </li>
        ))}
        <li className="ml-auto flex w-20 justify-end">
          <Link className="flex items-center" href="#">
            <span>Next</span>
            <RightArrow className="ml-1 h-[13px] w-[13px] fill-current" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
