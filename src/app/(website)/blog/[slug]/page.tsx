import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { ROUTE } from '@/constants/routes';

import AuthorAndShare from '@/components/pages/article/author-and-share';
import Content from '@/components/pages/article/content';
import Hero from '@/components/pages/article/hero';
import Navigation from '@/components/pages/article/navigation';
import Link from '@/components/shared/link';
import PostItem from '@/components/shared/post-item';
import Subscribe from '@/components/shared/subscribe';

import { getAnchorFromText } from '@/lib/get-anchor-from-text';
import { DEFAULT_IMAGE_PATH, getMetadata } from '@/lib/get-metadata';
import { getPublishDate } from '@/lib/get-publish-date';
import { PortableToPlain } from '@/lib/portable-to-plain';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/sanity/client';
import { urlForImage } from '@/lib/sanity/image';

export default async function Post({ params }: { params: { slug: string } }) {
  const { isEnabled: isDraftMode } = draftMode();

  const post = await getPostBySlug(params.slug, { isDraftMode });

  if (!post) {
    notFound();
  }

  const { title, lead, cover, publishedAt, contentRaw, slug, category, related } = post;
  let { author } = post;

  let relatedPosts = related;

  if (!relatedPosts) {
    relatedPosts = await getRelatedPosts({ postId: post._id });
  }

  if (isDraftMode && !author) {
    author = {
      _id: '',
      name: '',
      image: null,
    };
  }
  const navItems = contentRaw
    .filter((item) => item.style === 'h2' || item.style === 'h3')
    .map((item) => {
      if (item._type !== 'block' || !item.children) {
        return {
          title: '',
          anchor: '',
          level: '',
        };
      }

      return {
        title: (item.children as { text: string }[])[0].text,
        anchor: getAnchorFromText((item.children as { text: string }[])[0].text),
        level: item.style as string,
      };
    });

  return (
    <>
      <article className="pt-[92px]">
        <div className="container grid max-w-[1256px] grid-cols-[180px_704px_180px] gap-x-16">
          <div className="col-start-2 col-end-2">
            <Hero
              title={title}
              lead={lead}
              cover={cover}
              author={author}
              publishedAt={publishedAt}
              category={category}
              slug={slug}
            />
            <Content content={contentRaw} className="mt-14 lg:mt-12 md:mt-10 sm:mt-8" />
            <AuthorAndShare
              className="mt-8 border-t border-t-grey-20 pt-8"
              author={author}
              slug={slug}
              publishedAt={getPublishDate(publishedAt).toUpperCase()}
              title={title}
            />
          </div>
          <div className="col-start-3">
            <Navigation items={navItems} />
          </div>
        </div>
      </article>
      <section className="related mt-[120px]">
        <div className="container-narrow">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-32 font-semibold leading-none tracking-tight">Related Posts</h2>
            <Link href={ROUTE.BLOG} size="md" theme="white" arrowTheme="red">
              All posts
            </Link>
          </div>
          <ul className="grid grid-cols-3 gap-x-8 lg:gap-x-6 md:grid-cols-2 sm:grid-cols-1 sm:gap-y-8">
            {relatedPosts.map((relatedPost) => (
              <PostItem key={relatedPost._id} post={relatedPost} />
            ))}
          </ul>
        </div>
      </section>
      <Subscribe
        className="my-36"
        tagline="Newsletter"
        title="Stay ahead with our newsletter"
        text="Join Taipy's mailing list and stay informed of the latest news! We send four mails per year plus a few more for very special announcements."
      />
    </>
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
    seo?.metaDescription || lead || `${PortableToPlain(contentRaw).split('.')[0].slice(0, 159)}…`;

  const image = seo?.socialImage || cover;

  const imagePath = image ? urlForImage(image).width(1200).height(630).url() : DEFAULT_IMAGE_PATH;

  return getMetadata({
    title: seo?.metaTitle || title,
    description,
    pathname: `${ROUTE.BLOG}/${slug.current}/`,
    imagePath,
  });
}

export const revalidate = 60;
