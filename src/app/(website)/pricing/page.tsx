import Compairing from '@/components/pages/pricing/compairing';
import Faq from '@/components/pages/pricing/faq';
import Plans from '@/components/pages/pricing/plans';
import Tools from '@/components/pages/pricing/tools';
import Subscribe from '@/components/shared/subscribe';

import { getMetadata } from '@/lib/get-metadata';

function Pricing() {
  return (
    <>
      <Plans />
      <Tools />
      <Compairing />
      <Faq />
      <Subscribe
        tagline="Newsletter"
        title="Stay ahead with our newsletter"
        text="Join Taipy’s mailing list and stay informed of the latest news! We send four mails per year plus a few more for very special announcements."
        className="mb-[109px] mt-[168px] lg:my-[128px] md:mb-[96px] md:mt-[92px] sm:mb-[72px] sm:mt-[75px]"
      />
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
