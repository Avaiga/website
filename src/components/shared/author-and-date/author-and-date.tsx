import Image from 'next/image';

import defaultImage from '@/images/default-author-image.svg';
import clsx from 'clsx';

import { Author } from '@/types/shared';

import { urlForImage } from '@/lib/sanity/image';

type AuthorAndDateProps = {
  author: Author;
  publishedAt: string;
  isRelated?: boolean;
  isPriority?: boolean;
};

function AuthorAndDate({
  author,
  publishedAt,
  isRelated = false,
  isPriority = false,
}: AuthorAndDateProps) {
  const authorImageUrl = author.image
    ? urlForImage(author.image).width(72).height(72).url()
    : defaultImage;

  return (
    <div className="flex items-center">
      <Image
        className={clsx('rounded-full', {
          'h-auto w-7 md:w-6': isRelated,
        })}
        src={authorImageUrl}
        alt={author.name}
        width={32}
        height={32}
        priority={isPriority}
      />
      <span
        className={clsx('ml-2.5 line-clamp-2 text-14 leading-none tracking-snug text-grey-94', {
          'md:text-12': isRelated,
        })}
      >
        {author.name}
      </span>
      <div className="mx-1.5 h-[3px] w-[3px] rounded-full bg-grey-30" aria-hidden />
      <time
        className={clsx('whitespace-nowrap text-14 leading-none tracking-snug text-grey-50', {
          'md:text-12': isRelated,
        })}
        dateTime={publishedAt}
      />
    </div>
  );
}

export default AuthorAndDate;
