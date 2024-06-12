import { SEO_DATA } from '@/constants/seo';
import distributedImage from '@/images/pages/enterprise/features/distributed.png';
import scenarioImage from '@/images/pages/enterprise/features/scenario.png';
import telemetryImage from '@/images/pages/enterprise/features/telemetry.png';

import Benefits from '@/components/pages/enterprise/benefits/benefits';
import Designer from '@/components/pages/enterprise/designer';
import Hero from '@/components/pages/enterprise/hero';
import Testimonial from '@/components/pages/enterprise/testimonial';
import CTA from '@/components/shared/CTA/CTA';
import Features from '@/components/shared/features';
import Logos from '@/components/shared/logos/logos';

import { getMetadata } from '@/lib/get-metadata';

const items = [
  {
    title: 'Scenario management',
    text: 'Native scenario management enables end-users to conduct detailed what-if analyses, tracking executions and data sources for visualization, comparison, and KPI tracking. This enhances user experience, monitors activity, fosters collaboration between data Scientists and end-users, and boosts user acceptance.',
    image: scenarioImage,
  },
  {
    title: 'Distributed computing',
    text: 'Unlock unparalleled scalability and performance across multiple machines. Ideal for handling large datasets and complex computations efficiently.',
    image: distributedImage,
  },
  {
    title: 'Telemetry',
    text: 'Ensure your applications are not just running but thriving. Gain critical insights into performance & health, enabling proactive optimizations & maintenance.',
    image: telemetryImage,
  },
];

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
      <Features
        heading="Taipy has so much more to offer"
        subheading="Leverage a huge variety of features to level up your data and AI game!"
        items={items}
      />
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
