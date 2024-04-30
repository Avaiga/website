import PostItem from '@/components/shared/post-item';

import { Post } from '@/types/blog';

export default function PostsList({
  posts,
  withFeatured = false,
}: {
  posts: Post[];
  withFeatured?: boolean;
}) {
  return (
    <section className="grid grid-cols-3 gap-x-[31px] gap-y-14 lg:gap-x-6 lg:gap-y-12 md:grid-cols-2 md:gap-y-11 sm:grid-cols-1 sm:gap-y-8">
      {posts.map((post, index) => (
        <PostItem
          key={post._id}
          post={post}
          isFull={withFeatured && index === 0}
          isPriorityLoad={index < 6}
        />
      ))}
    </section>
  );
}
