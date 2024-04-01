import clsx from 'clsx';

import LeftArrow from '@/svgs/pages/blog/arrow-left.inline.svg';
import RightArrow from '@/svgs/pages/blog/arrow-right.inline.svg';

export default function Pagination() {
  const pageNumbers = [1, 2, 3, 4, 5, '...', 16];
  
return (
    <nav className="flex items-center justify-between text-15 text-white" aria-label="pagination">
      <div className="flex items-center">
        <a href="#" className=" flex items-center">
          <LeftArrow className="mr-1 h-[13px] w-[13px] fill-current" />
          <span>Previous</span>
        </a>
      </div>

      <ul className="-ml-[27px] flex list-none items-center gap-x-4">
        {pageNumbers.map((number, index) => (
          <li key={index} className="flex">
            <a
              href="#"
              className={clsx(
                'flex h-9 w-9 items-center justify-center rounded-full font-medium leading-none',
                {
                  'bg-primary-red ': number === 1,
                  'bg-grey-15': number !== 1,
                },
              )}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center">
        <a href="#" className="text-gray-500 flex items-center">
          <span className="text-15">Next</span>
          <RightArrow className="ml-1 h-[13px] w-[13px] fill-current" />
        </a>
      </div>
    </nav>
  );
}
