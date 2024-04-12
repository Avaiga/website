import { SEO_DATA } from '@/constants/seo';

import Calendar from '@/components/pages/book-a-call/calendar';
import Description from '@/components/pages/book-a-call/description';
import Hero from '@/components/pages/book-a-call/hero';
import CTA from '@/components/shared/CTA';

import { getMetadata } from '@/lib/get-metadata';

function Home() {
  return (
    <>
      <Hero />
      <Calendar />
      <Description />
      <CTA />
    </>
  );
}

export default Home;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.BOOK_A_CALL);
}
