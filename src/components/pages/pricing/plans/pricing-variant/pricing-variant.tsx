'use client';

import clsx from 'clsx';

import CheckListIcon from '../../icon';
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
        'pointer-events-none bg-[conic-gradient(transparent_270deg,rgba(255,70,43,0.4)_320deg,rgba(255,70,43,0.4)_360deg),conic-gradient(rgba(255,70,43,0.4)_35deg,rgba(255,102,26,1)_45deg,rgba(255,70,43,0.6)_55deg,transparent_80deg)]':
          isEnterprise,
        'bg-gradient-border sm:order-last': isCommunity,
      })}
    >
      <div className="h-full rounded-lg bg-[linear-gradient(191.88deg,#222225_-22.23%,#19191B_34.09%,#111113_106.29%)] p-8 lg:p-[23px] lg:pr-7 sm:p-[22px]">
        {isEnterprise && (
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(199.2deg,rgba(255,55,25,0.4)_-35.25%,rgba(120,37,26,0.4)_-15.75%,rgba(81,32,27,0.4)_3.6%,rgba(24,24,27,0.4)_36.09%)]" />
        )}

        <div className="mx-auto">
          <p className="text-16 font-medium leading-snug">{title}</p>
          <div className="relative mt-9 flex items-end">
            {isEnterprise && (
              <p className="absolute top-[-18px] text-10 text-grey-70 transition-all ">STARTS AT</p>
            )}

            <h3 className="text-36 font-semibold leading-dense tracking-tight md:text-28">
              {isCommunity ? price : `$${price}`}
            </h3>
            {isEnterprise && <p className="text-16 font-light md:text-14">&nbsp;&nbsp;/monthly</p>}
          </div>

          <ul className="mt-3.5 flex flex-col gap-y-3.5 md:mt-2.5 md:gap-y-2.5 sm:mt-3.5">
            {description.map((item, index) => (
              <li
                className="flex items-start gap-x-2 text-16 font-light leading-normal text-grey-70 md:text-14"
                key={index}
              >
                <CheckListIcon
                  color={isCommunity ? '#afafb6' : '#ff371a'}
                  width={16}
                  height={16}
                  className={'relative left-[1px] top-1.5 shrink-0 sm:top-0.5'}
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
