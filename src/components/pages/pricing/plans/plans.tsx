'use client';

import { useState } from 'react';

import Toggle from '@/components/shared/toggle';

import PricingVariant from './pricing-variant';

const planVariants: [Components.Pricing.PlanVariant, Components.Pricing.PlanVariant] = [
  { title: 'Monthly' },
  { title: 'Yearly', specialInfo: 'save 20%' },
];

function Plans() {
  const [currentPlan, setCurrentPlan] = useState<Components.Pricing.PaymentPeriods>(
    planVariants[0].title,
  );

  return (
    <section className="plans mb-[168px] pt-[120px]">
      <div className="container flex flex-col items-center justify-center gap-7">
        <h2 className="text-56 font-semibold leading-[65px] tracking-[-2px]">Pricing plans</h2>
        <Toggle<Components.Pricing.PaymentPeriods>
          items={planVariants}
          toggleItem={currentPlan}
          setToggleItem={setCurrentPlan}
          className="mb-3"
        />
        <div className="grid grid-cols-2 grid-rows-1 gap-8">
          <PricingVariant type="community" plan={currentPlan} />
          <PricingVariant type="enterprise" plan={currentPlan} />
        </div>
      </div>
    </section>
  );
}

export default Plans;
