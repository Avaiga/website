import Image from 'next/image';

import bgImage from '@/images/pages/community/hero/illustration.webp';

import Button from '@/components/shared/button';

function Hero() {
  return (
    <section className="hero overflow-hidden pt-16">
      <div className="container relative">
        <div className="max-w-[512px] pb-[256px] pt-[200px]">
          <span className="leading-snug text-primary-red">Community</span>
          <h2 className="mt-5 max-w-[512px] text-64 font-medium leading-dense tracking-tight">
            Be part of Taipy&apos;s adventure!
          </h2>
          <p className="mt-4 max-w-[480px] text-18 font-light leading-normal tracking-normal text-white/80">
            Join Taipy&apos;s development community, contribute code, innovate, and get recognized!
          </p>
          <div className="mt-9 flex gap-[21px]">
            <Button className="w-[231px]" size="lg" theme="red-filled" href="/">
              Show me how to start
            </Button>
            <Button className="w-[190px]" size="lg" theme="red-outline" href="/">
              Star us on GitHub
            </Button>
          </div>
        </div>
        <Image
          className="absolute right-[-5%] top-[-2%]"
          width={992}
          height={808}
          src={bgImage}
          alt=""
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
