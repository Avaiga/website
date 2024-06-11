import { SEO_DATA } from '@/constants/seo';

import Benefits from '@/components/pages/enterprise/benefits/benefits';
import Features from '@/components/pages/enterprise/features';
import Hero from '@/components/pages/enterprise/hero';
import Tools from '@/components/pages/enterprise/tools';
import CTA from '@/components/shared/CTA';
import Compairing from '@/components/shared/compairing';
import CTAButton from '@/components/shared/cta-button';
import Logos from '@/components/shared/logos';
import Testimonials from '@/components/shared/testimonials';

import { getMetadata } from '@/lib/get-metadata';

const logos = [
  'bird',
  'brain',
  'co',
  'icb',
  'layers',
  'les',
  'microsoft',
  'predictive',
  'princeton',
  'tal-group',
];

const sliderItems = [
  {
    text: 'Integrating Taipy into our suite of products for the Quick Service Restaurant (QSR) market has marked a significant step forward. The ease with which our development team was able to pick up Taipy was remarkable.',
    authorName: 'Jesselynn Mah',
    authorTitle: 'KnowledgeTouch',
  },
  {
    text: 'I’ve got to say, diving into the CFM project with Taipy was a game-changer for us. It’s this Python platform that really sits at the heart of everything we’ve done. The cool part? We got our front-end and back-end up and running incredibly fast, and that’s saying something because we were pretty new to Taipy. It’s kind of amazing. And when you pair Taipy with Databricks, it’s like they’re two pieces of a puzzle that just fit perfectly together. We’re already looking at how we can use them for our next big AI and data projects. They just work so well together!',
    authorName: 'Stephane Leray',
    authorTitle: 'Manager at STIME Datalabs',
  },
];

function Enterprise() {
  return (
    <>
      <Hero />
      <Tools />
      <Logos className="mt-[186px]" logos={logos} />
      <CTAButton />
      <Benefits />
      <Features />
      <Compairing />
      <Testimonials items={sliderItems} />
      <CTA
        className="mb-[184px] mt-[269px] lg:mb-[151px] lg:mt-[184px] md:my-[110px] sm:mb-[84px] sm:mt-[100px]"
        isEnterprise
      />
    </>
  );
}

export default Enterprise;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.ENTERPRISE);
}
