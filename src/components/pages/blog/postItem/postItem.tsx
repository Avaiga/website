import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import clsx from 'clsx';

interface PostData {
  altText: string;
  hrefPost: string;
  hrefCategory: string;
  cover: StaticImageData;
  activeCover: StaticImageData;
  tagline: string;
  title: string;
  text: string;
  authorImg: StaticImageData;
  altAuthorText: string;
  authorName: string;
  date: string;
}

interface PostItemProps {
  post: PostData;
  isFull: boolean;
}

export default function PostItem({ post, isFull }: PostItemProps) {
  const {
    altText,
    hrefPost,
    hrefCategory,
    cover,
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
          <a href={hrefPost}>
            <Image
              className={clsx('rounded-lg object-cover', {
                'max-w-[648px]': isFull,
                'max-w-[384px]': !isFull,
              })}
              src={isFull ? activeCover : cover}
              alt={altText}
              loading="lazy"
            />
          </a>
        </div>
        <div
          className={clsx('flex flex-col items-start ', { 'gap-4': isFull, 'gap-2.5': !isFull })}
        >
          <a
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
          </a>
          <a className="text-white" href={hrefPost}>
            <h3
              className={clsx({
                'text-40 font-medium leading-[50px] -tracking-[0.036em]': isFull,
                'line-clamp-3 text-18 font-medium leading-[24.75px]': !isFull,
              })}
            >
              {title}
            </h3>
          </a>
          {isFull && <p className="text-18 font-light leading-[27px] text-grey-70">{text}</p>}
          <div className="flex items-center gap-2.5">
            <Image
              className="rounded-full"
              src={authorImg}
              alt={altAuthorText}
              width={isFull ? 36 : 28}
              height={isFull ? 36 : 28}
              loading="lazy"
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
