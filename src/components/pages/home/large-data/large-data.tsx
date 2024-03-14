import Image from 'next/image';

import sinLoading from './images/sin-loading.svg';
import sin from './images/sin.svg';

function LargeData() {
  return (
    <section className="mt-[136px]">
      <div className="container px-16">
        <h2 className="pl-[205px] text-56 font-semibold leading-dense tracking-tight">
          Large data support
        </h2>
        <div className="mt-[48px] flex gap-x-9">
          <Image
            src={sin}
            width={862}
            height={338}
            alt="loaded"
            className="shadow-[0px_20px_60px_0px_#00000080]"
          />
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
          <Image src={sinLoading} width={862} height={338} alt="loading" />
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
