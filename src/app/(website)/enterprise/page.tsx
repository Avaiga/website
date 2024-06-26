import { ROUTES } from '@/constants/routes';
import { SEO_DATA } from '@/constants/seo';
import distributedImage from '@/images/pages/enterprise/features/distributed.png';
import scenarioImage from '@/images/pages/enterprise/features/scenario.png';
import telemetryImage from '@/images/pages/enterprise/features/telemetry.png';

import Benefits from '@/components/pages/enterprise/benefits/benefits';
import Hero from '@/components/pages/enterprise/hero';
import Tools from '@/components/pages/enterprise/tools';
import CTA from '@/components/shared/CTA';
import Compairing from '@/components/shared/compairing';
import CTAButton from '@/components/shared/cta-button';
import Features from '@/components/shared/features';
import Logos from '@/components/shared/logos';
import Testimonials from '@/components/shared/testimonials';

import { getMetadata } from '@/lib/get-metadata';

import knowledgeTouchIcon from '@/svgs/pages/enterprise/knowledge-touch.svg';
import lesMousquetairesIcon from '@/svgs/pages/enterprise/les-mousquetaires.svg';

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
    text: 'Implementing the CFM project with Taipy was a game-changer. We got our front-end and back-end up and running incredibly fast. It’s kind of amazing. And when you pair Taipy with Databricks, it’s like they’re two pieces of a puzzle that just fit perfectly together. We’re already looking at how we can use them for our next big AI and data projects.',
    authorName: 'Stephane Leray',
    authorTitle: 'Group les Mousquetaires',
    logo: lesMousquetairesIcon,
  },
  {
    text: 'Integrating Taipy into our suite of products for the Quick Service Restaurant (QSR) market has marked a significant step forward. The ease with which our development team was able to pick up Taipy was remarkable.',
    authorName: 'Jesselynn Mah',
    authorTitle: 'KnowledgeTouch',
    logo: knowledgeTouchIcon,
  },
];

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

function Enterprise() {
  return (
    <>
      <Hero />
      <Tools />
      <Logos className="mt-[186px]" logos={logos} />
      <CTAButton to={ROUTES.PRICING} buttonText="See pricing" />
      <Benefits />
      <Features
        heading="Taipy Enterprise has so much more to offer"
        subheading="Leverage the main features to level up your data and AI game!"
        items={items}
      />
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
