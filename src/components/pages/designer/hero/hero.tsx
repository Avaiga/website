import Image from 'next/image';

import { ROUTES } from '@/constants/routes';
import bgImage from '@/images/pages/designer/bg.png';

import Button from '@/components/shared/button';

import PlayIcon from '@/svgs/pages/about-us/play.inline.svg';

function Hero() {
  return (
    <section className="hero overflow-hidden pt-16">
      <div className="container relative flex items-center justify-between">
        <div className="relative z-10 flex max-w-[597px] flex-col pb-[125px] pt-[190px]">
          <span className="leading-snug text-primary-red">Taipy Designer</span>
          <h2 className="mt-5 text-56 font-medium leading-dense tracking-tight">
            The Revolutionary drag-&-drop GUI builder
          </h2>
          <p className="mt-4 text-18 font-light leading-normal tracking-normal text-white/80">
            Explore Taipy Designer, a drag-and-drop builder that creates dynamic GUIs on top of your
            Python code effortlessly. Perfect for Python developers looking for a WYSIWYG GUI
            environment!
          </p>
          <div className="mt-8 flex gap-[21px]">
            <Button
              className="w-[180px]"
              size="lg"
              theme="red-filled"
              href={ROUTES.REQUEST_A_DESIGNER_DEMO}
            >
              Request a demo
            </Button>
          </div>
        </div>
        <div className="relative -mr-8 flex h-[450px] items-center">
          <Image width={704} height={450} src={bgImage} alt="" priority />
          <div className="absolute bottom-[35%] left-1/2 flex max-w-[256px] -translate-x-1/2">
            <span className="absolute left-1/2 top-1/2 h-[135px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black blur-[24px]" />
            <Button
              className="z-[2] flex h-[66px] w-[256px] items-center justify-center gap-3 rounded-full border-orange-1 text-22 tracking-snug"
              theme="red-outline"
              href="https://www.youtube.com/watch?v=y3VPT6IPvC4"
              target="_blank"
            >
              Watch the video
              <PlayIcon className="w-2 shrink-0" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
