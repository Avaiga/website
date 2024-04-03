import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { ROUTE } from '@/constants/routes';

import Hero from '@/components/pages/blog-post/hero';

import { DEFAULT_IMAGE_PATH, getMetadata } from '@/lib/get-metadata';
import { PortableToPlain } from '@/lib/portable-to-plain';
import { getPostBySlug } from '@/lib/sanity/client';
import { urlForImage } from '@/lib/sanity/image';

export default async function Post({ params }: { params: { slug: string } }) {
  const { isEnabled: isDraftMode } = draftMode();

  const post = await getPostBySlug(params.slug, { isDraftMode });

  if (!post) {
    notFound();
  }

  const { _id, title, lead, cover, publishedAt, contentRaw, slug, category } = post;
  let { author } = post;

  if (isDraftMode && !author) {
    author = {
      _id: '',
      name: '',
      image: null,
    };
  }

  console.log(_id, title, lead, cover, publishedAt, contentRaw, slug, author, category);

  return (
    <article className="pt-[92px]">
      <div className="container">
        <Hero
          title={title}
          cover={cover}
          author={author}
          publishedAt={publishedAt}
          category={category}
        />
      </div>
    </article>
  );
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
