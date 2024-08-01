import clsx from 'clsx';

import Link from '@/components/shared/link';

import { CtaProps } from '@/types/pricing-page';

function CTA({ cards }: CtaProps) {
  return (
    <section className="cta mb-[184px] mt-[184px] px-safe lg:mb-[151px] md:my-[110px] sm:mb-[84px] sm:mt-[100px]">
      <div className="container-narrow grid max-w-[1088px] grid-cols-2 gap-x-8 text-center md:max-w-lg md:grid-cols-1 md:gap-y-5">
        <div
          className={clsx(
            'relative overflow-hidden rounded-2xl bg-primary-red px-10 pb-12 pt-11 shadow-[0px_12px_40px_0px_#FF462B80] lg:px-9 lg:pb-11 lg:pt-10 md:px-[42px] md:pb-9 md:pt-8 sm:px-8 sm:pb-8 sm:pt-7',
            'before:pointer-events-none before:absolute before:inset-0 before:left-[310px] before:top-[-360px] before:h-[1154px] before:w-[225px] before:rotate-[30deg] before:bg-[linear-gradient(76.28deg,#FFFFFF_12.28%,rgba(255,255,255,0)_70.86%)] before:opacity-[0.08]',
            'after:pointer-events-none after:absolute after:inset-0 after:left-[120px] after:top-[-360px] after:h-[1154px] after:w-[225px] after:rotate-[30deg] after:bg-[linear-gradient(76.28deg,#FFFFFF_12.28%,rgba(255,255,255,0)_70.86%)] after:opacity-[0.08]',
          )}
        >
          <h3 className="relative text-36 font-semibold leading-dense tracking-tight lg:text-32 md:text-28 sm:text-24">
            {cards[0].title}
          </h3>
          <p className="relative mt-3.5 text-18 font-light lg:mt-3 lg:text-16 md:text-14 sm:mt-2.5">
            {cards[0].description}
          </p>
          <div className="relative mx-auto mt-6 flex h-12 w-full max-w-[180px] items-center justify-center rounded-full bg-white px-5 transition-colors duration-300 hover:bg-[#E4E5E8] md:mt-5 sm:mt-4">
            <Link
              href={cards[0].buttonLink}
              className="whitespace-nowrap px-[47px] py-[13px] font-semibold leading-snug text-black"
            >
              {cards[0].buttonText}
            </Link>
          </div>
        </div>
        <div className="card-border z-10 rounded-2xl">
          <div className="rounded-2xl bg-grey-10 px-10 py-11 lg:px-9 lg:pb-11 lg:pt-10 md:px-[42px] md:pb-9 md:pt-8 sm:px-8 sm:pb-8 sm:pt-7">
            <h3 className="text-36 font-semibold leading-dense tracking-tight lg:text-32 md:text-28 sm:text-24">
              {cards[1].title}
            </h3>
            <p className="mt-3.5 text-18 font-light lg:mt-3 lg:text-16 md:text-14 sm:mt-2.5">
              {cards[1].description}
            </p>
            <div className="relative mx-auto mt-6 flex h-12 w-full max-w-[180px] items-center justify-center rounded-full bg-white px-5 transition-colors duration-300 hover:bg-[#E4E5E8] md:mt-5 sm:mt-4">
              <Link
                className="whitespace-nowrap px-[47px] py-[13px] font-semibold leading-snug text-black transition-colors duration-300"
                href={cards[1].buttonLink}
              >
                {cards[1].buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
