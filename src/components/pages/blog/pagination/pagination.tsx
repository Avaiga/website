'use client';

import { useRouter } from 'next/navigation';

import ReactPaginate from 'react-paginate';

import Arrow from '@/svgs/icons/arrow.inline.svg';

export default function Pagination({
  currentPage,
  pageCount,
  path,
}: {
  currentPage: number;
  pageCount: number;
  path: string;
}) {
  const router = useRouter();

  const handlePageClick = ({ selected }: { selected: number }) => {
    const page = selected + 1;
    const navigateTo = path + (page === 1 ? '' : `/page/${page}`);
    router.push(navigateTo);
  };

  return (
    <nav className="text-15 text-white" aria-label="Pagination">
      <ReactPaginate
        breakLabel="..."
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        forcePage={currentPage - 1}
        containerClassName="flex list-none items-center justify-center gap-x-4 sm:gap-x-3"
        pageLinkClassName="flex h-9 w-9 items-center justify-center rounded-full font-medium leading-none bg-grey-15"
        breakLinkClassName="flex h-9 w-9 items-center justify-center rounded-full font-medium leading-none bg-grey-15"
        activeLinkClassName="flex h-9 w-9 items-center justify-center rounded-full font-medium leading-none bg-primary-red"
        previousClassName="mr-auto w-20 sm:w-fit"
        nextClassName="ml-auto flex w-20 justify-end sm:w-fit"
        previousLinkClassName="flex items-center *:fill-orange-1"
        nextLinkClassName="flex items-center *:fill-orange-1"
        disabledLinkClassName="pointer-events-none hidden"
        previousLabel={
          <>
            {/* TODO: Use common arrow -> */}
            <Arrow className="mr-1 h-[13px] w-[13px]" />
            <span className="sm:hidden">Previous</span>
          </>
        }
        nextLabel={
          <>
            <span className="sm:hidden">Next</span>
            {/* TODO: Use common arrow -> */}
            <Arrow className="ml-1 h-[13px] w-[13px] rotate-180" />
          </>
        }
        renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
      />
    </nav>
  );
}
