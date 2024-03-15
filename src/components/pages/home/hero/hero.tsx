import Image from 'next/image';

import Button from '@/components/shared/button';

import bg from '@/svgs/pages/home/hero/bg.svg';
import screen from '@/svgs/pages/home/hero/screen.svg';

import Logos from './logos';

function Hero() {
  return (
    <section className="mt-[72px] overflow-x-hidden">
      <div className="container relative">
        <Image
          className="pointer-events-none absolute bottom-[42px] right-[-218px] -z-10 max-h-[751px] max-w-[1706px]"
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
        <div className="mt-[42px] flex justify-center gap-x-8">
          <Button size="lg" theme="primary">
            Request demo
          </Button>
          <Button size="lg" theme="outline">
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
