import { StaticImageData } from 'next/image';

import { SEO_DATA } from '@/constants/seo';
import distributedImage from '@/images/pages/pricing/features/distributed.png';
import scenarioImage from '@/images/pages/pricing/features/scenario.png';
import telemetryImage from '@/images/pages/pricing/features/telemetry.png';

import CTA from '@/components/pages/pricing/CTA';
import Benefits from '@/components/pages/pricing/benefits/benefits';
import Compairing from '@/components/pages/pricing/compairing';
import Faq from '@/components/pages/pricing/faq';
import Hero from '@/components/pages/pricing/hero';
import Plans from '@/components/pages/pricing/plans';
import Tools from '@/components/pages/pricing/tools';
import Features from '@/components/shared/features';
import Logos from '@/components/shared/logos';
import Testimonials from '@/components/shared/testimonials';

import {
  BenefitsProps,
  CompairingTableProps,
  CtaProps,
  FaqProps,
  FeaturesProps,
  HeroProps,
  PlansProps,
  ToolsProps,
} from '@/types/pricing-page';
import { FeaturesItem } from '@/types/pricing-page';

import { getMetadata } from '@/lib/get-metadata';
import { getPricingPageData, getTestimonialsData } from '@/lib/sanity/client';

type TotalFeaturesItem = FeaturesItem & {
  image: StaticImageData;
};

async function Pricing() {
  const pageData = await getPricingPageData();
  const testimonialsData = await getTestimonialsData();

  if (!pageData) {
    throw new Error('Server error, please reload the page or try later');
  }

  const heroData = pageData.hero as HeroProps;
  const toolsData = pageData.tools as ToolsProps;
  const plansData = pageData.plans as PlansProps;
  const benefitsData = pageData.benefits as BenefitsProps;
  const featuresData = pageData.features as FeaturesProps;
  const compairingTableData = pageData.compairingTable as CompairingTableProps;
  const faqData = pageData.faq as FaqProps;
  const ctaData = pageData.cta as CtaProps;

  let totalFeaturesItems: TotalFeaturesItem[] = [];
  const featureImages = [scenarioImage, distributedImage, telemetryImage];
  if (featuresData && 'items' in featuresData) {
    totalFeaturesItems = featuresData.items.map((item, i) => ({
      ...item,
      image: featureImages[i],
    }));
  }

  return (
    <>
      {heroData && <Hero {...heroData} />}
      {plansData && <Plans {...plansData} />}
      {compairingTableData && <Compairing data={compairingTableData} />}
      {toolsData && <Tools {...toolsData} />}
      <Logos className="mt-[186px]" />
      {benefitsData && <Benefits {...benefitsData} />}
      {featuresData && (
        <Features
          heading={featuresData.heading}
          subheading={featuresData.description}
          items={totalFeaturesItems}
        />
      )}
      {testimonialsData && (
        <Testimonials
          className="mt-[182px]"
          heading={testimonialsData.title}
          items={testimonialsData.items}
        />
      )}
      {faqData && <Faq {...faqData} />}
      {ctaData && <CTA {...ctaData} />}
    </>
  );
}

export default Pricing;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.PRICING);
}
