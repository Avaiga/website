'use client';

import { useState } from 'react';

import Heading from '@/components/pages/pricing/heading/heading';
import Button from '@/components/shared/button';
import Toggle from '@/components/shared/toggle';

import type { ToggleItems } from '@/types/shared';

import PricingVariant from './pricing-variant';

export type PaymentPeriods = 'Monthly' | 'Yearly';

const planVariants: ToggleItems<PaymentPeriods> = [{ title: 'Yearly' }, { title: 'Monthly' }];

function Plans() {
  const [currentPlan, setCurrentPlan] = useState<PaymentPeriods>(planVariants[0].title);

  return (
    <section className="plans pt-[122px]">
      <div className="container flex max-w-[896px] flex-col items-center gap-y-7">
        <Heading text="Taipy License fees starting from" />
        <Toggle<PaymentPeriods>
          className="-mr-3.5 "
          items={planVariants}
          toggleItem={currentPlan}
          setToggleItem={setCurrentPlan}
        />
        <div className="mt-[11px] grid grid-cols-2 gap-x-8">
          <h2 className="sr-only">Taipy pricing variants</h2>
          <PricingVariant type="community" plan={currentPlan} />
          <PricingVariant type="enterprise" plan={currentPlan} />
        </div>
        <Button className="relative mt-2.5 w-full max-w-[180px]" size="lg" theme="red-filled">
          Get a quote
        </Button>
      </div>
    </section>
  );
}

export default Plans;
