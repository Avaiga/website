import CTA from '@/components/pages/home/CTA';
import Applications from '@/components/pages/home/applications';
import Benefits from '@/components/pages/home/benefits';
import Hero from '@/components/pages/home/hero';
import Integrations from '@/components/pages/home/integrations';
import LargeData from '@/components/pages/home/large-data';
import Learn from '@/components/pages/home/learn';
import Optimize from '@/components/pages/home/optimize';
import Subscribe from '@/components/pages/home/subscribe';

import { getMetadata } from '@/lib/get-metadata';

function Home() {
  return (
    <>
      <Hero />
      <Optimize />
      <LargeData />
      <Subscribe />
      <Learn />
      <Integrations />
      <Benefits />
      <Applications />
      <CTA />
    </>
  );
}

export default Home;

export async function generateMetadata() {
  return getMetadata({
    title: 'Taipy',
    description: 'Build Python data & AI web applications',
    pathname: '/',
  });
}
