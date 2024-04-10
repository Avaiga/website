import Image from 'next/image';

import { ROUTE } from '@/constants/routes';

import Breadcrumbs from '@/components/shared/breadcrumbs';
import CategoryLabel from '@/components/shared/category-label';

import { SinglePost } from '@/types/blog';

import { getPublishDate } from '@/lib/get-publish-date';
import { urlForImage } from '@/lib/sanity/image';

import AuthorAndShare from '../author-and-share';

type HeroProps = Pick<
  SinglePost,
  'title' | 'lead' | 'cover' | 'author' | 'publishedAt' | 'category' | 'slug'
>;

function Hero({ title, lead, cover, author, publishedAt, category, slug }: HeroProps) {
  return (
    <>
      <Breadcrumbs items={[{ title: 'Blog', url: ROUTE.BLOG }, { title }]} />

      <header className="mt-12">
        <CategoryLabel
          url={category ? `${ROUTE.BLOG_CATEGORY}/${category.slug.current}` : ROUTE.BLOG}
        >
          {category ? category.titleShort : 'All posts'}
        </CategoryLabel>
        <h1 className="mt-3.5 text-40 font-semibold leading-tight tracking-tight">{title}</h1>
        <p className="mt-[18px] text-20 font-light text-grey-70">{lead}</p>
        <AuthorAndShare
          className="mt-[18px]"
          author={author}
          slug={slug}
          publishedAt={getPublishDate(publishedAt).toUpperCase()}
          title={title}
        />
        {cover && (
          <Image
            className="mt-10 rounded-lg"
            src={urlForImage(cover).width(1408).height(792).url()}
            alt=""
            width={704}
            height={396}
            placeholder={cover.asset?.metadata?.lqip ? 'blur' : 'empty'}
            blurDataURL={cover.asset?.metadata?.lqip ?? ''}
          />
        )}
      </header>
    </>
  );
}

export default Hero;
