import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Content from '@/components/pages/article/content';
import Navigation from '@/components/pages/legal/navigation';

import { getAnchorFromText } from '@/lib/get-anchor-from-text';
import { DEFAULT_IMAGE_PATH, getMetadata } from '@/lib/get-metadata';
import { portableToPlain } from '@/lib/portable-to-plain';
import { getLegalPageBySlug } from '@/lib/sanity/client';
import { urlForImage } from '@/lib/sanity/image';

export default async function TermsOfUse() {
  const post = await getLegalPageBySlug('terms-of-use');

  if (!post) {
    notFound();
  }

  const { title, contentRaw } = post;

  const navItems = contentRaw
    .filter((item) => item.style === 'h2')
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
      <article className="pb-[148px] pt-[140px] xl:pb-32 xl:pt-[120px] md:pb-[96px] md:pt-[112px] sm:pb-[80px] sm:pt-[92px]">
        <div className="container relative grid max-w-[1472px] grid-cols-[224px_896px_224px] gap-x-16 xl:block xl:max-w-[896px]">
          {navItems.length > 0 && (
            <div className="absolute col-start-1 col-end-1 h-full max-w-[224px] xl:static xl:mt-12 xl:h-auto xl:max-w-none md:mt-10 sm:mt-8">
              <Navigation items={navItems} />
            </div>
          )}
          <div className="col-start-2 col-end-2 mt-14 xl:mt-7 md:mt-6 sm:mt-5">
            <h1 className="font-title md:text-30 text-40 font-semibold leading-tight tracking-tight lg:text-36">
              {title}
            </h1>
            {/* TODO: add datePicker in sanity for that */}
            {/* <p className="text-gray-40 mt-4 text-18 font-light leading-relaxed tracking-tighter lg:leading-tight sm:mt-3">
              Last Updated: {lastUpdateDate}
            </p> */}
            <Content className="mt-12 lg:mt-10 md:mt-9" content={contentRaw} />
          </div>
        </div>
      </article>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata | null> {
  const post = await getLegalPageBySlug('terms-of-use');

  if (!post) {
    return null;
  }

  const { contentRaw, title, seo } = post;

  const description =
    seo?.metaDescription || `${portableToPlain(contentRaw).split('.')[0].slice(0, 159)}…`;

  const image = seo?.socialImage || null;

  const imagePath = image ? urlForImage(image).width(1200).height(630).url() : DEFAULT_IMAGE_PATH;

  return getMetadata({
    title: seo?.metaTitle || title,
    description,
    pathname: `/terms-of-use`,
    imagePath,
  });
}

export const revalidate = 60;
