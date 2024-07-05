import { SEO_DATA } from '@/constants/seo';

import Applications from '@/components/pages/home/applications';
import Benefits from '@/components/pages/home/benefits';
import Hero from '@/components/pages/home/hero';
import Integrations from '@/components/pages/home/integrations';
import LargeData from '@/components/pages/home/large-data';
import Learn from '@/components/pages/home/learn';
import Optimize from '@/components/pages/home/optimize';
import CTA from '@/components/shared/CTA';
import RelatedPosts from '@/components/shared/related-posts';
import Subscribe from '@/components/shared/subscribe';

import { getMetadata } from '@/lib/get-metadata';
import { getPages } from '@/lib/sanity/client';

async function Home() {
  const relatedPosts = await getPages();

  return (
    <>
      <Hero />
      <Optimize />
      <LargeData />
      <Subscribe
        className="mt-[196px] lg:mt-[124px] md:mt-[92px]"
        tagline="Stay tuned"
        title="Subscribe to the Newsletter"
        text="Subscribe to Taipy's newsletter and stay informed of the latest news! We send four mails per year plus a few more for very special announcements."
      />
      <Learn />
      <Integrations />
      <Benefits />
      <Applications />
      <RelatedPosts relatedPosts={relatedPosts} />
      <CTA />
    </>
  );
}

export default Home;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.INDEX);
}

export const revalidate = 60;
