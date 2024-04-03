import Image from 'next/image';

import { PostData } from '@/app/(website)/blog/page';
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
    <li className={clsx({ 'col-span-3 pb-2': isFull, 'col-span-1': !isFull })}>
      <article
        className={clsx({
          'flex items-center gap-11': isFull,
          'flex flex-col items-start gap-4': !isFull,
        })}
      >
        <div className="w-full">
          <Link href={hrefPost}>
            <Image
              className={clsx('rounded-lg object-cover', {
                'max-w-[648px]': isFull,
                'max-w-[384px]': !isFull,
              })}
              src={activeCover}
              alt={altText}
              priority={isPriorityLoad}
            />
          </Link>
        </div>
        <div
          className={clsx('flex flex-col items-start ', { 'gap-4': isFull, 'gap-2.5': !isFull })}
        >
          <Link
            className={clsx(
              'rounded-full border-0 bg-[#55C1F61A] px-2.5 font-medium leading-none tracking-snug text-secondary-blue',
              {
                'relative top-[2px] py-[7px] text-14': isFull,
                'py-1.5 text-13': !isFull,
              },
            )}
            href={hrefCategory}
          >
            {tagline}
          </Link>
          <Link className="text-white" href={hrefPost}>
            <h1
              className={clsx({
                'text-40 font-medium leading-[50px] -tracking-[0.036em]': isFull,
                'line-clamp-3 text-18 font-medium leading-[24.75px]': !isFull,
              })}
            >
              {title}
            </h1>
          </Link>
          {isFull && <p className="text-18 font-light leading-[27px] text-grey-70">{text}</p>}
          <div className="flex items-center gap-2.5">
            <Image
              className="rounded-full"
              src={authorImg}
              alt={altAuthorText}
              width={isFull ? 36 : 28}
              height={isFull ? 36 : 28}
              priority={isPriorityLoad}
            />
            <div className="flex items-center gap-x-1.5">
              <span className="text-14 tracking-snug text-grey-94">{authorName}</span>
              <span className="ml-px h-[3px] w-[3px] rounded-full bg-grey-30" />
              <time className="text-14 uppercase tracking-snug text-grey-50" dateTime={date}>
                {formattedISODate}
              </time>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}
