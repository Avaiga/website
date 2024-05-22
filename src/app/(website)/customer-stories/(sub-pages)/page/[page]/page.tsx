import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { ROUTES } from '@/constants/routes';
import { SEO_DATA } from '@/constants/seo';

import TestimonialItem from '@/components/pages/customer-stories/customer-story-item';
import Pagination from '@/components/shared/pagination';

import { getMetadata } from '@/lib/get-metadata';
import { countCustomerStories, getCustomerStories } from '@/lib/sanity/client';
import { CUSTOMER_STORY_PER_PAGE } from '@/lib/sanity/utils';

type CustomerStoriesPageProps = {
  params: {
    page: string;
  };
};

async function CustomerStoriesPage({ params }: CustomerStoriesPageProps) {
  const page = parseInt(params.page, 10);

  if (Number.isNaN(page) || page === 1) {
    return redirect(ROUTES.CUSTOMER_STORIES as string);
  }

  const [postCount, posts] = await Promise.all([
    countCustomerStories(),
    getCustomerStories({ page }),
  ]);

  const pageCount = Math.ceil(postCount / CUSTOMER_STORY_PER_PAGE);

  return (
    <>
      {posts.map((post, index) => (
        <TestimonialItem key={post._id} post={post} isPriorityLoad={index < 3} />
      ))}
      <Pagination currentPage={page} pageCount={pageCount} path={`${ROUTES.CUSTOMER_STORIES}`} />
    </>
  );
}

export default CustomerStoriesPage;

export async function generateStaticParams() {
  const postCount = await countCustomerStories();

  const pageCount = Math.ceil(postCount / CUSTOMER_STORY_PER_PAGE);

  return Array.from({ length: pageCount }, (_, idx) => idx + 1).map((page) => ({
    page: page.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { page: string };
}): Promise<Metadata> {
  const { page } = params;

  return getMetadata({
    ...SEO_DATA.CUSTOMER_STORIES,
    title: `${SEO_DATA.CUSTOMER_STORIES.title} - Page ${page}`,
    pathname: `${ROUTES.CUSTOMER_STORIES}/${page}`,
  });
}

// TODO: Rewrite this when dynamic params direct export will be supported
// https://github.com/vercel/next.js/issues/49489
const dynamicParams = false;
export { dynamicParams };

export const revalidate = 60;
