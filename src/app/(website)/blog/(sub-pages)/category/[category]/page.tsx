import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ROUTE } from '@/constants/routes';
import { SEO_DATA } from '@/constants/seo';

import Pagination from '@/components/pages/blog/pagination/pagination';
import PostsList from '@/components/pages/blog/posts-list';

import { DEFAULT_IMAGE_PATH, getMetadata } from '@/lib/get-metadata';
import {
  countPosts,
  getCategories,
  getCategoryBySlug,
  getPostsByCategorySlug,
} from '@/lib/sanity/client';
import { urlForImage } from '@/lib/sanity/image';
import { BLOG_POST_PER_PAGE } from '@/lib/sanity/utils';

type CategoryProps = {
  params: {
    category: string;
  };
};

async function Category({ params }: CategoryProps) {
  const { category } = params;

  const categoryData = await getCategoryBySlug(category);

  if (!categoryData) {
    notFound();
  }

  const [postCount, posts] = await Promise.all([
    countPosts({ categoryID: categoryData._id }),
    getPostsByCategorySlug({ page: 1, categorySlug: category }),
  ]);

  const pageCount = Math.ceil(postCount / BLOG_POST_PER_PAGE);

  return (
    <>
      <h1 className="sr-only">Taipy Blog</h1>
      <PostsList posts={posts} />
      {pageCount !== 1 && (
        <Pagination
          currentPage={1}
          pageCount={pageCount}
          path={`${ROUTE.BLOG_CATEGORY}/${params.category}`}
        />
      )}
    </>
  );
}

export default Category;

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    category: category.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata | null> {
  const { category } = params;

  const categoryData = await getCategoryBySlug(category);

  if (!categoryData) {
    return null;
  }

  const title = categoryData.seo?.metaTitle || categoryData.title || SEO_DATA.BLOG.title;
  const description = categoryData.seo?.metaDescription || SEO_DATA.BLOG.description;
  const imagePath = categoryData.seo?.socialImage
    ? urlForImage(categoryData.seo.socialImage).width(1200).height(630).url()
    : DEFAULT_IMAGE_PATH;

  return getMetadata({
    title,
    description,
    imagePath,
    pathname: `${ROUTE.BLOG_CATEGORY}/${category}`,
  });
}

export const revalidate = 60;
