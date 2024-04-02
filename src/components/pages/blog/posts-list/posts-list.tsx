import { PostData } from '@/app/blog/page';

import PostItem from '@/components/pages/blog/post-item/post-item';

export default function PostsList({ posts }: { posts: PostData[] }) {
  return (
    <ul className="grid grid-cols-3 gap-x-[31px] gap-y-14 lg:gap-x-6 lg:gap-y-[47px]">
      {posts.map((post, index) => (
        <PostItem key={index} post={post} isFull={index === 0} isPriorityLoad={index < 4} />
      ))}
    </ul>
  );
}
