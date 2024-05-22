import Image from 'next/image';

import { ROUTES } from '@/constants/routes';
import HeroPlug from '@/images/pages/enterprise/hero/hero-plug.png';
import HeroPlugMobile from '@/images/pages/enterprise/hero/hero-plug.png';

import Button from '@/components/shared/button';

import PlayIcon from '@/svgs/pages/about-us/play.inline.svg';
import DesignIcon from '@/svgs/pages/enterprise/hero/design-icon.inline.svg';

import TextCards from './text-cards';

export default function Hero() {
  return (
    <section className="hero pt-[113px] lg:pt-[102px] md:pt-[81px] sm:pt-[91px]">
      <div className="container-narrow max-w-[1024px] text-center lg:max-w-[896px] ">
        <p className="leading-snug text-primary-red sm:text-14">Taipy Enterprise Edition</p>
        <h1 className="mx-auto pt-5 text-48 font-semibold leading-dense tracking-tight lg:max-w-[832px] lg:text-40 md:max-w-[640px] md:pt-3.5 md:text-32 sm:text-28">
          We help organizations increase efficiency, boost profits, and make better business
          decisions.
        </h1>
        <p className="mx-auto max-w-[642px] pt-5 leading-snug opacity-80 lg:max-w-[576px] md:pt-4 sm:pt-[14px] sm:text-14">
          Technology you can trust. Built on Python with decades of industry expertise, we never
          stop innovating. You can count on us to deliver products that address your needs today and
          in the future.
        </p>
        <Button
          className="relative mt-6 w-full max-w-[180px] lg:mt-7 sm:mt-[22px]"
          size="lgConst"
          theme="red-filled"
          href={ROUTES.REQUEST_A_DEMO}
        >
          Request a demo
          <span className="absolute top-[-51px] h-[190px] w-full max-w-9 rotate-90 bg-hero-btn-enterprise blur-[36px]" />
        </Button>
        <div className="relative mx-auto mt-16 flex w-full max-w-[960px] justify-between overflow-hidden rounded-lg bg-gradient-grey-10 pl-[32px] lg:items-center lg:gap-x-[32px] lg:pb-3 md:mt-[60px] md:max-w-[832px] md:gap-x-[50px] md:pb-0 sm:mt-[52px] sm:flex-col sm:items-start sm:pl-6">
          <span className="rounded-297px absolute right-[50%] top-0 z-[2] h-[60px] w-full max-w-[297px] translate-x-[50%] bg-shadow-red blur-[100px]" />
          <div className="mb-8 mt-8 w-full max-w-[321px] text-start md:max-w-[244px] sm:mb-7 sm:mt-6 sm:max-w-[272px]">
            <DesignIcon className="h-8 w-8 sm:h-5 sm:w-5" alt="Hero-image.jpg" />
            <h2 className="pt-6 text-20 font-medium leading-dense tracking-tight lg:text-18 sm:pt-3 sm:text-16 sm:leading-normal sm:tracking-normal">
              Ease of use: Taipy Designer
            </h2>
            <p className="pt-4 leading-snug text-grey-70 lg:text-14 md:pt-3.5 sm:pt-2">
              Create a user-friendly web interface effortlessly for your Python projects. Streamline
              your workflow by easily crafting interactive web interfaces without the need for a
              single line of code
            </p>
          </div>
          <div className="relative flex w-full max-w-[511px] items-end lg:max-w-[490px] sm:pb-2">
            <Image className="object-contain sm:hidden" src={HeroPlug} alt="" priority />
            <Image
              className="hidden object-contain sm:block"
              src={HeroPlugMobile}
              alt=""
              priority
            />
            <div className="absolute left-[55%] top-1/2 flex h-[80px] w-full max-w-[219px] -translate-x-1/2 -translate-y-1/2 items-center justify-center md:left-[45%] md:top-[48%] md:max-w-[129px] sm:top-[39%]">
              <span className="absolute h-[80px] w-full rounded-[46px] bg-black blur-[24px]" />
              <Button
                className="z-[2] flex w-full max-w-[187px] items-center justify-center gap-[11px] border-orange-1 px-0 tracking-snug md:h-[33px]"
                size="lg"
                theme="red-outline"
                href="https://www.youtube.com/watch?v=y3VPT6IPvC4"
                target="_blank"
              >
                Watch the video
                <PlayIcon className="h-1.5 w-[7px] shrink-0" />
              </Button>
            </div>
          </div>
        </div>
        <TextCards />
      </div>
    </section>
  );
}
