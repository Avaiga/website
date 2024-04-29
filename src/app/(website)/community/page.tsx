import { SEO_DATA } from '@/constants/seo';

import Benefits from '@/components/pages/community/benefits';
import Contributors from '@/components/pages/community/contributors';
import Features from '@/components/pages/community/features';
import Hero from '@/components/pages/community/hero';
import Involve from '@/components/pages/community/involve';
import LatestPosts from '@/components/pages/community/latest-posts';
import Training from '@/components/pages/community/training';
import CTA from '@/components/shared/CTA';
import Subscribe from '@/components/shared/subscribe';

import { getMetadata } from '@/lib/get-metadata';

function Community() {
  return (
    <>
      <Hero />
      <Involve />
      <Features />
      <Training />
      <Subscribe
        tagline="Integrations"
        title="Subscribe to the Newsletter"
        text="Subscribe to Taipys newsletter and stay informed of the latest news! We send four mails per year plus a few more for very special announcements."
        className="mt-[186px] lg:mt-[142px] md:mt-[92px] sm:mt-[88px]"
      />
      <Contributors />
      <CTA className="mt-[184px] lg:mt-[146px] md:mt-[106px] sm:mt-[96px]" />
      <Benefits />
      <LatestPosts />
    </>
  );
}

export default Community;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.COMMUNITY);
}
