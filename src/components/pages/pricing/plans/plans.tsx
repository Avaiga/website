'use client';

import Heading from '@/components/pages/pricing/heading';

import PricingVariant from './pricing-variant';

function Plans() {
  return (
    <section className="plans pt-[145px] lg:pt-[129px] md:pt-[122px] sm:pt-[104px]">
      <div className="container flex max-w-[1280px] flex-col items-center gap-y-11 lg:gap-y-9 md:gap-y-8 sm:gap-y-7">
        <Heading text="Taipy License fees starting from" />
        <div className="grid grid-cols-3 gap-x-8 lg:gap-x-6 md:grid-cols-1 md:gap-y-6 sm:gap-y-5">
          <PricingVariant type="community" />
          <PricingVariant type="business" />
          <PricingVariant type="enterprise" />
        </div>
      </div>
    </section>
  );
}

export default Plans;
