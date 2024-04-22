import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { ROUTES } from '@/constants/routes';

import AuthorAndShare from '@/components/pages/article/author-and-share';
import Content from '@/components/pages/article/content';
import Navigation from '@/components/pages/article/navigation';
import ArticleHeader from '@/components/shared/article-header';
import Link from '@/components/shared/link';
import PostItem from '@/components/shared/post-item';
import Subscribe from '@/components/shared/subscribe';

import { getAnchorFromText } from '@/lib/get-anchor-from-text';
import { DEFAULT_IMAGE_PATH, getMetadata } from '@/lib/get-metadata';
import { getPublishDate } from '@/lib/get-publish-date';
import { portableToPlain } from '@/lib/portable-to-plain';
import {
  getAllCustomerStories,
  getCustomerStoryBySlug,
  getRelatedPosts,
} from '@/lib/sanity/client';
import { urlForImage } from '@/lib/sanity/image';

async function CustomerStory({ params }: { params: { slug: string } }) {
  const { isEnabled: isDraftMode } = draftMode();

  const post = await getCustomerStoryBySlug(params.slug, { isDraftMode });

  if (!post) {
    notFound();
  }

  const { title, lead, cover, publishedAt, contentRaw, slug, related } = post;
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
      <article className="pt-[92px] xl:pt-[88px] md:pt-[84px] sm:pt-20">
        <div className="container relative grid max-w-[1256px] grid-cols-[180px_704px_180px] gap-x-16 xl:block xl:max-w-[704px]">
          <div className="col-start-2 col-end-2">
            <ArticleHeader
              title={title}
              lead={lead}
              cover={cover}
              author={author}
              publishedAt={publishedAt}
              category={{
                title: 'Customer Story',
                slug: ROUTES.CUSTOMER_STORIES as string,
              }}
              slug={slug}
              breadcrumbs={[{ title: 'Customer stories', url: ROUTES.CUSTOMER_STORIES }, { title }]}
            />
          </div>
          {navItems.length > 0 && (
            <div className="absolute col-start-3 h-full max-w-[180px] xl:static xl:mt-12 xl:h-auto xl:max-w-none md:mt-10 sm:mt-8">
              <Navigation items={navItems} />
            </div>
          )}
          <div className="col-start-2 col-end-2 mt-14 xl:mt-7 md:mt-6 sm:mt-5">
            <Content className="customer-story" content={contentRaw} />
            <AuthorAndShare
              className="mt-8 border-t border-t-grey-20 pt-8 lg:mt-7 lg:pt-7 md:mt-6 md:pt-6 sm:mt-5 sm:pt-5"
              author={author}
              slug={slug}
              publishedAt={getPublishDate(publishedAt).toUpperCase()}
              title={title}
            />
          </div>
        </div>
      </article>
      <section className="related mt-[120px] lg:mt-[104px] md:mt-[88px] sm:mt-16">
        <div className="container-narrow">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-32 font-semibold leading-none tracking-tight">Related Posts</h2>
            <Link href={ROUTES.BLOG} size="md" theme="white" arrowTheme="red">
              All posts
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-x-8 lg:gap-x-6 md:gap-x-5 sm:grid-cols-1 sm:gap-y-7">
            {relatedPosts.map((relatedPost) => (
              <PostItem key={relatedPost._id} post={relatedPost} isRelated />
            ))}
          </div>
        </div>
      </section>
      <Subscribe
        className="my-36 lg:my-32 md:my-[104px] sm:my-[72px]"
        tagline="Newsletter"
        title="Stay ahead with our newsletter"
        text="Join Taipy's mailing list and stay informed of the latest news! We send four mails per year plus a few more for very special announcements."
      />
    </>
  );
}

export default CustomerStory;

export async function generateStaticParams() {
  const posts = await getAllCustomerStories();

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

  const post = await getCustomerStoryBySlug(params.slug, { isDraftMode });

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
    pathname: `${ROUTES.CUSTOMER_STORIES}/${slug.current}/`,
    imagePath,
  });
}

export const revalidate = 60;
