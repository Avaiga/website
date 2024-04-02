'use client';

import clsx from 'clsx';

import Button from '@/components/shared/button';

type PricingVariantProps = {
  type: 'community' | 'enterprise';
  plan: Components.Pricing.PaymentPeriods;
};

function PricingVariant({ type, plan }: PricingVariantProps) {
  const isEnterprise = type === 'enterprise';
  const isMonthly = plan === 'Monthly';

  const variantState = {
    community: {
      title: 'Taipy Community',
      description: [
        'Taipy Open-source',
        'Unlimited access to Taipy community',
        'Support provided through the community of developers and contributors',
      ],
      price: 0,
    },
    enterprise: {
      title: 'Taipy Enterprise',
      description: [
        'Full-Featured Taipy',
        'License for up to 2 developers with annual user deployment options',
        '24x5 support provided with 2 business hours guaranteed response times',
      ],
      price: isMonthly ? 560 : 700,
    },
  };

  const { title, description, price } = variantState[type];

  return (
    <div
      className={clsx('relative overflow-hidden rounded-lg p-[1px]', {
        'before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[conic-gradient(transparent_270deg,rgba(255,70,43,0.4)_320deg,rgba(255,70,43,0.4)_360deg),conic-gradient(rgba(255,70,43,0.4)_35deg,rgba(255,102,26,1)_45deg,rgba(255,70,43,0.6)_55deg,transparent_80deg)]':
          isEnterprise,
      })}
    >
      <div className="relative h-full rounded-lg bg-black">
        <div className="h-full rounded-lg bg-gradient-border p-8">
          {isEnterprise && (
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-[linear-gradient(199.2deg,rgba(255,55,25,0.4)_-35.25%,rgba(120,37,26,0.4)_-15.75%,rgba(81,32,27,0.4)_3.6%,rgba(24,24,27,0.4)_36.09%)]" />
          )}
          <div className="relative z-20 ml-auto mr-auto max-w-[352px]">
            <p className="mb-[35px] text-16 font-medium">{title}</p>
            <div className="relative mb-5 flex items-end">
              {isEnterprise && (
                <p className="absolute top-[-18px] text-[10px] font-normal text-grey-70 transition-all">
                  STARTS AT
                </p>
              )}
              <h3 className="text-36 font-semibold leading-9 tracking-tighter">${price}</h3>
              <p className="text-16 font-light">&nbsp;&nbsp;/{plan.toLowerCase()}</p>
            </div>
            {isEnterprise ? (
              <Button className="mb-[24px] w-full" size="lg" theme="red-filled">
                Get a quote
              </Button>
            ) : (
              <Button className="mb-[24px] w-full" size="lg" theme="outline">
                Start fo free
              </Button>
            )}
            <div className="flex flex-col gap-y-[10px]">
              {(description as string[]).map((item, index) => (
                <div key={index} className="flex items-start gap-x-2">
                  <div
                    className={clsx(
                      'mx-[7px] my-[12px] h-[6px] w-[6px] shrink-0 rounded-full bg-grey-30',
                      {
                        'bg-primary-red': isEnterprise,
                      },
                    )}
                  />
                  <p className="text-16 font-light leading-[24px] text-grey-70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingVariant;
