'use client';

import clsx from 'clsx';

import CheckListIconInline from '@/svgs/pages/pricing/plans/check-list.inline.svg';

import type { PaymentPeriods } from '../plans';

type PricingVariantProps = {
  type: 'community' | 'enterprise';
  plan: PaymentPeriods;
};

function PricingVariant({ type, plan }: PricingVariantProps) {
  const isEnterprise = type === 'enterprise';
  const isCommunity = type === 'community';
  const isMonthly = plan === 'Monthly';

  const variantState = {
    community: {
      title: 'Taipy Community',
      description: [
        'Taipy Open-source',
        'Unlimited access to Taipy community',
        'Support provided through the community of developers and contributors',
      ],
      price: 'FREE',
    },
    enterprise: {
      title: 'Taipy Enterprise',
      description: [
        'Full-Featured Taipy',
        'License for up to 2 developers with annual user deployment options',
        '24x5 support provided with 2 business hours guaranteed response times',
      ],
      price: isMonthly ? 700 : 560,
    },
  };

  const { title, description, price } = variantState[type];

  return (
    <div
      className={clsx('relative overflow-hidden rounded-lg p-px', {
        'bg-gradient-right-top-orange-hero-border': isEnterprise,
        'bg-gradient-border sm:order-last': isCommunity,
      })}
    >
      <div className="h-full rounded-lg bg-[linear-gradient(191.88deg,#222225_-22.23%,#19191B_34.09%,#111113_106.29%)] p-8 lg:p-[23px] lg:pr-7 sm:p-[22px]">
        {isEnterprise && (
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-right-top-orange-hero" />
        )}

        <div className="mx-auto">
          <p className="text-16 font-medium leading-snug">{title}</p>
          <div className="relative mt-9 flex items-end">
            {isEnterprise && (
              <p className="absolute top-[-18px] text-10 text-grey-70 transition-all ">STARTS AT</p>
            )}

            <h3 className="inline-block bg-gradient-to-r from-[#c7c7d1b7] to-white bg-clip-text text-36 font-semibold leading-dense tracking-tight text-transparent md:text-28">
              {isCommunity ? price : `$${price}`}
            </h3>
            {isEnterprise && <p className="text-16 font-light md:text-14">&nbsp;&nbsp;/month</p>}
          </div>

          <ul className="mt-3.5 flex flex-col gap-y-3.5 md:mt-2.5 md:gap-y-2.5 sm:mt-3.5">
            {description.map((item, index) => (
              <li
                className="flex items-start gap-x-2 text-16 font-light leading-normal text-grey-70 md:text-14"
                key={index}
              >
                <CheckListIconInline
                  className={clsx(
                    'relative left-[1px] top-1.5 h-4 w-4 shrink-0 fill-grey-50 sm:top-0.5',
                    {
                      'fill-primary-red': isEnterprise,
                    },
                  )}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PricingVariant;
