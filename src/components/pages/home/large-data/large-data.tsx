'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function LargeData() {
  const { ref: otherRef, inView: otherInView } = useInView({ threshold: 0.1 });
  const { ref: taipyRef, inView: taipyInView } = useInView({ threshold: 0.1 });

  const taipyVideoRef = useRef<HTMLVideoElement>(null);
  const otherVideoRef = useRef<HTMLVideoElement>(null);

  const itemsData = [
    {
      title: 'In Taipy',
      description:
        "Effortlessly manage massive datasets with Taipy's built-in decimator for charts, intelligently reducing the number of data points to save time and memory without losing the essence of your data's shape.",
      ref: taipyRef,
      video: {
        mp4: '/videos/pages/home/large-data/large-data-taipy.mp4',
        webm: '/videos/pages/home/large-data/large-data-taipy.webm',
        ref: taipyVideoRef,
      },
    },
    {
      title: 'In Other Libraries',
      description:
        'Struggle with sluggish performance and excessive memory usage, as every data point demands processing. Large datasets become cumbersome, complicating the user experience and data analysis.',
      ref: otherRef,
      video: {
        mp4: '/videos/pages/home/large-data/large-data-other.mp4',
        webm: '/videos/pages/home/large-data/large-data-other.webm',
        ref: otherVideoRef,
      },
    },
  ];

  useEffect(() => {
    if (!taipyVideoRef.current || !otherVideoRef.current) {
      return;
    }

    if (taipyInView) {
      taipyVideoRef.current.play();
    } else {
      taipyVideoRef.current.pause();
    }

    if (otherInView) {
      otherVideoRef.current.play();
    } else {
      otherVideoRef.current.pause();
    }
  }, [otherInView, taipyInView]);

  return (
    <section className="large-data mt-[136px] px-safe lg:mt-28 md:mt-[90px]">
      <div className="container max-w-7xl">
        <h2 className="mb-12 pl-[205px] text-56 font-semibold leading-dense tracking-tight lg:mb-[57px] lg:pl-16 lg:text-48 md:mb-10 md:pl-8 md:text-40">
          Large data support
        </h2>
        {itemsData.map(({ title, description, video, ref }, index) => (
          <div className="mt-10 flex gap-x-9 lg:mt-9 lg:gap-x-8 md:mt-7 md:items-start" key={index}>
            <div className="aspect-[2.559] w-[860px] shrink-0 rounded-lg bg-gradient-border p-px lg:max-w-[672px] md:max-w-md sm:max-w-full">
              <div className="-m-px rounded-lg bg-gradient-grey" ref={ref}>
                <video
                  className="rounded-lg mix-blend-lighten"
                  controls={false}
                  width={860}
                  height={336}
                  ref={video.ref}
                  loop
                  playsInline
                  muted
                >
                  <source src={video.mp4} type="video/mp4" />
                  <source src={video.webm} type="video/webm" />
                </video>
              </div>
            </div>
            <div className="sm:hidden">
              <h3 className="text-24 font-medium lg:text-20 md:text-16">{title}</h3>
              <p className="mt-2 text-18 font-light text-grey-70 lg:text-16 md:text-14">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LargeData;
