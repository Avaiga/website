'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { ROUTE } from '@/constants/routes';

import Link from '@/components/shared/link';

function Optimize() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const otherRef = useRef<HTMLVideoElement>(null);
  const taipyRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!otherRef.current || !taipyRef.current) {
      return;
    }

    if (inView) {
      otherRef.current.play();
      taipyRef.current.play();
    } else {
      otherRef.current.pause();
      taipyRef.current.pause();
    }
  }, [inView]);

  return (
    <section className="optimize mt-[188px] px-safe lg:mt-[92px] md:mt-[102px] sm:mt-[74px]">
      <div className="container max-w-6xl">
        <h2 className="pl-10 text-56 font-semibold leading-dense tracking-tight lg:pl-16 lg:text-48 md:pl-8 md:text-40 sm:pl-0 sm:text-center sm:text-28">
          Optimized for insights
        </h2>
        <div className="card-border mt-14 rounded-lg p-px lg:mt-12 md:mt-10 sm:mt-4" ref={ref}>
          <div className="-m-px flex aspect-[1.549] rounded-lg bg-grey-10">
            <div>
              <video
                className="rounded-lg mix-blend-lighten"
                controls={false}
                width={544}
                height={702}
                ref={taipyRef}
                loop
                playsInline
                muted
              >
                <source src="/videos/pages/home/optimize/optimize-taipy.mp4" type="video/mp4" />
                <source src="/videos/pages/home/optimize/optimize-taipy.webm" type="video/webm" />
              </video>
            </div>
            <div className="-m-px rounded-lg bg-gradient-border p-px shadow-[0px_20px_60px_0px_#00000080]">
              <div className="rounded-lg bg-gradient-grey-10">
                <video
                  className="rounded-lg mix-blend-lighten"
                  controls={false}
                  width={544}
                  height={702}
                  ref={otherRef}
                  loop
                  playsInline
                  muted
                >
                  <source src="/videos/pages/home/optimize/optimize-other.mp4" type="video/mp4" />
                  <source src="/videos/pages/home/optimize/optimize-other.webm" type="video/webm" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:mt-9 md:mt-6 sm:mt-4">
          <div className="px-10 lg:px-16 md:pl-8 md:pr-[62px] sm:col-span-2 sm:px-0">
            <p className="mb-4 max-w-[404px] text-18 font-light text-grey-70 lg:text-16 md:mb-3 md:text-14 sm:mb-1.5">
              Taipy enhances performance with caching control of graphical events, optimizing
              rendering by selectively updating graphical components only upon interaction.
            </p>
            <Link className="leading-normal" href={ROUTE.INDEX} size="lg" arrowTheme="red">
              Read more
            </Link>
          </div>
          <div className="px-10 lg:px-16 md:px-8 sm:hidden">
            <p className="text-18 font-light text-grey-70 lg:text-16 md:text-14">Up to</p>
            <p className="-ml-0.5 -mt-0.5 inline-block bg-[linear-gradient(88deg,#FF462B_6.46%,rgba(0,0,0,0.00)_251.98%)] bg-clip-text text-[92px] font-light leading-dense tracking-tighter text-transparent lg:text-[80px] md:text-[72px]">
              10
              <span className="text-44 font-normal tracking-tight lg:text-40 md:text-36">
                x faster
              </span>
            </p>
            <p className="-mt-1 text-18 font-light text-grey-70 lg:mt-0.5 lg:text-16 md:text-14">
              for resource-heavy apps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Optimize;
