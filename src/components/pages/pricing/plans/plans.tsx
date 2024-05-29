'use client';

import { useState } from 'react';

import { ROUTES } from '@/constants/routes';

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
    <section className="plans pt-[122px] md:pt-[115px] sm:pt-[92px]">
      <div className="container flex max-w-[896px] flex-col items-center gap-y-7 md:max-w-[704px] md:gap-y-6">
        <Heading text="Taipy License fees starting from" />
        <Toggle<PaymentPeriods>
          items={planVariants}
          toggleItem={currentPlan}
          setToggleItem={setCurrentPlan}
        />
        <div className="mt-[11px] grid grid-cols-2 gap-x-8 lg:mt-2 lg:gap-x-6 sm:grid-cols-1 sm:gap-y-[22px]">
          <PricingVariant type="community" plan={currentPlan} />
          <PricingVariant type="enterprise" plan={currentPlan} />
        </div>
        <Button
          className="plausible-event-name=Click+GetAQuoteBtn+RequestAQuote md:font-14 relative mt-2.5 w-full max-w-[180px] leading-snug lg:mt-1 md:mt-2 md:max-w-[160px]"
          href={ROUTES.REQUEST_A_QUOTE}
          size="lg"
          theme="red-filled"
        >
          Redirect with affilate
        </Button>
      </div>
    </section>
  );
}

export default Plans;
