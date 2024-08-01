import { SEO_DATA } from '@/constants/seo';
import { TESTIMONIALS_ITEMS } from '@/constants/testimonials';
import distributedImage from '@/images/pages/pricing/features/distributed.png';
import scenarioImage from '@/images/pages/pricing/features/scenario.png';
import telemetryImage from '@/images/pages/pricing/features/telemetry.png';

import Benefits from '@/components/pages/pricing/benefits/benefits';
import Faq from '@/components/pages/pricing/faq';
import Hero from '@/components/pages/pricing/hero';
import Plans from '@/components/pages/pricing/plans';
import Tools from '@/components/pages/pricing/tools';
import CTA from '@/components/shared/CTA';
import Compairing from '@/components/shared/compairing';
import Features from '@/components/shared/features';
import Logos from '@/components/shared/logos';
import Testimonials from '@/components/shared/testimonials';

import { getMetadata } from '@/lib/get-metadata';

const items = [
  {
    title: 'Scenario management',
    text: 'Native scenario management allows end-users to perform detailed what-if analyses and track executions and data sources. This supports visualization, comparison, and KPI tracking. It enhances user experience, monitors activity, and promotes collaboration between data scientists and end-users, boosting user acceptance.',
    image: scenarioImage,
  },
  {
    title: 'Distributed computing',
    text: 'Unlock unparalleled scalability and performance with distributed computing. Ideal for handling multiple and complex computations efficiently.',
    image: distributedImage,
  },
  {
    title: 'Telemetry',
    text: 'Ensure your applications are not just running but thriving. Gain critical insights into performance & health, enabling proactive optimizations & maintenance.',
    image: telemetryImage,
  },
];

function Pricing() {
  return (
    <>
      <Hero />
      <Tools />
      <Logos className="mt-[186px]" />
      <Plans />
      <Benefits />
      <Features
        heading="Taipy has so much more to offer"
        subheading="Leverage a huge variety of features to level up your data and AI game!"
        items={items}
      />
      <Compairing offsets="mt-[184px] lg:mt-[126px] md:mt-24 sm:mt-20" />
      <Testimonials className="mt-[182px]" items={TESTIMONIALS_ITEMS} />
      <Faq />
      <CTA
        className="mb-[184px] mt-[184px] lg:mb-[151px] md:my-[110px] sm:mb-[84px] sm:mt-[100px]"
        isEnterprise
      />
    </>
  );
}

export default Pricing;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.PRICING);
}
