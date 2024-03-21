'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function LargeData() {
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
    <section className="large-data mt-[136px] px-safe">
      <div className="container max-w-[1280px]">
        <h2 className="pl-[205px] text-56 font-semibold leading-dense tracking-tight">
          Large data support
        </h2>
        <div className="mt-[48px] flex gap-x-9" ref={ref}>
          <div className="shrink-0 rounded-lg bg-large-video-border p-px">
            <div className="-m-px rounded-lg bg-large-video-gradient">
              <video
                className="rounded-lg mix-blend-lighten"
                controls={false}
                width={860}
                height={336}
                ref={taipyRef}
                loop
                playsInline
                muted
                autoPlay
              >
                <source src="/videos/pages/home/large-data/large-data-taipy.mp4" type="video/mp4" />
                <source
                  src="/videos/pages/home/large-data/large-data-taipy.webm"
                  type="video/webm"
                />
              </video>
            </div>
          </div>
          <div>
            <h3 className="text-24 font-medium">In Taipy</h3>
            <p className="mt-2 text-18 font-light text-grey-70">
              Effortlessly manage massive datasets with Taipy&apos;s built-in decimator for charts,
              intelligently reducing the number of data points to save time and memory without
              losing the essence of your data&apos;s shape.
            </p>
          </div>
        </div>
        <div className="mt-10 flex gap-x-9">
          <div className="shrink-0 rounded-lg bg-large-video-border p-px">
            <div className="-m-px rounded-lg bg-large-video-gradient">
              <video
                className="rounded-lg mix-blend-lighten"
                controls={false}
                width={860}
                height={336}
                ref={otherRef}
                loop
                playsInline
                muted
                autoPlay
              >
                <source src="/videos/pages/home/large-data/large-data-other.mp4" type="video/mp4" />
                <source
                  src="/videos/pages/home/large-data/large-data-other.webm"
                  type="video/webm"
                />
              </video>
            </div>
          </div>
          <div>
            <h3 className="text-24 font-medium">In Other Libraries</h3>
            <p className="mt-2 text-18 font-light text-grey-70">
              Struggle with sluggish performance and excessive memory usage, as every data point
              demands processing. Large datasets become cumbersome, complicating the user experience
              and data analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LargeData;
