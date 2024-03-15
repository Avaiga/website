import Image from 'next/image';

import Button from '@/components/shared/button';

import bg from '@/svgs/pages/home/hero/bg.svg';
import screen from '@/svgs/pages/home/hero/screen.svg';

import Logos from './logos';

function Hero() {
  return (
    <section className="hero overflow-hidden pt-[136px] px-safe">
      <div className="container relative">
        <Image
          className="pointer-events-none absolute right-[-186px] top-[287px] -z-10 max-w-[1706px]"
          src={bg}
          width={1706}
          height={751}
          alt=""
          priority
        />
        <p className="text-center text-16 leading-snug text-primary-red">
          Beyond existing libraries
        </p>
        <h1 className="mx-auto mt-5 max-w-[610px] text-center text-64 font-medium leading-dense tracking-tight">
          Build Python Data &&nbsp;AI web applications
        </h1>
        <p className="mx-auto mt-5 max-w-[600px] text-center text-18 font-light text-white/80">
          From simple pilots to production-ready web applications in no times. No more compromise on
          performance, customization, and scalability.
        </p>
        <div className="relative mt-[42px] flex justify-center gap-x-8">
          <Button className="w-full max-w-[180px]" size="lg" theme="red-filled">
            Request demo
          </Button>
          <Button className="w-full max-w-[180px]" size="lg" theme="outline">
            Documentation
          </Button>
        </div>
        <Image
          className="mx-auto mt-[-9px]"
          src={screen}
          width={944}
          height={577}
          alt=""
          priority
        />
        <Logos />
      </div>
    </section>
  );
}

export default Hero;
