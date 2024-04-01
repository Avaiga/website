import { PostData } from '@/app/blog/page';

import PostItem from '../post-item/post-item';

export default function PostsList({ posts }: { posts: PostData[] }) {
  return (
    <ul className="grid grid-cols-3 gap-x-[31px] gap-y-14">
      {posts.map((post, index) => (
        <PostItem key={index} post={post} isFull={index === 0} isPriorityLoad={index < 4} />
      ))}
    </ul>
  );
}
