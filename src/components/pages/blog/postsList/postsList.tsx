import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import authorImage from '@/images/pages/blog/author-img.png';
import postImg from '@/images/pages/blog/cover.png';

interface PostData {
  altText: string;
  hrefPost: string;
  hrefCategory: string;
  cover: StaticImageData;
  tagline: string;
  title: string;
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
  tagline: 'Tagline',
  title: 'Bridging the gap: Taipy sponsors PyData NYC 2023',
  authorImg: authorImage,
  altAuthorText: 'author img',
  authorName: 'Vincent Gosselin',
  date: '2023-12-21T12:00:00Z',
};
const array = new Array(17).fill(postData);

function getFormattedISODate(isoDate: string) {
  return new Date(isoDate)
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    })
    .toUpperCase();
}

const formattedISODate = getFormattedISODate(postData.date);

export default function PostsList() {
  return (
    <ul className="grid grid-cols-3 gap-x-10 gap-y-14">
      {array.map(
        (
          {
            altText,
            hrefPost,
            hrefCategory,
            cover,
            tagline,
            title,
            authorImg,
            altAuthorText,
            authorName,
            date,
          },
          index,
        ) => {
          return (
            <li key={index} className="col-span-1">
              <article className="flex flex-col items-start gap-4">
                <a className="self-stretch" href={hrefPost}>
                  <Image className="rounded-lg" src={cover} alt={altText} loading="lazy" />
                </a>
                <div className="flex flex-col items-start gap-[10px]">
                  <a
                    className="text-13 flex h-6 w-fit items-center justify-center rounded-full border-0 bg-[#55C1F61A] px-2.5 py-1.5 font-medium leading-none tracking-snug text-secondary-blue"
                    href={hrefCategory}
                  >
                    {tagline}
                  </a>
                  <a className="text-white" href="/blog/post/">
                    <h3 className="line-clamp-3 text-18 font-medium leading-[24.75px]">{title}</h3>
                  </a>

                  <div className="flex items-center gap-[10px]">
                    <Image
                      className="h-7 w-7 rounded-full"
                      src={authorImg}
                      alt={altAuthorText}
                      width="28"
                      height="28"
                      loading="lazy"
                    />
                    <div className="flex items-center gap-x-1.5">
                      <span className="text-14 tracking-snug text-grey-94">{authorName}</span>
                      <span className="ml-px h-[3px] w-[3px] rounded-full bg-grey-30" />
                      <time
                        className="text-14 uppercase tracking-snug text-grey-50"
                        dateTime={date}
                      >
                        {formattedISODate}
                      </time>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          );
        },
      )}
    </ul>
  );
}
