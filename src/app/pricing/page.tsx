import Plans from '@/components/pages/pricing/plans';

import { getMetadata } from '@/lib/get-metadata';

function Pricing() {
  return (
    <>
      <Plans />
    </>
  );
}

export default Pricing;

export async function generateMetadata() {
  return getMetadata({
    title: 'Taipy',
    description: 'Pricing plans',
    pathname: '/pricing',
  });
}
