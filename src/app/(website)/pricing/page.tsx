import { StaticImageData } from 'next/image';

import { SEO_DATA } from '@/constants/seo';
import { TESTIMONIALS_ITEMS } from '@/constants/testimonials';
import distributedImage from '@/images/pages/pricing/features/distributed.png';
import scenarioImage from '@/images/pages/pricing/features/scenario.png';
import telemetryImage from '@/images/pages/pricing/features/telemetry.png';

import Benefits from '@/components/pages/pricing/benefits/benefits';
import Compairing from '@/components/pages/pricing/compairing';
import Faq from '@/components/pages/pricing/faq';
import Hero from '@/components/pages/pricing/hero';
import Plans from '@/components/pages/pricing/plans';
import Tools from '@/components/pages/pricing/tools';
import CTA from '@/components/shared/CTA';
import Features from '@/components/shared/features';
import Logos from '@/components/shared/logos';
import Testimonials from '@/components/shared/testimonials';

import { FeaturesItem } from '@/types/pricing-page';

import { getMetadata } from '@/lib/get-metadata';
import { getPageByTitle } from '@/lib/sanity/client';

type TotalFeaturesItem = FeaturesItem & {
  image: StaticImageData;
};

async function Pricing() {
  const pageData = await getPageByTitle('Pricing page');

  if (!pageData) {
    throw new Error('Server error, please reload the page or try later');
  }

  const { content } = pageData;
  const heroData = content.find((item) => item._type === 'hero');
  const toolsData = content.find((item) => item._type === 'tools');
  const plansData = content.find((item) => item._type === 'plans');
  const benefitsData = content.find((item) => item._type === 'benefits');
  const featuresData = content.find((item) => item._type === 'features');
  // TODO: solve ts issue
  // @ts-expect-error field is required in sanity schema

  const compairingTableData = content.find((item) => item._type === 'compairingTable');
  const faqData = content.find((item) => item._type === 'faq');

  let totalFeaturesItems: TotalFeaturesItem[] = [];
  const featureImages = [scenarioImage, distributedImage, telemetryImage];
  if (featuresData && 'items' in featuresData) {
    // @ts-expect-error field is required in sanity schema
    totalFeaturesItems = featuresData.items.map((item, i) => ({
      ...item,
      image: featureImages[i],
    }));
  }

  return (
    <>
      {heroData && heroData._type === 'hero' && <Hero {...heroData} />}
      {toolsData && toolsData._type === 'tools' && <Tools {...toolsData} />}
      <Logos className="mt-[186px]" />
      {plansData && plansData._type === 'plans' && <Plans {...plansData} />}
      {benefitsData && benefitsData._type === 'benefits' && <Benefits {...benefitsData} />}
      {featuresData && featuresData._type === 'features' && (
        <Features
          heading={featuresData.heading}
          subheading={featuresData.description}
          items={totalFeaturesItems}
        />
      )}
      {/* TODO: solve ts issue */}
      {/* @ts-expect-error field is required in sanity schema */}
      {compairingTableData && compairingTableData._type === 'compairingTable' && (
        <Compairing data={compairingTableData} />
      )}
      <Testimonials items={TESTIMONIALS_ITEMS} />
      {faqData && faqData._type === 'faq' && <Faq {...faqData} />}
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
