import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import { ROUTE } from '@/constants/routes';
import { SEO_DATA } from '@/constants/seo';

import Pagination from '@/components/pages/blog/pagination/pagination';
import PostsList from '@/components/pages/blog/posts-list';

import { DEFAULT_IMAGE_PATH, getMetadata } from '@/lib/get-metadata';
import { countPosts, getCategoryBySlug, getPostsByCategorySlug } from '@/lib/sanity/client';
import { urlForImage } from '@/lib/sanity/image';
import { BLOG_POST_PER_PAGE } from '@/lib/sanity/utils';

type BlogPageProps = {
  params: {
    category: string;
    page: string;
  };
};

async function BlogPage({ params }: BlogPageProps) {
  const page = parseInt(params.page, 10);

  if (Number.isNaN(page) || page === 1) {
    return redirect(ROUTE.BLOG as string);
  }

  const categoryData = await getCategoryBySlug(params.category);

  if (!categoryData) {
    notFound();
  }

  const [postCount, posts] = await Promise.all([
    countPosts({ categoryID: categoryData._id }),
    getPostsByCategorySlug({ page, categorySlug: params.category }),
  ]);

  const pageCount = Math.ceil(postCount / BLOG_POST_PER_PAGE);

  return (
    <div className="col-span-10 col-start-3 grid gap-y-[54px] lg:col-span-full lg:gap-y-12 sm:gap-y-8">
      <h1 className="sr-only">Taipy Blog</h1>
      <PostsList posts={posts} />
      <Pagination currentPage={page} pageCount={pageCount} path={`${ROUTE.BLOG}`} />
    </div>
  );
}

export default BlogPage;

export async function generateStaticParams({
  params: { category },
}: {
  params: { category: string };
}) {
  const categoryData = await getCategoryBySlug(category);

  if (!categoryData) {
    return [];
  }

  const postCount = await countPosts({ categoryID: categoryData._id });

  const pageCount = Math.ceil(postCount / BLOG_POST_PER_PAGE);

  return Array.from({ length: pageCount }, (_, pageIdx) => pageIdx + 1).map((page) => ({
    page: page.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; page: string };
}): Promise<Metadata> {
  const { category, page } = params;

  const categoryData = await getCategoryBySlug(category);

  if (!categoryData) {
    return getMetadata(SEO_DATA.BLOG);
  }

  const title =
    (categoryData.seo?.metaTitle || categoryData.title || SEO_DATA.BLOG.title) + ` - Page ${page}`;
  const description = categoryData.seo?.metaDescription || SEO_DATA.BLOG.description;
  const imagePath = categoryData.seo?.socialImage
    ? urlForImage(categoryData.seo.socialImage).width(1200).height(630).url()
    : DEFAULT_IMAGE_PATH;

  return getMetadata({
    title,
    description,
    imagePath,
    pathname: `${ROUTE.BLOG_CATEGORY}/${category}/page/${page}`,
  });
}

// TODO: Rewrite this when dynamic params direct export will be supported
// https://github.com/vercel/next.js/issues/49489
const dynamicParams = false;
export { dynamicParams };

export const revalidate = 60;
