import Hero from '@/components/pages/about-us/hero/hero';
import OurHistory from '@/components/pages/about-us/our-history';
import OurPartners from '@/components/pages/about-us/our-partners';
import OurTeam from '@/components/pages/about-us/our-team';

import { getMetadata } from '@/lib/get-metadata';

function AboutUs() {
  return (
    <>
      <Hero />
      <OurHistory />
      <OurTeam />
      <OurPartners />
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
