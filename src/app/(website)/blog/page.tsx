import type { Route } from 'next';
import type { StaticImageData } from 'next/image';

import authorImage from '@/images/pages/blog/author-img.jpg';
import activeCoverImg from '@/images/pages/blog/cover-img.jpg';

import Pagination from '@/components/pages/blog-page/pagination/pagination';
import PostsList from '@/components/pages/blog-page/posts-list';
import Sidebar from '@/components/pages/blog-page/sidebar';
import Subscribe from '@/components/shared/subscribe';

import { getMetadata } from '@/lib/get-metadata';

// mock data for markup
export interface PostData {
  altText: string;
  hrefPost: Route<string>;
  hrefCategory: Route<string>;
  activeCover: StaticImageData;
  tagline: string;
  title: string;
  text: string;
  authorImg: StaticImageData;
  altAuthorText: string;
  authorName: string;
  date: string;
}

const postData: PostData = {
  altText: 'alt img',
  hrefPost: '/',
  hrefCategory: '/',
  activeCover: activeCoverImg,
  tagline: 'Announcement',
  title: 'Big data charting strategies in Python',
  text: '',
  authorImg: authorImage,
  altAuthorText: 'author img',
  authorName: 'Vincent Gosselin',
  date: '2024-03-05T12:00:00Z',
};

const fullPostData: PostData = {
  altText: 'alt img',
  hrefPost: '/',
  hrefCategory: '/',
  activeCover: activeCoverImg,
  tagline: 'Announcement',
  title: 'Taipy 3.1: Elevating AI & Data Workflows',
  text: 'This latest version underscores our commitment to providing robust, scalable, and intuitive functionalities that cater to the community and the enterprise needs.',
  authorImg: authorImage,
  altAuthorText: 'author img',
  authorName: 'Vincent Gosselin',
  date: '2024-03-05T12:00:00Z',
};

const posts = Array.from({ length: 16 }, (_, index) => (index % 2 === 0 ? fullPostData : postData));

function Blog() {
  return (
    <section className="pt-32">
      <div className="container grid max-w-[1810px] grid-cols-14 gap-x-16 px-10">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 col-start-3 grid gap-y-[58px]">
          <h1 className="sr-only">Taipy Blog</h1>
          <PostsList posts={posts} />
          <Pagination />
          <Subscribe
            tagline="Newsletter"
            title="Stay ahead with our newsletter"
            text="Join Taipy's mailing list and stay informed of the latest news! We send four mails per year plus a few more for very special announcements."
            isLastChild
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;

export async function generateMetadata() {
  return getMetadata({
    title: 'blog title',
    description: 'blog description',
    pathname: '/blog',
  });
}
