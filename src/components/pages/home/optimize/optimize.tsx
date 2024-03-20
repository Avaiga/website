'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { ROUTE } from '@/constants/routes';

import Link from '@/components/shared/link';

function Optimize() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const otherRef = useRef<HTMLVideoElement>(null);
  const taipyRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (inView && otherRef?.current && taipyRef?.current) {
      otherRef.current.play();
      taipyRef.current.play();
    }
  }, [inView]);

  return (
    <section className="optimize mt-[188px] px-safe">
      <div className="container max-w-[1152px]">
        <h2 className="pl-10 text-56 font-semibold leading-dense tracking-tight">
          Optimized for insights
        </h2>
        <div className="card-border mt-14 rounded-lg p-px" ref={ref}>
          <div className="flex rounded-lg bg-grey-10">
            <div>
              <video
                className="rounded-l-lg"
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
            <div className="rounded-lg bg-[linear-gradient(180deg,#2A2A2D_0%,rgba(42,42,45,0.5)_4.86%,rgba(42,42,45,0.4)_16.55%),linear-gradient(182.49deg,rgba(255,255,255,0.5)_-7.22%,rgba(255,255,255,0.0498282)_2.63%,rgba(255,255,255,0)_4.07%)] pl-px shadow-[0px_20px_60px_0px_#00000080]">
              <video
                className="rounded-lg"
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
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2">
          <div className="px-10">
            <p className="mb-4 max-w-[404px] text-18 font-light text-grey-70">
              Taipy enhances performance with caching control of graphical events, optimizing
              rendering by selectively updating graphical components only upon interaction.
            </p>
            <Link className="leading-normal" href={ROUTE.INDEX} size="lg" arrowTheme="red">
              Read more
            </Link>
          </div>
          <div className="px-10">
            <p className="text-18 font-light text-grey-70">Up to</p>
            <p className="-ml-0.5 -mt-0.5 inline-block bg-[linear-gradient(88deg,#FF462B_6.46%,rgba(0,0,0,0.00)_251.98%)] bg-clip-text text-[92px] font-light leading-dense tracking-tighter text-transparent">
              10<span className="text-44 font-normal tracking-tight">x faster</span>
            </p>
            <p className="-mt-1 text-18 font-light text-grey-70">for resource-heavy apps</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Optimize;
