import { ReactNode } from 'react';

import Sidebar from '@/components/pages/blog/sidebar';
import Subscribe from '@/components/shared/subscribe';

import { getCategories } from '@/lib/sanity/client';

export default async function BlogSubPagesLayout({ children }: { children: ReactNode }) {
  const categories = await getCategories();

  return (
    <>
      <div className="pt-32 lg:pt-[92px] md:pt-[76px] sm:pt-[66px]">
        <div className="container grid max-w-[1794px] grid-cols-14 gap-x-16 gap-y-[33px] lg:gap-x-0 sm:gap-y-[25px]">
          <div className="top-16 col-span-2 bg-black lg:col-span-full md:sticky md:top-0 md:py-2">
            <Sidebar categories={categories} />
          </div>
          <div className="col-span-10 col-start-3 grid gap-y-[54px] lg:col-span-full lg:gap-y-12 sm:gap-y-8">
            {children}
          </div>
        </div>
      </div>
      <Subscribe
        className="my-36 lg:my-32 md:mb-[76px] md:mt-[101px] sm:my-[68px]"
        tagline="Newsletter"
        title="Stay ahead with our newsletter"
        text="Join Taipy's mailing list and stay informed of the latest news! We send four mails per year plus a few more for very special announcements."
      />
    </>
  );
}
