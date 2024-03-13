import Hero from '@/components/pages/home/hero';

import { getMetadata } from '@/lib/get-metadata';

function Home() {
  return <Hero />;
}

export default Home;

export async function generateMetadata() {
  return getMetadata({
    title: 'Taipy',
    description: 'Build Python data & AI web applications',
    pathname: '/',
  });
}
