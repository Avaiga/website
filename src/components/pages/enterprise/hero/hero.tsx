import Image from 'next/image';

import { ROUTE } from '@/constants/routes';
import HeroPlug from '@/images/pages/enterprise/hero/hero-plug.png';

import Button from '@/components/shared/button';

import PlayIcon from '@/svgs/pages/about-us/play.inline.svg';
import DesignIcon from '@/svgs/pages/enterprise/hero/design-icon.inline.svg';

import TextCards from './text-cards';

export default function Hero() {
  return (
    <section className="hero pt-[113px] lg:pt-[102px] md:pt-[81px]">
      <div className="container-narrow max-w-[1024px] text-center lg:max-w-[896px] ">
        <p className="leading-snug text-primary-red">Taipy Enterprise Edition</p>
        <h1 className="mx-auto pt-5 text-48 font-semibold leading-dense tracking-tight lg:max-w-[832px] lg:text-40 md:max-w-[640px] md:pt-3.5 md:text-32">
          We help organizations increase efficiency, cut costs, increase profits, and make better
          business decisions.
        </h1>
        <p className="mx-auto max-w-[642px] pt-5 leading-snug opacity-80 lg:max-w-[576px] md:pt-4">
          Technology you can trust. Built on Python with decades of industry expertise, we never
          stop innovating. You can count on us to deliver products that address your needs today and
          in the future.
        </p>
        <Button
          className="relative mt-6 w-full max-w-[180px] lg:mt-7"
          size="lgConst"
          theme="red-filled"
          href={ROUTE.REQUEST_A_DEMO}
        >
          Request a demo
          <span className="absolute top-[-51px] h-[190px] w-full max-w-9 rotate-90 bg-hero-btn-enterprise blur-[36px]" />
        </Button>
        <div className="relative mx-auto mt-16 flex h-[266px] w-full max-w-[960px] justify-between overflow-hidden rounded-lg bg-gradient-card pl-[32px] md:max-w-[832px]">
          <span className="rounded-297px absolute right-[50%] top-0 z-[2] h-[60px] w-full max-w-[297px] translate-x-[50%] bg-shadow-red blur-[100px]" />
          <ul className="mt-8 w-full max-w-[321px] text-start md:max-w-[244px]">
            <li className="">
              <DesignIcon className="h-8 w-8" alt="Hero-image.jpg" />
            </li>
            <li className="pt-[21px]">
              <h3 className="text-20 font-medium leading-dense tracking-tight lg:text-18">
                Ease of use: Taipy Designer
              </h3>
              <p className="pt-4 leading-snug text-grey-70 lg:text-14 md:pt-3.5">
                Create a user-friendly web interface effortlessly for your Python projects.
                Streamline your workflow by effortlessly crafting interactive web interfaces without
                the need for a single line of code
              </p>
            </li>
          </ul>
          <div className="relative w-full max-w-[511px] lg:max-w-[490px]">
            <Image
              className="object-contain"
              src={HeroPlug}
              fill={true}
              alt="Hero Plug-image.jpg"
            />
            <div className="absolute left-[55%] top-1/2 flex h-[80px] w-full max-w-[219px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <span className="absolute h-[80px] w-full rounded-[46px] bg-black blur-[24px]" />
              <Button
                className="z-[2] flex w-full max-w-[187px] items-center justify-center gap-[11px] border-orange-1 px-0 tracking-snug"
                size="lg"
                theme="red-outline"
                href="#designer"
              >
                Learn more
                <PlayIcon className="hidden h-1.5 w-[7px] shrink-0" />
              </Button>
            </div>
          </div>
        </div>
        <TextCards />
      </div>
    </section>
  );
}
