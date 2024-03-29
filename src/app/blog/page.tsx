import Subscribe from '@/components/shared/subscribe';

import { getMetadata } from '@/lib/get-metadata';

function Blog() {
  return (
    <Subscribe
      tagline="Newsletter"
      title="Stay ahead with our newsletter"
      text="Join Taipy's mailing list and stay informed of the latest news! We send four mails per year plus a few more for very special announcements."
    />
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
