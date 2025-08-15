import Button from '@/components/shared/button';

import { BenefitsProps } from '@/types/pricing-page';

import collaborationIcon from '@/svgs/pages/pricing/collaboration.svg';
import easyUseIcon from '@/svgs/pages/pricing/easy-use-icon.svg';
import flexIcon from '@/svgs/pages/pricing/flexibility.svg';
import speedIcon from '@/svgs/pages/pricing/speed.svg';

const cardsIcons = [easyUseIcon, collaborationIcon, flexIcon, speedIcon];

function Benefits({ heading, description, buttonText, buttonLink, cards }: BenefitsProps) {
  return (
    <section className="benefits mt-[184px] px-safe lg:mt-[184px] md:mt-[154px] md:pb-[72px] sm:mt-[129px] sm:pb-[66px]">
      <div className="container relative flex max-w-[1280px] gap-x-16 lg:max-w-[1024px] lg:gap-x-8 md:max-w-[640px] md:flex-col md:items-center md:gap-y-10 sm:gap-y-[46px]">
        <div className="max-w-[384px] shrink-0 grow lg:max-w-[352px] md:max-w-[576px] md:text-center">
          <h2 className="text-48 font-medium leading-dense tracking-tight lg:text-40 lg:font-semibold md:text-36 sm:text-28">
            {heading}
          </h2>
          <p className="mt-6 text-18 text-grey-70 lg:mt-5 lg:text-16 lg:font-light md:mt-4 sm:mt-3 sm:text-14">
            {description}
          </p>
          <Button
            className="plausible-event-name=Click+RequestADemoBtn+RequestADesignerDemo mt-8 h-[46px] w-full max-w-[188px] lg:mt-7 md:absolute md:left-1/2 md:top-full md:-translate-x-1/2 md:transform sm:mt-[22px]"
            size="lg"
            theme="red-filled"
            href={buttonLink}
          >
            {buttonText}
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-[48px] lg:gap-y-9 md:gap-x-[33px] sm:grid-cols-1 sm:gap-y-[21px]">
          {cards.map(({ title, description: cardText }, index) => (
            <div key={index}>
              <div className="flex items-center gap-x-3 lg:gap-x-2.5 sm:gap-x-2">
                <img
                  src={cardsIcons[index]}
                  className="h-6 w-6 shrink-0 lg:h-5 lg:w-5 sm:h-[18px] sm:w-[18px]"
                  alt=""
                />
                <h3 className="text-24 font-medium lg:text-20 lg:leading-snug sm:text-16 sm:font-semibold">
                  {title}
                </h3>
              </div>
              <p className="mt-2 text-18 font-light text-grey-70 lg:mt-3 lg:text-14 md:mt-[13px] sm:mt-[9px]">
                {cardText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
