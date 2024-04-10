import Image from 'next/image';

import { ROUTE } from '@/constants/routes';
import clsx from 'clsx';

import AuthorAndDate from '@/components/shared/author-and-date';
import Link from '@/components/shared/link';

import { Post } from '@/types/blog';

import { getPublishDate } from '@/lib/get-publish-date';
import { urlForImage } from '@/lib/sanity/image';

interface PostItemProps {
  post: Post;
  isFull?: boolean;
  isPriorityLoad?: boolean;
}

export default function PostItem({ post, isFull = false, isPriorityLoad = false }: PostItemProps) {
  const { slug, title, cover, category, author, publishedAt, lead } = post;

  return (
    <article
      className={
        isFull
          ? 'col-span-full flex items-center gap-11 pb-2 lg:gap-9 lg:pb-1.5 md:flex-col md:items-start md:gap-7 sm:gap-3.5 sm:pb-0'
          : 'flex flex-col items-start gap-4 md:gap-3.5'
      }
    >
      <div className="w-full">
        {cover && (
          <Link href={`${ROUTE.BLOG}/${slug.current}`}>
            <Image
              className="aspect-video w-full rounded-lg object-cover"
              src={urlForImage(cover).width(1296).height(728).url()}
              width={648}
              height={364}
              alt={title}
              priority={isPriorityLoad}
              placeholder={cover.asset?.metadata?.lqip ? 'blur' : 'empty'}
              blurDataURL={cover.asset?.metadata?.lqip ?? ''}
            />
          </Link>
        )}
      </div>
      <div
        className={clsx('flex flex-col items-start', {
          'w-[81%] gap-[15px] lg:w-[92%] lg:gap-3 md:w-full sm:gap-2': isFull,
          'gap-2.5 md:gap-2': !isFull,
        })}
      >
        <Link
          className={clsx(
            'inline-flex items-center rounded-full border-0 bg-[#55C1F61A] px-2.5 font-medium leading-none tracking-snug text-secondary-blue md:text-12 sm:text-11',
            {
              'h-7 text-14 lg:h-[26px] md:text-12 sm:h-[22px] sm:text-11': isFull,
              'h-6 text-13 lg:h-[23px] md:h-[23px] md:text-12 sm:h-[22px] sm:text-11': !isFull,
            },
          )}
          href={`${ROUTE.BLOG_CATEGORY}/${category.slug.current}`}
        >
          {category.titleShort}
        </Link>
        <Link className="text-white" href={`${ROUTE.BLOG}/${slug.current}`}>
          <h1
            className={clsx('font-medium sm:text-18', {
              'text-40 leading-tight tracking-tight lg:text-36 md:text-32 sm:leading-snug sm:tracking-[0px]':
                isFull,
              'line-clamp-3 text-18 leading-snug': !isFull,
            })}
          >
            {title}
          </h1>
        </Link>
        {isFull && (
          <p className="text-18 font-light leading-normal text-grey-70 sm:hidden">{lead}</p>
        )}
        <AuthorAndDate author={author} publishedAt={getPublishDate(publishedAt).toUpperCase()} />
      </div>
    </article>
  );
}
