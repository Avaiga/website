import Heading from '@/components/pages/pricing/heading';

import { PlansProps } from '@/types/pricing-page';

import PricingVariant from './pricing-variant';

function Plans({ heading, card1, card2, card3 }: PlansProps) {
  return (
    <section className="plans pt-[222px] lg:pt-[129px] md:pt-[122px] sm:pt-[104px]">
      <div className="container flex max-w-7xl flex-col items-center gap-y-11 lg:gap-y-9 md:gap-y-8 sm:gap-y-7">
        <Heading text={heading} />
        <div className="grid grid-cols-3 gap-x-8 lg:gap-x-6 md:grid-cols-1 md:gap-y-6 sm:gap-y-5">
          <PricingVariant type="community" cardData={card1} />
          <PricingVariant type="business" cardData={card2} />
          <PricingVariant type="enterprise" cardData={card3} />
        </div>
      </div>
    </section>
  );
}

export default Plans;
