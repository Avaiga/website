import Hero from '@/components/pages/about-us/hero/hero';
import OurHistory from '@/components/pages/about-us/our-history';
import OurTeam from '@/components/pages/about-us/our-team';

import { getMetadata } from '@/lib/get-metadata';

function AboutUs() {
  return (
    <>
      <Hero />
      <OurHistory />
      <OurTeam />
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
