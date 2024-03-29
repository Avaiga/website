import Sidebar from '@/components/pages/blog/sidebar';
import InnerPageLayout from '@/components/shared/innerPageLayout';
import Subscribe from '@/components/shared/subscribe';

import { getMetadata } from '@/lib/get-metadata';

function Blog() {
  return (
    <>
      <InnerPageLayout sidebar={<Sidebar />}>
        <h1 className="sr-only">Taipy Blog</h1>
        <div className="posts-list-skeleton h-[2456px] rounded-lg bg-grey-70" />
      </InnerPageLayout>
      <Subscribe
        tagline="Newsletter"
        title="Stay ahead with our newsletter"
        text="Join Taipy's mailing list and stay informed of the latest news! We send four mails per year plus a few more for very special announcements."
        isLastChild
      />
    </>
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
