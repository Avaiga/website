import Image from 'next/image';

import { ROUTE } from '@/constants/routes';
import mapLoading from '@/images/pages/home/optimize/map-loading.jpg';
import map from '@/images/pages/home/optimize/map.jpg';

import Link from '@/components/shared/link';

function Optimize() {
  return (
    <section className="mt-[165px]">
      <div className="container relative max-w-[1088px]">
        <h2 className="pl-10 text-56 font-semibold leading-dense tracking-tight">
          Optimized for insights
        </h2>
        <div className="mt-14 rounded-lg bg-[linear-gradient(180deg,#2A2A2D_0%,rgba(42,42,45,0.5)_4.86%,rgba(42,42,45,0.4)_16.55%)] p-px">
          <div className="flex rounded-lg bg-[#131315]">
            <div className="px-10 pb-10 pt-[55px]">
              <h3 className="bg-[linear-gradient(88deg,#FFF_-61.26%,rgba(255,255,255,0.00)_591.66%)] bg-clip-text text-32 font-medium leading-dense tracking-tight text-transparent">
                In Other Libraries
              </h3>
              <div className="mt-16 flex items-center">
                <div className="h-[3px] w-[114px] rounded-full bg-primary-red" aria-hidden />
                <div className="relative ml-[-7px] mr-[-7px] h-3.5 w-3.5 rounded-full bg-white shadow-[0px_1px_4px_0px_#000000]">
                  <div className="absolute -top-10 left-1/2 h-[29px] w-[44px] -translate-x-1/2 rounded bg-[linear-gradient(201.63deg,#343437_11.47%,#2D2D2F_85.81%)] p-px shadow-[0px_3px_8px_0px_#00000040]">
                    <div className="flex h-[27px] w-[42px] items-center justify-center rounded bg-[linear-gradient(217.84deg,#2A2A2D_16.6%,#232325_95.3%)]">
                      <div
                        className="absolute inset-x-0 bottom-[-5px] -z-10 mx-auto h-2.5 w-2.5 rotate-45 bg-[linear-gradient(201.63deg,#343437_11.47%,#2D2D2F_85.81%)]"
                        aria-hidden
                      />
                      <div
                        className="absolute inset-x-0 -bottom-1 -z-10 mx-auto h-[9px] w-[9px] rotate-45 bg-[linear-gradient(217.84deg,#2A2A2D_16.6%,#232325_95.3%)]"
                        aria-hidden
                      />
                      <span className="text-18">125</span>
                    </div>
                  </div>
                </div>
                <div
                  className="h-[3px] w-[347px] rounded-full bg-white/80 mix-blend-overlay"
                  aria-hidden
                />
              </div>
              <Image
                className="mt-[29px] rounded"
                src={mapLoading}
                width={464}
                height={464}
                alt="Map loading"
              />
            </div>
            <div className="rounded-lg bg-[linear-gradient(180deg,#2A2A2D_0%,rgba(42,42,45,0.5)_4.86%,rgba(42,42,45,0.4)_16.55%),linear-gradient(182.49deg,rgba(255,255,255,0.5)_-7.22%,rgba(255,255,255,0.0498282)_2.63%,rgba(255,255,255,0)_4.07%)] pl-px shadow-[0px_20px_60px_0px_#00000080]">
              <div className="rounded-lg bg-[linear-gradient(0deg,#1B1B1D,#1B1B1D),radial-gradient(93.11%_55.91%_at_100%_0%,rgba(204,204,204,0.09)_0%,rgba(204,204,204,0)_100%)] pb-10 pl-[39px] pr-10 pt-[55px]">
                <h3 className="text-32 font-medium leading-dense tracking-tight">In Taipy</h3>
                <div className="mt-16 flex items-center">
                  <div className="h-[3px] w-[114px] rounded-full bg-primary-red" aria-hidden />
                  <div className="relative ml-[-7px] mr-[-7px] h-3.5 w-3.5 rounded-full bg-white shadow-[0px_1px_4px_0px_#000000]">
                    <div className="absolute -top-10 left-1/2 h-[29px] w-[44px] -translate-x-1/2 rounded bg-[linear-gradient(201.63deg,#343437_11.47%,#2D2D2F_85.81%)] p-px shadow-[0px_3px_8px_0px_#00000040]">
                      <div className="flex h-[27px] w-[42px] items-center justify-center rounded bg-[linear-gradient(217.84deg,#2A2A2D_16.6%,#232325_95.3%)]">
                        <div
                          className="absolute inset-x-0 bottom-[-5px] -z-10 mx-auto h-2.5 w-2.5 rotate-45 bg-[linear-gradient(201.63deg,#343437_11.47%,#2D2D2F_85.81%)]"
                          aria-hidden
                        />
                        <div
                          className="absolute inset-x-0 -bottom-1 -z-10 mx-auto h-[9px] w-[9px] rotate-45 bg-[linear-gradient(217.84deg,#2A2A2D_16.6%,#232325_95.3%)]"
                          aria-hidden
                        />
                        <span className="text-18">125</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="h-[3px] w-[347px] rounded-full bg-white/80 mix-blend-overlay"
                    aria-hidden
                  />
                </div>
                <Image
                  className="mt-[29px] rounded"
                  src={map}
                  width={464}
                  height={464}
                  alt="Map loaded"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2">
          <div className="px-10">
            <p className="mb-4 max-w-[404px] text-18 font-light text-grey-70">
              Taipy enhances performance with caching control of graphical events, optimizing
              rendering by selectively updating graphical components only upon interaction.
            </p>
            <Link className="text-18 leading-normal" href={ROUTE.INDEX} size="md">
              Read more <span className="text-primary-red">-&gt;</span>
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
