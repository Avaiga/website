import { ROUTES } from '@/constants/routes';
import { SEO_DATA } from '@/constants/seo';

import CustomerStoryItem from '@/components/pages/customer-stories/customer-story-item';
import Pagination from '@/components/shared/pagination';

import { getMetadata } from '@/lib/get-metadata';
import { countCustomerStories, getCustomerStories } from '@/lib/sanity/client';
import { CUSTOMER_STORY_PER_PAGE } from '@/lib/sanity/utils';

async function CustomerStories() {
  const [postCount, posts] = await Promise.all([
    countCustomerStories(),
    getCustomerStories({ page: 1 }),
  ]);

  const pageCount = Math.ceil(postCount / CUSTOMER_STORY_PER_PAGE);

  return (
    <>
      {posts.map((post, index) => (
        <CustomerStoryItem key={post._id} post={post} isPriorityLoad={index < 3} />
      ))}
      {pageCount !== 1 && (
        <Pagination currentPage={1} pageCount={pageCount} path={`${ROUTES.CUSTOMER_STORIES}`} />
      )}
    </>
  );
}

export default CustomerStories;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.CUSTOMER_STORIES);
}

export const revalidate = 60;
