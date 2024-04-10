import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { ROUTE } from '@/constants/routes';
import { SEO_DATA } from '@/constants/seo';

import Pagination from '@/components/pages/blog/pagination/pagination';
import PostsList from '@/components/pages/blog/posts-list';

import { getMetadata } from '@/lib/get-metadata';
import { countPosts, getPosts } from '@/lib/sanity/client';
import { BLOG_POST_PER_PAGE } from '@/lib/sanity/utils';

type BlogPageProps = {
  params: {
    page: string;
  };
};

async function BlogPage({ params }: BlogPageProps) {
  const page = parseInt(params.page, 10);

  if (Number.isNaN(page) || page === 1) {
    return redirect(ROUTE.BLOG as string);
  }

  const [postCount, posts] = await Promise.all([countPosts(), getPosts({ page })]);

  const pageCount = Math.ceil(postCount / BLOG_POST_PER_PAGE);

  return (
    <>
      <h1 className="sr-only">Taipy Blog</h1>
      <PostsList posts={posts} />
      <Pagination currentPage={page} pageCount={pageCount} path={`${ROUTE.BLOG}`} />
    </>
  );
}

export default BlogPage;

export async function generateStaticParams() {
  const postCount = await countPosts();

  const pageCount = Math.ceil(postCount / BLOG_POST_PER_PAGE);

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
    ...SEO_DATA.BLOG,
    title: `${SEO_DATA.BLOG.title} - Page ${page}`,
    pathname: `${ROUTE.BLOG}/page/${page}`,
  });
}

// TODO: Rewrite this when dynamic params direct export will be supported
// https://github.com/vercel/next.js/issues/49489
const dynamicParams = false;
export { dynamicParams };

export const revalidate = 60;
