/* eslint-disable import/prefer-default-export */
import { ROUTES } from '@/constants/routes';
import Rss from 'rss';

import { portableToPlain } from '@/lib/portable-to-plain';
import { getAllCustomerStories } from '@/lib/sanity/client';

const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL;

export async function GET() {
  const allBlogPosts = await getAllCustomerStories();

  const feed = new Rss({
    language: 'en',
    title: `Customer Stories — Taipy`,
    description: 'See how Taipy help companies working efficiently with large data',
    feed_url: `${SITE_URL}/${ROUTES.CUSTOMER_STORIES}/rss.xml`,
    site_url: SITE_URL!,
  });

  allBlogPosts.forEach((post) => {
    const { slug, lead, publishedAt, title, author, contentRaw } = post;
    const url = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}${ROUTES.CUSTOMER_STORIES}/${slug.current}`;

    feed.item({
      guid: url,
      title,
      description: lead,
      url,
      date: new Date(publishedAt),
      author: author.name,
      categories: ['Customer Stories'],
      custom_elements: [{ 'content:encoded': portableToPlain(contentRaw) }],
    });
  });

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
