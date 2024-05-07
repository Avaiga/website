import Image from 'next/image';

import defaultImage from '@/images/default-author-image.svg';

import { Author } from '@/types/blog';

import { urlForImage } from '@/lib/sanity/image';

function AuthorAndDate({ author, publishedAt }: { author: Author; publishedAt: string }) {
  const authorImageUrl = author.image
    ? urlForImage(author.image).width(72).height(72).url()
    : defaultImage;

  return (
    <div className="flex items-center">
      <Image
        className="rounded-full"
        src={authorImageUrl}
        alt={author.name}
        width={32}
        height={32}
      />
      <span className="ml-2.5 line-clamp-2 text-14 leading-none tracking-snug text-grey-94">
        {author.name}
      </span>
      <div className="mx-1.5 h-[3px] w-[3px] rounded-full bg-grey-30" aria-hidden />
      <time className="whitespace-nowrap text-14 leading-none tracking-snug text-grey-50">
        {publishedAt}
      </time>
    </div>
  );
}

export default AuthorAndDate;
