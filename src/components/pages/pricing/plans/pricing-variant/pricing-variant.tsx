import { ROUTES } from '@/constants/routes';
import clsx from 'clsx';

import Button from '@/components/shared/button';

import CheckListIconInline from '@/svgs/pages/pricing/plans/check-list.inline.svg';

type PricingVariantProps = {
  type: 'community' | 'business' | 'enterprise';
};

function PricingVariant({ type }: PricingVariantProps) {
  const isEnterprise = type === 'enterprise';
  const isBusiness = type === 'business';
  const isCommunity = type === 'community';

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
    business: {
      title: 'Taipy Business',
      description: [
        'Unlimited Scenarios',
        'User management',
        'Performance & Scalability',
        'Taipy Designer',
        'License for 1 developer',
        '1 end user',
        '24x5 support provided with 2 business hours guaranteed response times',
      ],
      price: `360`,
    },
    enterprise: {
      title: 'Taipy Enterprise',
      description: [
        'Unlimited Scenarios',
        'User management',
        'Performance & Scalability',
        'Taipy Designer',
        'License for multiple developers',
        'Multiple end users',
        '24x5 support provided with 2 business hours guaranteed response times',
      ],
      price: `Contact us`,
    },
  };

  const { title, description, price } = variantState[type];

  return (
    <div
      className={clsx('relative overflow-hidden rounded-lg p-px', {
        'bg-gradient-right-top-blue-border': isEnterprise,
        'bg-gradient-right-top-orange-hero-border': isBusiness,
        'bg-gradient-border md:order-last': isCommunity,
      })}
    >
      <div className="h-full rounded-lg bg-[linear-gradient(191.88deg,#222225_-22.23%,#19191B_34.09%,#111113_106.29%)] p-8 lg:p-[23px] md:pr-12 sm:p-6">
        {(isEnterprise || isBusiness) && (
          <div
            className={clsx('pointer-events-none absolute inset-0 h-full w-full', {
              'bg-gradient-right-top-blue': isEnterprise,
              'bg-gradient-right-top-orange-hero': isBusiness,
            })}
          />
        )}

        <div className="mx-auto">
          <p className="text-16 font-medium leading-snug">{title}</p>
          <div className="relative mt-9 flex items-end lg:mt-[34px]">
            {isBusiness && (
              <p className="absolute -top-5 text-10 text-grey-70 transition-all">PRICED AT</p>
            )}

            <h3 className="inline-block bg-gradient-to-r from-[#c7c7d1b7] to-white bg-clip-text text-36 font-semibold leading-dense tracking-tight text-transparent md:text-28">
              {isBusiness ? `$${price}` : price}
            </h3>
            {isBusiness && (
              <p className="relative bottom-0.5 text-16 font-light md:bottom-0 md:left-1.5 md:text-14">
                /{'month, billed annualy'}
              </p>
            )}
          </div>

          <ul className="mt-3.5 flex flex-col gap-y-3.5 md:mt-[15px] md:gap-y-2.5 sm:mt-3.5">
            {description.map((item, index) => (
              <li
                className="flex items-start gap-x-2 text-16 font-light leading-normal text-grey-70 md:text-14"
                key={index}
              >
                <CheckListIconInline
                  className={clsx(
                    'relative left-0 top-1 h-4 w-4 shrink-0 fill-grey-50 sm:top-0.5',
                    {
                      'fill-primary-red': isBusiness,
                      'fill-secondary-blue-65': isEnterprise,
                    },
                  )}
                />
                {item}
              </li>
            ))}
          </ul>
          {(isEnterprise || isBusiness) && (
            <Button
              className="relative mt-[26px] w-full max-w-[180px] leading-snug lg:mt-[22px] md:h-12 md:text-16 sm:h-11 sm:max-w-[160px] sm:text-14"
              size="lg"
              theme={isBusiness ? 'red-filled' : 'white-filled'}
              href={ROUTES.REQUEST_A_QUOTE}
            >
              Get a quote
              {isBusiness && (
                <span className="absolute top-[-33px] h-32 w-full max-w-9 rotate-90 bg-hero-btn-enterprise blur-[24px]" />
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PricingVariant;
