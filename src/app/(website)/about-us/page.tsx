import Contribute from '@/components/pages/about-us/contribute';
import Hero from '@/components/pages/about-us/hero/hero';
import OurHistory from '@/components/pages/about-us/our-history';
import OurPartners from '@/components/pages/about-us/our-partners';
import OurTeam from '@/components/pages/about-us/our-team';
import Subscribe from '@/components/shared/subscribe';

import { getMetadata } from '@/lib/get-metadata';

function AboutUs() {
  return (
    <>
      <Hero />
      <OurHistory />
      <OurTeam />
      <OurPartners />
      <Contribute />
      <Subscribe
        tagline="Newsletter"
        title="Subscribe to the Newsletter"
        text="Subscribe to Taipy's newsletter and stay informed of the latest news! We send four mails per year plus a few more for very special announcements."
        isLastChild={true}
      />
    </>
  );
}

export default AboutUs;

export async function generateMetadata() {
  return getMetadata({
    title: 'Taipy',
    description: 'About Us',
    pathname: '/about-us',
  });
}
