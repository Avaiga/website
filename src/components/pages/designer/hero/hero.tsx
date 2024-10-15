import Image from 'next/image';

import { ROUTES } from '@/constants/routes';
import bgImage from '@/images/pages/designer/bg.png';

import Button from '@/components/shared/button';

import PlayIcon from '@/svgs/pages/about-us/play.inline.svg';

function Hero() {
  return (
    <section className="hero overflow-hidden pt-16">
      <div className="container relative flex items-center justify-between lg:flex-col">
        <div className="relative z-10 flex max-w-[597px] flex-col pb-[125px] pt-[190px] lg:items-center lg:pb-0 lg:pt-[50px] md:pt-[42px]">
          <span className="leading-snug text-primary-red md:text-14">Taipy Designer</span>
          <h2 className="mt-5 text-56 font-medium leading-dense tracking-tight lg:text-center lg:text-48 md:text-44 sm:mt-4 sm:text-28">
            The Revolutionary
            <br />
            drag-&-drop GUI builder
          </h2>
          <p className="mt-4 text-18 font-light leading-normal tracking-normal text-white/80 lg:max-w-[568px] lg:text-center lg:text-16 md:mt-5 md:max-w-[467px] md:text-14 sm:mt-3">
            Explore Taipy Designer, a drag-and-drop builder that creates dynamic GUIs on top of your
            Python code effortlessly. Perfect for Python developers looking for a WYSIWYG GUI
            environment!
          </p>
          <div className="mt-8 flex gap-[21px] sm:mt-[23px]">
          <Button
              className="w-[180px] sm:h-12"
              size="lg"
              theme="red-filled"
              target="_blank"
              href={ROUTES. REQUEST_A_DEMO}
            >
              Request a demo
            </Button>
          </div>
        </div>
        <div className="relative -mr-8 flex items-center lg:mr-0 md:mt-11 md:max-w-[640px] sm:mt-[68px] sm:max-w-[460px]">
          <Image className="md:-mt-12" width={704} height={450} src={bgImage} alt="" priority />
          <div className="absolute bottom-[35%] left-1/2 flex max-w-64 -translate-x-1/2 md:bottom-[40%] sm:bottom-[45%]">
            <span className="absolute left-1/2 top-1/2 h-[135px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black blur-[24px] sm:h-[62px] sm:w-[168px]" />
            <Button
              className="z-[2] flex h-[66px] w-[256px] items-center justify-center gap-3 rounded-full border-orange-1 text-22 tracking-snug md:h-[60px] md:w-[230px] md:text-20 sm:h-9 sm:w-[152px] sm:text-14"
              theme="red-outline"
              href="https://www.youtube.com/watch?v=y3VPT6IPvC4"
              target="_blank"
            >
              Watch the video
              <PlayIcon className="w-2 shrink-0 sm:w-1.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
