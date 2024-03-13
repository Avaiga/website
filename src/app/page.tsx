import Hero from '@/components/pages/home/hero';
import Optimize from '@/components/pages/home/optimize';

import { getMetadata } from '@/lib/get-metadata';

function Home() {
  return (
    <>
      <Hero />
      <Optimize />
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
