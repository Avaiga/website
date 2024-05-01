import { SEO_DATA } from '@/constants/seo';

import Description from '@/components/pages/mentorship/description';
import Hero from '@/components/pages/mentorship/hero';
import CTA from '@/components/shared/CTA';
import Calendar from '@/components/shared/calendar';

import { getMetadata } from '@/lib/get-metadata';

function Home() {
  return (
    <>
      <Hero />
      <Calendar calLink="team/taipy-sales/15min-call-onboarding" />
      <Description />
      <CTA className="my-[120px] md:my-24 sm:mt-20" />
    </>
  );
}

export default Home;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.MENTORSHIP);
}
