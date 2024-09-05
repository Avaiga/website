import { ReactNode } from 'react';

import { ROUTES } from '@/constants/routes';

import Link from '@/components/shared/link';
import PostItem from '@/components/shared/post-item';
import Subscribe from '@/components/shared/subscribe';

import { getAllRelatedPosts } from '@/lib/sanity/client';

async function CustomerStoriesSubPagesLayout({ children }: { children: ReactNode }) {
  const relatedPosts = await getAllRelatedPosts();

  return (
    <>
      <section className="pt-40 lg:pt-[136px] md:pt-[120px] sm:pt-[104px]">
        <div className="container text-center">
          <span className="leading-snug text-primary-red sm:text-14">They speak for us</span>
          <h1 className="mt-4 text-56 font-medium leading-dense tracking-tight lg:mt-3.5 lg:text-48 md:text-40 sm:mt-3 sm:text-28">
            Customer Stories
          </h1>
          <p className="mt-5 text-18 font-light text-white/80 lg:mt-4 sm:mt-3 sm:text-16">
            See how Taipy help companies working efficiently with large data
          </p>
        </div>
      </section>
      <section className="testimonial-list mt-[90px] lg:mt-[72px] md:mt-14 sm:mt-9">
        <div className="container-narrow md:grid md:grid-cols-2 md:items-start md:gap-x-6 xs:grid-cols-1 xs:gap-y-14">
          {children}
        </div>
      </section>
      <section className="related mt-[168px] lg:mt-[140px] md:mt-24 sm:mt-[72px]">
        <div className="container-narrow">
          <div className="mb-8 flex items-center justify-between gap-x-4 lg:mb-7">
            <h2 className="text-48 font-semibold leading-none tracking-tight md:text-24">
              Read more about Taipy
            </h2>
            <Link
              className="shrink-0 text-16 md:text-14 sm:text-16"
              href={ROUTES.BLOG}
              theme="white"
              arrowTheme="red"
            >
              All posts
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-x-8 lg:gap-x-6 md:gap-x-[19px] sm:grid-cols-1 sm:gap-y-7">
            {relatedPosts.map((relatedPost) => (
              <PostItem key={relatedPost._id} post={relatedPost} isRelated />
            ))}
          </div>
        </div>
      </section>
      <Subscribe
        className="mb-[172px] mt-[168px] lg:my-32 md:my-[104px] sm:my-[72px]"
        tagline="Newsletter"
        title="Stay ahead with our newsletter"
        text="Join Taipy's mailing list and stay informed of the latest news! We send four mails per year plus a few more for very special announcements."
      />
    </>
  );
}

export default CustomerStoriesSubPagesLayout;
