import Image from 'next/image';

import { ROUTES } from '@/constants/routes';

import Breadcrumbs from '@/components/shared/breadcrumbs';
import CategoryLabel from '@/components/shared/category-label';

import { Breadcrumb, SinglePost } from '@/types/blog';

import { getPublishDate } from '@/lib/get-publish-date';
import { urlForImage } from '@/lib/sanity/image';

import AuthorAndShare from '../../pages/article/author-and-share';

type ArticleHeaderProps = Pick<
  SinglePost,
  'title' | 'lead' | 'cover' | 'author' | 'publishedAt' | 'slug'
> & {
  category?: {
    slug: string;
    title: string;
  };
  breadcrumbs: Breadcrumb[];
};

function ArticleHeader({
  title,
  lead,
  cover,
  author,
  publishedAt,
  category,
  slug,
  breadcrumbs,
}: ArticleHeaderProps) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <div className="mt-12 xl:mt-10">
        <CategoryLabel
          className="md:h-[26px] md:text-12"
          url={category ? category.slug : ROUTES.BLOG}
        >
          {category ? category.title : 'All posts'}
        </CategoryLabel>
        <h1 className="mt-3.5 text-40 font-semibold leading-tight tracking-tight xl:text-36 md:mt-3 md:text-32 sm:mt-2 sm:text-28">
          {title}
        </h1>
        <p className="mt-[18px] text-20 font-light text-grey-70 xl:mt-4 xl:text-18 md:mt-3.5 sm:mt-3">
          {lead}
        </p>
        <AuthorAndShare
          className="mt-[18px] xl:mt-4 md:mt-3.5 sm:mt-3"
          author={author}
          slug={slug}
          publishedAt={getPublishDate(publishedAt).toUpperCase()}
          title={title}
        />
        {cover && (
          <Image
            className="mt-10 rounded-lg lg:mt-9 md:mt-8 sm:mt-7"
            src={urlForImage(cover).width(1408).height(792).url()}
            alt=""
            width={704}
            height={396}
            placeholder={cover.asset?.metadata?.lqip ? 'blur' : 'empty'}
            blurDataURL={cover.asset?.metadata?.lqip ?? ''}
          />
        )}
      </div>
    </>
  );
}

export default ArticleHeader;
