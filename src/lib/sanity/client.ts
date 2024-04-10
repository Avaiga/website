import { GraphQLClient } from 'graphql-request';

import { Category, Legal, Post, SingleCategory, SingleLegal, SinglePost } from '@/types/blog';

import {
  allCategoryQuery,
  allLegalQuery,
  allPostQuery,
  allPostWithLimitationsQuery,
  categoryQuery,
  countPostQuery,
  legalQuery,
  postQuery,
  promotedPostQuery,
} from '@/lib/sanity/query';
import { BLOG_POST_PER_PAGE } from '@/lib/sanity/utils';

const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_SANITY_GRAPHQL_URL!);

export const getCategories = async (): Promise<Category[]> =>
  await graphQLClient
    .request<{ allCategory: Category[] }>(allCategoryQuery)
    .then((data) => data.allCategory);

export const getCategoryBySlug = async (slug: string): Promise<SingleCategory | null> =>
  await graphQLClient
    .request<{ allCategory: SingleCategory[] }>(categoryQuery, { slug })
    .then((data) => data.allCategory)
    .then((data) => data[0] || null);

export const getAllPosts = async (): Promise<SinglePost[]> =>
  await graphQLClient.request<{ allPost: SinglePost[] }>(allPostQuery).then((data) => data.allPost);

export const getPosts = async (options: { page: number }): Promise<Post[]> =>
  await graphQLClient
    .request<{ allPost: Post[] }>(allPostWithLimitationsQuery, {
      where: {
        featured: {
          neq: true,
        },
      },
      offset: options?.page ? BLOG_POST_PER_PAGE * options.page - BLOG_POST_PER_PAGE : 0,
      limit: options?.page ? BLOG_POST_PER_PAGE : null,
    })
    .then((data) => data.allPost);

export const countPosts = async (options?: { categoryID?: string }): Promise<number> => {
  const { categoryID } = options || {};

  const where = categoryID
    ? {
        _: {
          references: categoryID,
        },
        featured: {
          neq: true,
        },
      }
    : {
        featured: {
          neq: true,
        },
      };

  return await graphQLClient
    .request<{ allPost: { _id: string }[] }>(countPostQuery, { where })
    .then((data) => data.allPost.length);
};

export const getPostsByCategorySlug = async ({
  categorySlug,
  page = 1,
}: {
  categorySlug: string;
  page?: number;
}): Promise<Post[]> => {
  const categoryData = await getCategoryBySlug(categorySlug);

  if (!categoryData) {
    return [];
  }

  return await graphQLClient
    .request<{ allPost: Post[] }>(allPostWithLimitationsQuery, {
      where: {
        _: {
          references: categoryData._id,
        },
      },
      offset: BLOG_POST_PER_PAGE * page - BLOG_POST_PER_PAGE,
      limit: BLOG_POST_PER_PAGE,
    })
    .then((data) => data.allPost);
};

export const getPostBySlug = async (
  slug: string,
  options?: {
    isDraftMode: boolean;
  },
): Promise<SinglePost | null> =>
  await graphQLClient
    .request<{ allPost: SinglePost[] }>(
      postQuery,
      { slug },
      options?.isDraftMode
        ? {
            Authorization: `Bearer ${process.env.SANITY_PREVIEW_TOKEN}`,
          }
        : undefined,
    )
    .then((data) => data.allPost)
    .then((data) => data[0] || null);

export const getRelatedPosts = async ({ postId }: { postId: string }): Promise<Post[]> => {
  return await graphQLClient
    .request<{ allPost: Post[] }>(allPostWithLimitationsQuery, {
      where: {
        _id: {
          neq: postId,
        },
      },
      offset: 0,
      limit: 3,
    })
    .then((data) => data.allPost);
};

export const getPromotedPost = async (): Promise<Post | null> =>
  await graphQLClient
    .request<{ allPost: Post[] }>(promotedPostQuery)
    .then((data) => data.allPost)
    .then((data) => data[0] || null);

export const getLegalPages = async (): Promise<Legal[]> =>
  await graphQLClient.request<{ allLegal: Legal[] }>(allLegalQuery).then((data) => data.allLegal);

export const getLegalPageBySlug = async (slug: string): Promise<SingleLegal | null> =>
  await graphQLClient
    .request<{ allLegal: SingleLegal[] }>(legalQuery, { slug })
    .then((data) => data.allLegal)
    .then((data) => data[0] || null);
