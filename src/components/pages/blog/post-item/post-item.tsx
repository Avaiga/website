import Image from 'next/image';

import { PostData } from '@/app/blog/page';
import clsx from 'clsx';

import Link from '@/components/shared/link';

interface PostItemProps {
  post: PostData;
  isFull: boolean;
  isPriorityLoad: boolean;
}

export default function PostItem({ post, isFull, isPriorityLoad }: PostItemProps) {
  const {
    altText,
    hrefPost,
    hrefCategory,
    activeCover,
    tagline,
    title,
    text,
    authorImg,
    altAuthorText,
    authorName,
    date,
  } = post;

  function getFormattedISODate(isoDate: string) {
    return new Date(isoDate)
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
      .toUpperCase();
  }

  const formattedISODate = getFormattedISODate(date);

  return (
    <li className={clsx({ 'col-span-3 pb-2 lg:pb-1.5': isFull })}>
      <article
        className={isFull ? 'flex items-center gap-11 lg:gap-9' : 'flex flex-col items-start gap-4'}
      >
        <div className="w-full">
          <Link href={hrefPost}>
            <Image
              className="w-full rounded-lg object-cover"
              src={activeCover}
              alt={altText}
              priority={isPriorityLoad}
            />
          </Link>
        </div>
        <div
          className={clsx('flex flex-col items-start', {
            'w-[81%] gap-[15px] lg:w-[92%] lg:gap-3': isFull,
            'gap-2.5': !isFull,
          })}
        >
          <Link
            className={clsx(
              'rounded-full border-0 bg-[#55C1F61A] px-2.5 text-13 font-medium leading-none tracking-snug text-secondary-blue',
              {
                'top-0.5 py-[7px] text-14 lg:py-1.5': isFull,
                'py-1.5': !isFull,
              },
            )}
            href={hrefCategory}
          >
            {tagline}
          </Link>

          <Link className="text-white" href={hrefPost}>
            <h1
              className={clsx('font-medium tracking-tight', {
                'text-40 leading-tight lg:text-36 md:text-34': isFull,
                'line-clamp-3 text-18 leading-snug': !isFull,
              })}
            >
              {title}
            </h1>
          </Link>

          {isFull && <p className="text-18 font-light leading-normal text-grey-70">{text}</p>}

          <div
            className={clsx('flex items-center gap-2.5', {
              'pt-0.5 lg:pt-1': isFull,
            })}
          >
            <Image
              className={isFull ? 'h-9 w-9 rounded-full lg:h-8 lg:w-8' : 'h-7 w-7 rounded-full'}
              src={authorImg}
              alt={altAuthorText}
              priority={isPriorityLoad}
            />
            <div className="flex items-center gap-x-1.5 text-14">
              <span className="tracking-snug text-grey-94">{authorName}</span>
              <span className="ml-px h-[3px] w-[3px] rounded-full bg-grey-30" />
              <time className="uppercase tracking-snug text-grey-50" dateTime={date}>
                {formattedISODate}
              </time>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}
