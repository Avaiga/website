import { StaticImageData } from 'next/image';

import { SEO_DATA } from '@/constants/seo';
import { TESTIMONIALS_ITEMS } from '@/constants/testimonials';
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
import { getPageByTitle } from '@/lib/sanity/client';

type TotalFeaturesItem = FeaturesItem & {
  image: StaticImageData;
};

type ContentItem =
  | HeroProps
  | ToolsProps
  | PlansProps
  | BenefitsProps
  | FeaturesProps
  | CompairingTableProps
  | FaqProps
  | CtaProps;

function isHeroProps(item: ContentItem): item is HeroProps {
  return item._type === 'hero';
}

function isToolsProps(item: ContentItem): item is ToolsProps {
  return item._type === 'tools';
}

function isPlansProps(item: ContentItem): item is PlansProps {
  return item._type === 'plans';
}

function isBenefitsProps(item: ContentItem): item is BenefitsProps {
  return item._type === 'benefits';
}

function isFeaturesProps(item: ContentItem): item is FeaturesProps {
  return item._type === 'features';
}

function isCompairingTableProps(item: ContentItem): item is CompairingTableProps {
  return item._type === 'compairingTable';
}

function isFaqProps(item: ContentItem): item is FaqProps {
  return item._type === 'faq';
}

function isCtaProps(item: ContentItem): item is CtaProps {
  return item._type === 'cta';
}

async function Pricing() {
  const pageData = await getPageByTitle('Pricing page');

  if (!pageData) {
    throw new Error('Server error, please reload the page or try later');
  }

  const { content } = pageData;
  const heroData = content.find(isHeroProps);
  const toolsData = content.find(isToolsProps);
  const plansData = content.find(isPlansProps);
  const benefitsData = content.find(isBenefitsProps);
  const featuresData = content.find(isFeaturesProps);
  const compairingTableData = content.find(isCompairingTableProps);
  const faqData = content.find(isFaqProps);
  const ctaData = content.find(isCtaProps);

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
      {toolsData && <Tools {...toolsData} />}
      <Logos className="mt-[186px]" />
      {plansData && <Plans {...plansData} />}
      {benefitsData && <Benefits {...benefitsData} />}
      {featuresData && (
        <Features
          heading={featuresData.heading}
          subheading={featuresData.description}
          items={totalFeaturesItems}
        />
      )}

      {compairingTableData && <Compairing data={compairingTableData} />}
      <Testimonials items={TESTIMONIALS_ITEMS} />
      {faqData && <Faq {...faqData} />}
      {ctaData && <CTA {...ctaData} />}
    </>
  );
}

export default Pricing;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.PRICING);
}
