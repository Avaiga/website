/* eslint-disable import/prefer-default-export */
import { ROUTE } from '@/constants/routes';
import Rss from 'rss';

import { portableToPlain } from '@/lib/portable-to-plain';
import { getAllPosts } from '@/lib/sanity/client';

const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL;

export async function GET() {
  const allBlogPosts = await getAllPosts();

  const feed = new Rss({
    language: 'en',
    title: `Blog — Taipy`,
    description: 'The latest product updates from Taipy',
    feed_url: `${SITE_URL}/${ROUTE.BLOG}/rss.xml`,
    site_url: SITE_URL!,
  });

  allBlogPosts.forEach((post) => {
    const { category, slug, lead, publishedAt, title, author, contentRaw } = post;
    const url = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}${ROUTE.BLOG}/${slug.current}`;

    feed.item({
      guid: url,
      title,
      description: lead,
      url,
      date: new Date(publishedAt),
      author: author.name,
      categories: category ? [category.title] : ['All posts'],
      custom_elements: [{ 'content:encoded': portableToPlain(contentRaw) }],
    });
  });

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
