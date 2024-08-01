import { GraphQLClient } from 'graphql-request';

import { Category, Legal, Post, SingleCategory, SingleLegal, SinglePost } from '@/types/blog';
import { CustomerStory, SingleCustomerStory } from '@/types/customer-story';
import { HomePageQueryResult, RelatedPosts } from '@/types/home-page';
import { PricingContentItem } from '@/types/pricing-page';
import { Banner, TestimonialsItem } from '@/types/shared';

import {
  allCategoryQuery,
  allCustomerStoryQuery,
  allCustomerStoryWithLimitationsQuery,
  allLegalQuery,
  allPostQuery,
  allPostWithLimitationsQuery,
  bannerQuery,
  categoryQuery,
  countCustomerStoryQuery,
  countPostQuery,
  customerStoryQuery,
  homePageQuery,
  latestPostsQuery,
  legalQuery,
  postQuery,
  pricingPageQuery,
  promotedPostQuery,
  testimonialsQuery,
} from '@/lib/sanity/query';
import { BLOG_POST_PER_PAGE, CUSTOMER_STORY_PER_PAGE } from '@/lib/sanity/utils';

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
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET}`,
          }
        : undefined,
    )
    .then((data) => data.allPost)
    .then((data) => data[0] || null);

export const getRelatedPosts = async ({ postId }: { postId: string }): Promise<Post[]> => {
  return await graphQLClient
    .request<{ allPost: Post[] }>(allPostWithLimitationsQuery, {
      where: postId && {
        _id: {
          neq: postId,
        },
      },
      offset: 0,
      limit: 3,
    })
    .then((data) => data.allPost);
};

export const getLatestPosts = async (): Promise<SinglePost[]> =>
  await graphQLClient
    .request<{ allPost: SinglePost[] }>(latestPostsQuery)
    .then((data) => data.allPost);

export const getAllRelatedPosts = async (): Promise<Post[]> => {
  return await graphQLClient
    .request<{ allPost: Post[] }>(allPostWithLimitationsQuery, {
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

export const getAllCustomerStories = async (): Promise<SingleCustomerStory[]> =>
  await graphQLClient
    .request<{ allCustomerStory: SingleCustomerStory[] }>(allCustomerStoryQuery)
    .then((data) => data.allCustomerStory);

export const getCustomerStories = async (options: { page: number }): Promise<CustomerStory[]> =>
  await graphQLClient
    .request<{ allCustomerStory: CustomerStory[] }>(allCustomerStoryWithLimitationsQuery, {
      offset: options?.page ? CUSTOMER_STORY_PER_PAGE * options.page - CUSTOMER_STORY_PER_PAGE : 0,
      limit: options?.page ? CUSTOMER_STORY_PER_PAGE : null,
    })
    .then((data) => data.allCustomerStory);

export const countCustomerStories = async (): Promise<number> =>
  await graphQLClient
    .request<{ allCustomerStory: { _id: string }[] }>(countCustomerStoryQuery)
    .then((data) => data.allCustomerStory.length);

export const getCustomerStoryBySlug = async (
  slug: string,
  options?: {
    isDraftMode: boolean;
  },
): Promise<SingleCustomerStory | null> =>
  await graphQLClient
    .request<{ allCustomerStory: SingleCustomerStory[] }>(
      customerStoryQuery,
      { slug },
      options?.isDraftMode
        ? {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET}`,
          }
        : undefined,
    )
    .then((data) => data.allCustomerStory)
    .then((data) => data[0] || null);

export const getLegalPages = async (): Promise<Legal[]> =>
  await graphQLClient.request<{ allLegal: Legal[] }>(allLegalQuery).then((data) => data.allLegal);

export const getLegalPageBySlug = async (slug: string): Promise<SingleLegal | null> =>
  await graphQLClient
    .request<{ allLegal: SingleLegal[] }>(legalQuery, { slug })
    .then((data) => data.allLegal)
    .then((data) => data[0] || null);

export const getBanner = async (): Promise<Banner | null> =>
  await graphQLClient
    .request<{ allBanner: Banner[] }>(bannerQuery)
    .then((data) => data.allBanner)
    .then((data) => data[0] || null);

export const getHomePageData = async (): Promise<Post[] | null> => {
  return await graphQLClient.request<HomePageQueryResult>(homePageQuery).then((data) => {
    const page = data.allPage[0];

    if (!page) {
      return null;
    }

    const relatedPosts =
      page.content.find((item): item is RelatedPosts => item._type === 'relatedPosts')?.posts || [];

    return relatedPosts;
  });
};

export const getPricingPageData = async (): Promise<{
  [key: string]: PricingContentItem;
} | null> => {
  const page = await graphQLClient
    .request<{ allPage: { content: PricingContentItem[] }[] }>(pricingPageQuery)
    .then((data) => data.allPage[0] || null);

  return page.content.reduce(
    (acc: { [key: string]: PricingContentItem }, item: PricingContentItem) => {
      acc[item._type] = item;

      return acc;
    },
    {} as { [key: string]: PricingContentItem },
  );
};

export const getTestimonialsData = async (): Promise<{
  title: string;
  items: TestimonialsItem[];
} | null> => {
  return await graphQLClient
    .request<{ allTestimonials: { title: string; items: TestimonialsItem[] }[] }>(testimonialsQuery)
    .then((data) => {
      return data.allTestimonials[0] || null;
    });
};
