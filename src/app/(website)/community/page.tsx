import { SEO_DATA } from '@/constants/seo';

import Benefits from '@/components/pages/community/benefits';
import Contributors from '@/components/pages/community/contributors';
import Hero from '@/components/pages/community/hero';
import Involve from '@/components/pages/community/involve';
import LatestPosts from '@/components/pages/community/latest-posts';
import Support from '@/components/pages/community/support';
import CTA from '@/components/shared/CTA';
import Subscribe from '@/components/shared/subscribe';

import { getMetadata } from '@/lib/get-metadata';

function Community() {
  return (
    <>
      <Hero />
      <Involve />
      <Support />
      <Subscribe
        tagline="Integrations"
        title="Subscribe to the Newsletter"
        text="Subscribe to Taipys newsletter and stay informed of the latest news! We send four mails per year plus a few more for very special announcements."
        className="mt-[186px] lg:mt-[142px] md:mt-[92px] sm:mt-[88px]"
      />
      <Contributors />
      <CTA className="mt-[172px] lg:mt-[126px] md:mt-[122px] sm:mt-[86px]" />
      <Benefits />
      <LatestPosts />
    </>
  );
}

export default Community;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.COMMUNITY);
}
