'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import Link from '@/components/shared/link';

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
      readMore: true,
      ref: taipyRef,
      video: {
        // -c:v libvpx-vp9 -crf 40 -vf scale=1720:-2 -deadline best -an
        webm: '/videos/pages/home/large-data/taipy-current.webm',
        // -c:v libx265 -crf 32 -vf scale=1720:-2 -preset veryslow -tag:v hvc1 -movflags faststart -an
        mp4: '/videos/pages/home/large-data/taipy-current.mp4',
        ref: taipyVideoRef,
      },
    },
    {
      title: 'In Other Libraries',
      description:
        'Struggle with sluggish performance and excessive memory usage, as every data point demands processing. Large datasets become cumbersome, complicating the user experience and data analysis.',
      ref: otherRef,
      video: {
        // -c:v libvpx-vp9 -crf 40 -vf scale=1720:-2 -deadline best -an
        webm: '/videos/pages/home/large-data/other-current.webm',
        // -c:v libx265 -crf 32 -vf scale=1720:-2 -preset veryslow -tag:v hvc1 -movflags faststart -an
        mp4: '/videos/pages/home/large-data/other-current.mp4',
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
    <section className="large-data mt-[136px] px-safe lg:mt-28 md:mt-[90px] sm:mt-20">
      <div className="container max-w-7xl">
        <h2 className="mb-12 pl-[205px] text-56 font-semibold leading-dense tracking-tight lg:mb-[57px] lg:pl-16 lg:text-48 md:mb-10 md:pl-8 md:text-40 sm:mb-4 sm:pl-0 sm:text-center sm:text-28">
          Large data support
        </h2>
        {itemsData.map(({ title, description, video, ref, readMore }, index) => (
          <div
            className="mt-10 flex gap-x-9 lg:mt-9 lg:gap-x-8 md:mt-7 md:items-start sm:mb-5 sm:mt-0 sm:flex-wrap"
            key={index}
          >
            <div className="aspect-[2.559] w-[860px] shrink-0 rounded-lg bg-gradient-border p-px lg:max-w-[672px] md:max-w-md sm:order-2 sm:max-w-full">
              <div className="-m-px rounded-lg bg-gradient-grey" ref={ref}>
                <video
                  className="rounded-lg mix-blend-plus-lighter"
                  controls={false}
                  width={860}
                  height={336}
                  ref={video.ref}
                  loop
                  playsInline
                  muted
                >
                  <source src={video.webm} type="video/webm" />
                  <source src={video.mp4} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="sm:order-1 sm:mb-2 sm:w-full">
              <h3 className="text-24 font-medium lg:text-20 md:text-16">{title}</h3>
              <p className="mt-2 text-18 font-light text-grey-70 lg:text-16 md:text-14 sm:hidden">
                {description}
              </p>
              {readMore && (
                <Link
                  className="mt-4 leading-normal md:mt-3 sm:hidden"
                  href="https://docs.taipy.io/en/latest/manuals/reference/taipy.gui.data.Decimator/"
                  size="lg"
                  arrowTheme="red"
                >
                  Read more
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LargeData;
