import Plans from '@/components/pages/pricing/plans';
import Tools from '@/components/pages/pricing/tools';

import { getMetadata } from '@/lib/get-metadata';

function Pricing() {
  return (
    <>
      <Plans />
      <Tools />
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
