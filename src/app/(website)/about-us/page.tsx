import Hero from '@/components/pages/about-us/hero/hero';

import { getMetadata } from '@/lib/get-metadata';

function AboutUs() {
  return (
    <>
      <Hero />
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
