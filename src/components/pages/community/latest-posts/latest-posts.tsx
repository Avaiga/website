import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { ROUTES } from '@/constants/routes';

import Link from '@/components/shared/link';
import PostItem from '@/components/shared/post-item';

import { DEFAULT_IMAGE_PATH, getMetadata } from '@/lib/get-metadata';
import { portableToPlain } from '@/lib/portable-to-plain';
import { getAllPosts, getLatestPosts, getPostBySlug } from '@/lib/sanity/client';
import { urlForImage } from '@/lib/sanity/image';

export default async function LatestPosts() {
  const latestPosts = await getLatestPosts();

  if (latestPosts.length === 0) {
    notFound();
  }

  return (
    <section className="latest mb-[184px] mt-[181px] lg:mb-[112px] lg:mt-[144px] md:mb-[122px] md:mt-[121px] sm:mb-[90px] sm:mt-[86px]">
      <div className="container max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-32 font-semibold leading-none tracking-tight md:text-24">
            Latest blog posts
          </h2>
          <Link href={ROUTES.BLOG} size="md" theme="white" arrowTheme="red">
            All posts
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-x-8 lg:gap-x-6 md:gap-x-5 sm:grid-cols-1 sm:gap-y-7">
          {latestPosts.map((latestPost) => (
            <PostItem key={latestPost._id} post={latestPost} />
          ))}
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map(({ slug }) => ({
    slug: slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | null> {
  const { isEnabled: isDraftMode } = draftMode();

  const post = await getPostBySlug(params.slug, { isDraftMode });

  if (!post) {
    return null;
  }

  const { contentRaw, title, lead, seo, cover, slug } = post;

  if (isDraftMode) {
    return {
      title: title || '',
    };
  }

  const description =
    seo?.metaDescription || lead || `${portableToPlain(contentRaw).split('.')[0].slice(0, 159)}…`;

  const image = seo?.socialImage || cover;

  const imagePath = image ? urlForImage(image).width(1200).height(630).url() : DEFAULT_IMAGE_PATH;

  return getMetadata({
    title: seo?.metaTitle || title,
    description,
    pathname: `${ROUTES.BLOG}/${slug.current}/`,
    imagePath,
  });
}

export const revalidate = 60;
