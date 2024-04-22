import Image from 'next/image';

import clsx from 'clsx';

import { Author } from '@/types/blog';

import { urlForImage } from '@/lib/sanity/image';

function AuthorAndDate({
  author,
  publishedAt,
  isRelated = false,
}: {
  author: Author;
  publishedAt: string;
  isRelated?: boolean;
}) {
  return (
    <div className="flex items-center">
      {author.image && (
        <Image
          className={clsx('rounded-full', {
            'h-auto w-7 md:w-6': isRelated,
          })}
          src={urlForImage(author.image).width(72).height(72).url()}
          alt={author.name}
          width={32}
          height={32}
        />
      )}
      <span
        className={clsx('ml-2.5 text-14 leading-none tracking-snug text-grey-94', {
          'md:text-12': isRelated,
        })}
      >
        {author.name}
      </span>
      <div className="mx-1.5 h-[3px] w-[3px] rounded-full bg-grey-30" aria-hidden />
      <time
        className={clsx('text-14 leading-none tracking-snug text-grey-50', {
          'md:text-12': isRelated,
        })}
      >
        {publishedAt}
      </time>
    </div>
  );
}

export default AuthorAndDate;
