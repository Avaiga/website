'use client';

import { useState } from 'react';

import Toggle from '@/components/shared/toggle';

import type { ToggleItems } from '@/types/shared';

import PricingVariant from './pricing-variant';

export type PaymentPeriods = 'Monthly' | 'Yearly';

const planVariants: ToggleItems<PaymentPeriods> = [
  { title: 'Monthly' },
  { title: 'Yearly', specialInfo: 'save 20%' },
];

function Plans() {
  const [currentPlan, setCurrentPlan] = useState<PaymentPeriods>(planVariants[0].title);

  return (
    <section className="plans mb-[169px] pt-[120px]">
      <div className="container flex max-w-[933px] flex-col items-center gap-y-7">
        <h1 className="text-56 font-semibold leading-dense tracking-tight">Pricing plans</h1>
        <Toggle<PaymentPeriods>
          className="mt-px"
          items={planVariants}
          toggleItem={currentPlan}
          setToggleItem={setCurrentPlan}
        />
        <div className="mt-[11px] grid grid-cols-2 gap-x-8">
          <PricingVariant type="community" plan={currentPlan} />
          <PricingVariant type="enterprise" plan={currentPlan} />
        </div>
      </div>
    </section>
  );
}

export default Plans;
