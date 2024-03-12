import { getMetadata } from '@/lib/get-metadata';

function Home() {
  return <section className="flex gap-4 py-32 px-safe">TAIPY</section>;
}

export default Home;

export async function generateMetadata() {
  return getMetadata({
    title: 'Taipy',
    description: 'Build Python data & AI web applications',
    pathname: '/',
  });
}
