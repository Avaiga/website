import Image from 'next/image';

import Button from '@/components/shared/button';

import bg from '@/svgs/pages/home/hero/bg.svg';
import screen from '@/svgs/pages/home/hero/screen.svg';

import Logos from './logos';

function Hero() {
  return (
    <section className="hero overflow-hidden pt-[136px] px-safe lg:pt-[120px]">
      <div className="container-wide relative">
        <Image
          className="pointer-events-none absolute left-[37px] top-[287px] -z-10 max-w-full xxl:left-0  lg:left-1/2 lg:top-[308px] lg:max-w-[960px] lg:-translate-x-1/2"
          src={bg}
          width={1706}
          height={751}
          alt=""
          priority
        />
        <p className="text-center text-16 leading-snug text-primary-red">
          Beyond existing libraries
        </p>
        <h1 className="mx-auto mt-5 max-w-[610px] text-center text-64 font-medium leading-dense tracking-tight lg:max-w-[548px] lg:text-56">
          Build Python Data &&nbsp;AI web applications
        </h1>
        <p className="mx-auto mt-5 max-w-[600px] text-center text-18 font-light text-white/80 lg:max-w-[536px] lg:text-16">
          From simple pilots to production-ready web applications in no times. No more compromise on
          performance, customization, and scalability.
        </p>
        <div className="relative mt-[42px] flex justify-center gap-x-8 lg:mt-[28px]">
          <Button className="w-full max-w-[180px]" size="lg" theme="red-filled">
            Request demo
          </Button>
          <Button className="w-full max-w-[180px]" size="lg" theme="outline">
            Documentation
          </Button>
        </div>
        <div className="relative mt-[-9px] lg:mt-7">
          <Image
            className="mx-auto xl:h-[465px] xl:w-[760px] lg:h-[337px] lg:w-[556px]"
            src={screen}
            width={944}
            height={577}
            alt=""
            priority
          />
          <video
            className="absolute inset-x-0 top-[108px] mx-auto rounded-[10px] xl:top-[88px] xl:h-[366px] xl:w-[590px] lg:top-16 lg:h-[268px] lg:w-[431px]"
            controls={false}
            width={732}
            height={454}
            loop
            playsInline
            muted
            autoPlay
          >
            <source src="/videos/pages/home/hero/hero.mp4" type="video/mp4" />
            <source src="/videos/pages/home/hero/hero.webm" type="video/webm" />
          </video>
        </div>
        <Logos />
      </div>
    </section>
  );
}

export default Hero;
