import Hero from '@/components/pages/home/hero';
import LargeData from '@/components/pages/home/large-data';
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
