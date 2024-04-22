import { SEO_DATA } from '@/constants/seo';

import Benefits from '@/components/pages/enterprise/benefits/benefits';
import Designer from '@/components/pages/enterprise/designer';
import Features from '@/components/pages/enterprise/features';
import Hero from '@/components/pages/enterprise/hero';
import Logos from '@/components/pages/enterprise/logos/logos';
import Testimonial from '@/components/pages/enterprise/testimonial';
import CTA from '@/components/shared/CTA/CTA';

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

function Enterprise() {
  return (
    <>
      <Hero />
      <Logos logos={logos} />
      <Benefits />
      <Designer />
      <Features />
      <Testimonial
        quote='"Integrating Taipy into our suite of products for the Quick Service Restaurant (QSR) market has marked a significant step forward. The ease with which our development team was able to pick up Taipy was remarkable."'
        name="Jesselynn Mah"
        position="KnowledgeTouch"
      />
      <CTA
        className="mb-[184px] mt-[208px] lg:mb-[151px] lg:mt-[184px] md:my-[110px] sm:mb-[84px] sm:mt-[79px]"
        isEnterprise
      />
    </>
  );
}

export default Enterprise;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.ENTERPRISE);
}