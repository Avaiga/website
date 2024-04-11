import Hero from '@/components/pages/enterprise/hero';

import { getMetadata } from '@/lib/get-metadata';

export default function Enterprise() {
  return (
    <>
      <Hero />
    </>
  );
}

export async function generateMetadata() {
  return getMetadata({
    title: 'Enterprise',
    description: 'Build Python data & AI web applications',
    pathname: '/enterprise',
  });
}
