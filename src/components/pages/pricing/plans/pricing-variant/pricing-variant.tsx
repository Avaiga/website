import clsx from 'clsx';

import Button from '@/components/shared/button';

import CheckListIconInline from '@/svgs/pages/pricing/plans/check-list.inline.svg';

type PricingVariantProps = {
  type: 'community' | 'business' | 'enterprise';
  cardData: CardDaraProps;
};

type CardDaraProps = {
  title: string;
  features: string[];
  pricingLabel?: string;
  price: string;
  paymentPeriod?: string;
  buttonText?: string;
  buttonLink?: string;
};

function PricingVariant({ type, cardData }: PricingVariantProps) {
  const isCommunity = type === 'community';
  const isEnterprise = type === 'enterprise';
  const isBusiness = type === 'business';

  const { title, features, pricingLabel, price, paymentPeriod, buttonText, buttonLink } = cardData;

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
            {pricingLabel && (
              <p className="absolute -top-5 text-10 text-grey-70 transition-all">{pricingLabel}</p>
            )}

            <h3 className="inline-block bg-gradient-to-r from-[#c7c7d1b7] to-white bg-clip-text text-36 font-semibold leading-dense tracking-tight text-transparent md:text-28">
              {price}
            </h3>
            {paymentPeriod && (
              <p className="relative bottom-0.5 left-1.5 text-16 font-light md:bottom-0 md:text-14">
                {paymentPeriod}
              </p>
            )}
          </div>

          <ul className="mt-3.5 flex flex-col gap-y-3.5 md:mt-[15px] md:gap-y-2.5 sm:mt-3.5">
            {features.map((item, index) => (
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
          {(isEnterprise || isBusiness) && buttonText && (
            <Button
              className="relative z-10 mt-[26px] w-full max-w-[180px] leading-snug lg:mt-[22px] md:h-12 md:text-16 sm:h-11 sm:max-w-[160px] sm:text-14"
              size="lg"
              theme={isBusiness ? 'red-filled' : 'white-filled'}
              href={buttonLink}
            >
              {buttonText}
              {isBusiness && (
                <span className="absolute top-[-33px] -z-10 h-32 w-full max-w-9 rotate-90 bg-hero-btn-enterprise blur-[24px]" />
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PricingVariant;
