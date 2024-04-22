import { ROUTES } from '@/constants/routes';
import clsx from 'clsx';

import AuthorAndDate from '@/components/shared/author-and-date';
import SocialShare from '@/components/shared/social-share';

import { SinglePost } from '@/types/blog';

type AuthorAndShareProps = { className?: string } & Pick<
  SinglePost,
  'publishedAt' | 'author' | 'slug' | 'title'
>;

function AuthorAndShare({ publishedAt, author, slug, title, className }: AuthorAndShareProps) {
  return (
    <div
      className={clsx('flex justify-between sm:flex-wrap sm:gap-x-2 sm:gap-y-[18px]', className)}
    >
      <AuthorAndDate author={author} publishedAt={publishedAt} />
      <SocialShare pathname={`${ROUTES.BLOG}/${slug.current}`} title={title} />
    </div>
  );
}

export default AuthorAndShare;
