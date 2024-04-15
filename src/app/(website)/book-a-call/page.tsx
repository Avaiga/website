import { SEO_DATA } from '@/constants/seo';

import Hero from '@/components/pages/book-a-call/hero';
import Calendar from '@/components/shared/calendar';
import Subscribe from '@/components/shared/subscribe';

import { getMetadata } from '@/lib/get-metadata';

function Home() {
  return (
    <>
      <Hero />
      <Calendar calLink="team/taipy-sales/30-min-header-sales-request" />
      <Subscribe
        className="my-[120px] md:my-24 sm:mt-20"
        tagline="Integrations"
        title="Subscribe to the Newsletter"
        text="Subscribe to Taipy's newsletter and stay informed of the latest news! We send four mails per year plus a few more for very special announcements."
      />
    </>
  );
}

export default Home;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.BOOK_A_CALL);
}
