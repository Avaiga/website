import { SEO_DATA } from '@/constants/seo';

import Hero from '@/components/shared/book-a-call-header';
import Calendar from '@/components/shared/calendar';
import Subscribe from '@/components/shared/subscribe';

import { getMetadata } from '@/lib/get-metadata';

function Home() {
  return (
    <>
      <Hero
        tagline="Let's have our first contact"
        headerText="Check our availability and book a call with us"
      />
      <Calendar calLink="team/taipy-sales/30-min-call" />
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
