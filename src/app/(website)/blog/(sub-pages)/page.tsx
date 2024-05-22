import { ROUTES } from '@/constants/routes';
import { SEO_DATA } from '@/constants/seo';

import PostsList from '@/components/pages/blog/posts-list';
import Pagination from '@/components/shared/pagination';

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
    <>
      <h1 className="sr-only">Taipy Blog</h1>
      <PostsList
        posts={promotedPost ? [promotedPost, ...posts] : posts}
        withFeatured={!!promotedPost}
      />
      <Pagination currentPage={1} pageCount={pageCount} path={`${ROUTES.BLOG}`} />
    </>
  );
}

export default Blog;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.BLOG);
}

export const revalidate = 60;
