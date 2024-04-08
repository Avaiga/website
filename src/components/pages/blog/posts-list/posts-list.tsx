import { PostData } from '@/app/(website)/blog/page';

import PostItem from '@/components/pages/blog/post-item/post-item';

export default function PostsList({ posts }: { posts: PostData[] }) {
  return (
    <ul className="grid grid-cols-3 gap-x-[31px] gap-y-14 lg:gap-x-6 lg:gap-y-12 md:grid-cols-2 md:gap-y-11 sm:grid-cols-1 sm:gap-y-8">
      {posts.map((post, index) => (
        <PostItem key={index} post={post} isFull={index === 0} isPriorityLoad={index < 4} />
      ))}
    </ul>
  );
}
