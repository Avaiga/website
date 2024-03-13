import Image from 'next/image';

import Button from '@/components/shared/button';

import bg from './images/bg.png';
import partners from './images/partners.svg';
import screen from './images/screen.svg';

function Hero() {
  return (
    <section className="mt-48">
      <div className="container relative">
        <div className="absolute bottom-[42px] right-[-218px] h-[751px] w-[1706px]">
          <Image src={bg} width={1706} height={751} alt="" className="h-full w-full" />
        </div>
        <p className="text-orange relative text-center text-16 leading-snug">
          Beyond existing libraries
        </p>
        <h1 className="relative mx-auto mt-5 max-w-[610px] text-center text-64 font-medium leading-tighter tracking-tight">
          Build Python Data &&nbsp;AI web applications
        </h1>
        <p className="relative mx-auto mt-5 max-w-[610px] text-center text-18 text-white/80">
          From simple pilots to production-ready web applications in no times. No more compromise on
          performance, customization, and scalability.
        </p>
        <div className="relative mt-[42px] flex justify-center gap-x-8">
          <Button size="lg" theme="primary">
            Request demo
          </Button>
          <Button size="lg" theme="outline">
            Documentation
          </Button>
        </div>
        <Image
          src={screen}
          width={944}
          height={577}
          alt=""
          className="relative mx-auto mt-[-9px]"
        />
        <Image
          src={partners}
          width={864}
          height={91}
          alt="partners"
          className="mx-auto mt-[71px]"
        />
      </div>
    </section>
  );
}

export default Hero;
