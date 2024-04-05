import Image from 'next/image';

import { ROUTE } from '@/constants/routes';
import clsx from 'clsx';

import SocialShare from '@/components/shared/social-share';

import { SinglePost } from '@/types/blog';

import { urlForImage } from '@/lib/sanity/image';

type AuthorAndShareProps = { className?: string } & Pick<
  SinglePost,
  'publishedAt' | 'author' | 'slug' | 'title'
>;

function AuthorAndShare({ publishedAt, author, slug, title, className }: AuthorAndShareProps) {
  return (
    <div className={clsx('flex justify-between', className)}>
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
        <span className="ml-2.5 text-14 leading-none tracking-snug">{author.name}</span>
        <div className="mx-1.5 h-[3px] w-[3px] rounded-full bg-grey-30" aria-hidden />
        <span className="text-14 leading-none tracking-snug text-grey-50">{publishedAt}</span>
      </div>
      <SocialShare pathname={`${ROUTE.BLOG}/${slug.current}`} title={title} />
    </div>
  );
}

export default AuthorAndShare;
