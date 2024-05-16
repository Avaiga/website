import Image, { StaticImageData } from 'next/image';

import distributedImage from '@/images/pages/enterprise/features/distributed.png';
import scenarioImage from '@/images/pages/enterprise/features/scenario.png';
import telemetryImage from '@/images/pages/enterprise/features/telemetry.png';
import clsx from 'clsx';

interface Feature {
  title: string;
  text: string;
  image: StaticImageData;
}

const items: Feature[] = [
  {
    title: 'Scenario management',
    text: 'Native scenario management enables end-users to conduct detailed what-if analyses, tracking executions and data sources for visualization, comparison, and KPI tracking. This enhances user experience, monitors activity, fosters collaboration between data Scientists and end-users, and boosts user acceptance.',
    image: scenarioImage,
  },
  {
    title: 'Distributed computing',
    text: 'Unlock unparalleled scalability and performance across multiple machines. Ideal for handling large datasets and complex computations efficiently.',
    image: distributedImage,
  },
  {
    title: 'Telemetry',
    text: 'Ensure your applications are not just running but thriving. Gain critical insights into performance & health, enabling proactive optimizations & maintenance.',
    image: telemetryImage,
  },
];

function Features() {
  return (
    <section className="features mt-[185px] px-safe lg:mt-[151px] md:mt-[110px] sm:mt-[82px]">
      <div className="container flex max-w-[1024px] flex-col items-center lg:max-w-[960px]">
        <h2 className="text-48 font-medium leading-dense tracking-tight lg:text-40 lg:font-semibold md:text-36 sm:text-28">
          Taipy has so much more to offer
        </h2>
        <p className="mt-5 max-w-[656px] text-center text-18 leading-snug tracking-snug text-grey-70 lg:text-18 md:mt-4 md:max-w-[640px] sm:mt-3 sm:text-14 sm:tracking-normal">
          Leverage a huge variety of features to level up your data and AI game!
        </p>
        <div className="relative mt-[72px] flex max-w-[1280px] items-center md:mt-[60px] sm:mt-[35px]">
          <span className="absolute left-1/2 top-0 z-10 h-full w-1 -translate-x-1/2 bg-[url('/images/svgs/line.inline.svg')] bg-repeat-y before:absolute before:left-1/2 before:h-[120px] before:w-[30px] before:-translate-x-1/2 before:bg-gradient-to-b before:from-black before:to-transparent after:absolute after:bottom-0 after:left-1/2 after:h-[120px] after:w-[30px] after:-translate-x-1/2 after:bg-gradient-to-t after:from-black after:to-transparent sm:hidden" />
          <ul className="flex flex-col gap-y-16 pb-[57px] md:gap-y-[47px]">
            {items.map(({ title, text, image }, index) => (
              <li
                className={clsx('flex items-center sm:flex-col sm:items-start sm:gap-y-4', {
                  'flex-row-reverse': index % 2 !== 0,
                })}
                key={title}
              >
                <div
                  className={`w-1/2 sm:w-full ${
                    index % 2 === 0
                      ? 'pr-20 lg:pr-12 md:pr-[15px] sm:p-0'
                      : 'pl-20 lg:pl-12 md:pl-[15px] sm:p-0'
                  }`}
                >
                  <Image src={image} alt={`${title}-image.jpg`} className="" />
                </div>
                <span className="z-10 mr-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[1px] border-[#2A2A2D] bg-[#18181B] px-1.5 py-2 text-16 text-grey-80 sm:hidden">
                  {index + 1}
                </span>
                <div
                  className={`w-1/2 sm:w-full ${
                    index % 2 === 0
                      ? 'pl-20 lg:pl-12 md:pl-[15px] sm:p-0'
                      : 'pr-20 lg:pr-12 md:pr-[15px] sm:p-0'
                  }`}
                >
                  <h3 className="text-20 font-medium leading-dense tracking-tight lg:text-18 sm:text-16">
                    {title}
                  </h3>
                  <p className="mt-3 leading-snug text-grey-70 md:text-14 md:leading-normal sm:mt-[9px]">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;
