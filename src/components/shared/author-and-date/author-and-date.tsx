import Image from 'next/image';

import { Author } from '@/types/blog';

import { urlForImage } from '@/lib/sanity/image';

function AuthorAndDate({ author, publishedAt }: { author: Author; publishedAt: string }) {
  return (
    <div className="flex items-center">
      {author.image && (
        <Image
          className="rounded-full"
          src={urlForImage(author.image).width(72).height(72).url()}
          alt={author.name}
          width={32}
          height={32}
        />
      )}
      <span className="ml-2.5 text-14 leading-none tracking-snug text-grey-94">{author.name}</span>
      <div className="mx-1.5 h-[3px] w-[3px] rounded-full bg-grey-30" aria-hidden />
      <span className="text-14 leading-none tracking-snug text-grey-50">{publishedAt}</span>
    </div>
  );
}

export default AuthorAndDate;
