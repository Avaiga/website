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
    title: 'Telemetry',
    text: 'Ensure your applications are not just running but thriving. Gain critical insights into performance & health, enabling proactive optimizations & maintenance.',
    image: telemetryImage,
  },
  {
    title: 'Distributed computing',
    text: 'Unlock unparalleled scalability and performance across multiple machines. Ideal for handling large datasets and complex computations efficiently.',
    image: distributedImage,
  },
];

function Features() {
  return (
    <section className="features mt-[183px] px-safe">
      <div className="container flex max-w-[1024px] flex-col items-center">
        <h2 className="text-48 font-medium leading-dense tracking-tight">Taipy Features</h2>
        <p className="mt-5 max-w-[656px] text-center text-18 leading-snug tracking-snug text-grey-70">
          Get flexible solutions that fit your environment and give you full control of your
          observability data.
        </p>
        <div className="relative mt-[72px] flex max-w-[1280px] items-center">
          <span className="absolute left-1/2 top-0 z-10 h-full w-1 -translate-x-1/2 bg-[url('/images/svgs/line.inline.svg')] bg-repeat-y before:absolute before:left-1/2 before:h-[120px] before:w-[120px] before:-translate-x-1/2 before:bg-gradient-to-b before:from-black before:to-transparent after:absolute after:bottom-0 after:left-1/2 after:h-[120px] after:w-[120px] after:-translate-x-1/2 after:bg-gradient-to-t after:from-black after:to-transparent" />
          <ul className="flex flex-col gap-y-16 pb-[57px]">
            {items.map(({ title, text, image }, index) => (
              <li
                className={clsx('flex items-center', { 'flex-row-reverse': index % 2 !== 0 })}
                key={title}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-20' : 'pl-20'}`}>
                  <Image src={image} alt={`${title} image`} className="" />
                </div>
                <span className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-circle-enterprise text-16 text-grey-80">
                  {index + 1}
                </span>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-20' : 'pr-20'}`}>
                  <h3 className="text-20 font-medium leading-dense tracking-tight">{title}</h3>
                  <p className="mt-3 leading-snug text-grey-70">{text}</p>
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
