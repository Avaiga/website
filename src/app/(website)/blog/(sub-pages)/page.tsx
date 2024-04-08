import { ROUTE } from '@/constants/routes';
import { SEO_DATA } from '@/constants/seo';

import Pagination from '@/components/pages/blog/pagination/pagination';
import PostsList from '@/components/pages/blog/posts-list';

import { getMetadata } from '@/lib/get-metadata';
import { countPosts, getPosts, getPromotedPost } from '@/lib/sanity/client';
import { BLOG_POST_PER_PAGE } from '@/lib/sanity/utils';

async function Blog() {
  const [postCount, posts, promotedPost] = await Promise.all([
    countPosts(),
    getPosts({ page: 1 }),
    getPromotedPost(),
  ]);

  const pageCount = Math.ceil(postCount / BLOG_POST_PER_PAGE);

  return (
    <div className="col-span-10 col-start-3 grid gap-y-[54px] lg:col-span-full lg:gap-y-12 sm:gap-y-8">
      <h1 className="sr-only">Taipy Blog</h1>
      <PostsList
        posts={promotedPost ? [promotedPost, ...posts] : posts}
        withFeatured={!!promotedPost}
      />
      <Pagination currentPage={1} pageCount={pageCount} path={`${ROUTE.BLOG}`} />
    </div>
  );
}

export default Blog;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.BLOG);
}

export const revalidate = 60;
