import Image from 'next/image';

import HeroPlug from '@/images/pages/enterprise/hero/hero-plug.png';

import Button from '@/components/shared/button';

import PlayIcon from '@/svgs/pages/about-us/play.inline.svg';
import DesignIcon from '@/svgs/pages/enterprise/hero/design-icon.inline.svg';

import TextCards from './text-cards';

export default function Hero() {
  return (
    <section className="hero pt-[129px] md:pt-[102px]">
      <div className="container-narrow text-center">
        <p className="text-16 font-normal leading-snug text-primary-red">
          Taipy Enterprise Edition
        </p>
        <h1 className="mx-auto w-full max-w-[960px] pt-6 text-48 font-medium leading-dense tracking-[-1.92px] md:max-w-[830px] md:pt-5 md:text-40 md:tracking-[-1.6px]">
          We help organizations increase efficiency, cut costs, increase profits, and make better
          business decisions.
        </h1>
        <p className="md:pt-20px mx-auto w-full max-w-[642px] pt-4 text-16 font-normal leading-snug opacity-80 md:max-w-[576px] md:pt-5">
          Technology you can trust. Built on Python with decades of industry expertise, we never
          stop innovating. You can count on us to deliver products that address your needs today and
          in the future.
        </p>
        <Button
          className="relative mt-6 w-full max-w-[180px] md:max-w-40 sm:max-w-[150px]"
          size="lgConst"
          theme="red-filled"
        >
          Request demo
          <span className="absolute top-[-51px] h-[190px] w-full max-w-[36px] rotate-90 bg-hero-btn-enterprise blur-[36px]" />
        </Button>
        <div className="relative mx-auto mt-16 flex h-[266px] w-full max-w-[960px] justify-between overflow-hidden rounded-lg bg-gradient-card pl-[32px] md:max-w-[832px]">
          <span className="rounded-297px absolute right-[50%] top-0 z-[2] h-[60px] w-full max-w-[297px] translate-x-[50%] bg-shadow-red blur-[100px]" />
          <ul className="mt-8 w-full max-w-[321px] text-start">
            <li className="">
              <DesignIcon className="h-8 w-8" alt="Design Icon" />
            </li>
            <li className="pt-[21px]">
              <b className="text-20 font-medium leading-dense tracking-[-0.8px] md:text-18">
                Ease of use: Taipy Designer
              </b>
              <p className="pt-4 text-16 font-normal leading-snug text-grey-70">
                Create a user-friendly web interface effortlessly for your Python projects.
                Streamline your workflow by effortlessly crafting interactive web interfaces without
                the need for a single line of code
              </p>
            </li>
          </ul>
          <div className="relative w-full max-w-[511px]">
            <Image className="object-cover" src={HeroPlug} fill={true} alt="Hero Plug" />
            <div className="absolute left-[55%] top-1/2 flex h-[80px] w-full max-w-[219px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <span className="absolute h-[80px] w-full rounded-[46px] bg-black blur-[24px]" />
              <Button
                className="z-[2] flex items-center justify-center gap-3 border-orange-1"
                size="lg"
                theme="red-outline"
              >
                Watch the video
                <PlayIcon className="h-[6px] w-[7px]" />
              </Button>
            </div>
          </div>
        </div>
        <TextCards />
      </div>
    </section>
  );
}
