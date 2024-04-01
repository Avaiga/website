import type { StaticImageData } from 'next/image';

import activeCoverImg from '@/images/pages/blog/activeCoverImg.png';
import authorImage from '@/images/pages/blog/author-img.png';
import postImg from '@/images/pages/blog/cover.png';

import PostItem from '../postItem/postItem';

interface PostData {
  altText: string;
  hrefPost: string;
  hrefCategory: string;
  cover: StaticImageData;
  activeCover: StaticImageData;
  tagline: string;
  title: string;
  text: string;
  authorImg: StaticImageData;
  altAuthorText: string;
  authorName: string;
  date: string;
}

// моковые данные для пп верстки
const postData: PostData = {
  altText: 'alt img',
  hrefPost: '/blog/post/',
  hrefCategory: '/blog/category/',
  cover: postImg,
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
  hrefPost: '/blog/post/',
  hrefCategory: '/blog/category/',
  cover: postImg,
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

export default function PostsList() {
  return (
    <ul className="grid grid-cols-3 gap-x-[31px] gap-y-14">
      {posts.map((post, index) => (
        <PostItem key={index} post={post} isFull={index === 0} />
      ))}
    </ul>
  );
}
