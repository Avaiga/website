import { TESTIMONIALS_ITEMS } from '@/constants/testimonials';

import Logos from '@/components/shared/logos';

import Form from './form';
import Testimonials from './testimonials';

function Hero() {
  return (
    <section className="hero pt-32 lg:pt-28 md:pt-[104px] sm:pt-24">
      <div className="container">
        <h1 className="mt-2 text-center text-56 font-semibold leading-dense tracking-tight lg:text-56 md:text-48 sm:text-32">
          Contact us
        </h1>
        <p className="mx-auto mt-4 max-w-[464px] text-center text-16 leading-snug text-white/80 md:mt-3.5 md:max-w-[393px] md:text-14 sm:mt-3 sm:max-w-[285px]">
          Have a question, seek for support? Just send us an email, and we&apos;ll be sure to
          respond promptly.
        </p>
        <div className="mx-auto mt-[72px] grid max-w-[1216px] grid-cols-10 items-center gap-x-3 gap-y-12 lg:mt-14 lg:max-w-[960px] lg:grid-cols-8 lg:gap-x-3 md:mt-10 sm:mt-8 sm:gap-y-10">
          <div className="col-span-6 pl-8 pr-[52px] lg:col-span-5 lg:pl-0 md:col-span-full md:pr-0">
            <Form />
          </div>
          <div className="col-span-4 col-start-7 flex flex-col gap-y-10 lg:col-span-3 lg:col-start-6 lg:gap-y-20 md:col-span-full md:gap-y-12 sm:gap-y-10">
            <Testimonials items={TESTIMONIALS_ITEMS} />
            <div>
              <span className="flex items-center gap-x-2.5 text-16 uppercase leading-snug tracking-snug text-grey-70 lg:text-14">
                They trust us
                <hr className="grow text-grey-30" />
              </span>
              <Logos isWide={false} className="mb-5 sm:mb-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
