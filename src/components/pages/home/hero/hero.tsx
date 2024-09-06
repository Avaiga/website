import Image from 'next/image';

import { ROUTES } from '@/constants/routes';

import Button from '@/components/shared/button';

import bg from '@/svgs/pages/home/hero/bg.svg';
import screen from '@/svgs/pages/home/hero/screen.svg';

import CopyButton from './copy-button';
import Logos from './logos';

function Hero() {
  return (
    <section className="hero overflow-hidden pt-[136px] px-safe lg:pt-[120px] md:pt-[110px] sm:pt-[90px]">
      <div className="container-wide relative text-center">
        <Image
          className="pointer-events-none absolute left-[37px] top-[287px] -z-10 max-w-full xxl:left-0  lg:left-1/2 lg:top-[308px] lg:max-w-[960px] lg:-translate-x-1/2 md:hidden"
          src={bg}
          width={1706}
          height={751}
          alt=""
          priority
        />
        <span className="leading-snug text-primary-red md:text-14">
          Go beyond existing libraries
        </span>
        <h1 className="mx-auto mt-5 max-w-[610px] text-64 font-medium leading-dense tracking-tight lg:max-w-[548px] lg:text-56 md:mt-3.5 md:max-w-[470px] md:text-48 sm:mt-2.5 sm:text-32">
          Build Python Data &&nbsp;AI&nbsp;web applications
        </h1>
        <p className="mx-auto mt-5 max-w-[600px] text-18 font-light text-white/80 lg:max-w-[536px] lg:text-16 md:mt-4 sm:mt-3 sm:text-14">
          From simple pilots to production-ready web applications in no time. No more compromise on
          performance, customization, and scalability.
        </p>
        <div className="relative mt-[42px] flex justify-center gap-x-4 md:gap-x-3.5 sm:mt-6">
          <CopyButton />
          <Button
            className="w-full max-w-[166px] md:max-w-[154px]"
            href={ROUTES.DOCUMENTATION}
            size="lg"
            theme="outline"
          >
            Documentation
          </Button>
        </div>
        <div className="relative mt-[-9px] lg:mt-7 md:mt-0 md:px-4 sm:mt-2">
          <Image
            className="relative mx-auto xl:h-auto xl:w-[760px] lg:w-[556px] md:w-[656px] sm:left-1/2 sm:m-0 sm:w-[392px] sm:max-w-none sm:-translate-x-1/2"
            src={screen}
            width={944}
            height={577}
            alt=""
            priority
          />
          <video
            className="absolute inset-x-0 top-[109px] mx-auto rounded-[10px] xl:top-[88px] xl:h-[366px] xl:w-auto lg:top-[62px] lg:h-[268px] lg:rounded-md md:top-[75px] md:h-auto md:w-[513px] sm:top-[45px] sm:w-[305px] sm:rounded-[4px]"
            controls={false}
            width={732}
            height={454}
            loop
            playsInline
            muted
            autoPlay
          >
            {/* -c:v libvpx-vp9 -crf 40 -vf scale=1464:-2 -deadline best -an */}
            <source
              src="/videos/pages/home/hero/hero-current.webm?updated=20240724191541"
              type="video/webm"
            />
            {/* -c:v libx265 -crf 32 -vf scale=1464:-2 -preset veryslow -tag:v hvc1 -movflags faststart -an */}
            <source
              src="/videos/pages/home/hero/hero-current.mp4?updated=20240724191541"
              type="video/mp4"
            />
          </video>
        </div>
        <Logos isHideMask />
      </div>
    </section>
  );
}

export default Hero;
