import Image from 'next/image';

import bgImage from '@/images/pages/community/hero/illustration.png';

import Button from '@/components/shared/button';

import GithubLogo from '@/svgs/icons/logo-github.inline.svg';

function Hero() {
  return (
    <section className="hero overflow-hidden pt-16">
      <div className="container relative">
        <div className="relative z-10 flex max-w-[512px] flex-col pb-[256px] pt-[200px] lg:mx-auto lg:max-w-[704px] lg:items-center lg:pb-[2px] lg:pt-12 lg:text-center md:pt-10 sm:pb-[52px]">
          <span className="leading-snug text-primary-red md:text-14">Community</span>
          <h2 className="mt-5 max-w-[512px] text-64 font-medium leading-dense tracking-tight lg:max-w-[704px] lg:text-56 md:text-48 sm:mt-[18px] sm:text-36">
            Be part of Taipy&apos;s adventure!
          </h2>
          <p className="mt-4 max-w-[480px] text-18 font-light leading-normal tracking-normal text-white/80 lg:max-w-[400px] lg:text-16 md:text-14 sm:mt-3 sm:max-w-[312px]">
            Join Taipy&apos;s development community, contribute code, innovate, and get recognized!
          </p>
          <div className="mt-9 flex gap-[21px] lg:mt-8 sm:mt-6">
            <Button className="w-[231px] sm:w-[187px]" size="lg" theme="red-filled" href="/">
              Show me how to start
            </Button>
            <Button
              className="w-[190px] gap-x-2.5 px-3 sm:w-[119px]"
              size="lg"
              theme="outline"
              href="/"
            >
              <GithubLogo className="h-6 flex-shrink-0 fill-white" />
              <p>
                Star us
                <span className="sm:hidden">&nbsp;on GitHub</span>
              </p>
            </Button>
          </div>
        </div>
        <Image
          className="absolute right-[-5%] top-[-2%] lg:relative lg:right-[4%] lg:-mt-11 md:right-[17%] md:max-w-[125%]"
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
