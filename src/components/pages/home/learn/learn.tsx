import Image from 'next/image';

import customizeStyles from '@/images/pages/home/learn/customize-styles.png';
import explore from '@/images/pages/home/learn/explore.png';
import longJobs from '@/images/pages/home/learn/long-jobs.png';
import multiUsers from '@/images/pages/home/learn/multi-users.png';
import scenarios from '@/images/pages/home/learn/scenarios.png';
import tasksScheduler from '@/images/pages/home/learn/tasks-scheduler.png';
import clsx from 'clsx';

const CARDS = [
  {
    title: 'Scenarios made easy with Taipy Studio.',
    description: 'A powerful VS Code extension that unlocks a convenient graphical editor.',
    image: {
      url: scenarios,
      width: 656,
      height: 268,
      className:
        'left-0 bottom-0 md:-bottom-3 sm:max-w-none sm:w-[527px] sm:left-[-32px] sm:bottom-0',
    },
    className: 'col-span-6 md:col-span-2 md:order-1 md:aspect-[1.882]',
  },
  {
    title: 'Tasks Scheduler.',
    description: 'Get your methods invoked at a certain time or intervals.',
    image: {
      url: tasksScheduler,
      width: 312,
      height: 299,
      className: 'left-0 bottom-0 sm:inset-x-0 sm:mx-auto sm:bottom-2.5 sm:w-[262px]',
    },
    className: 'col-span-3 md:col-span-1 md:order-2 md:aspect-[0.906]',
  },
  {
    title: 'Customize styles.',
    description: 'Enjoy a variety of predefined themes or build your own.',
    image: {
      url: customizeStyles,
      width: 250,
      height: 238,
      className:
        'bottom-8 px-[30px] left-0 lg:px-4 lg:left-1 lg:bottom-[22px] md:px-8 md:left-0 sm:w-52 sm:-left-1 sm:right-0 sm:mx-auto sm:bottom-8 sm:px-0',
    },
    className: 'col-span-3 md:col-span-1 md:order-3 md:aspect-[0.906]',
  },
  {
    title: 'Multi-users.',
    description: 'Each end-user has his own state enabling multi-user support.',
    image: {
      url: multiUsers,
      width: 241,
      height: 186,
      className:
        'bottom-[55px] px-[34px] left-0 lg:px-5 lg:left-1.5 lg:bottom-[42px] md:px-9 md:-left-0.5 sm:left-0 sm:px-11 sm:bottom-8',
    },
    className: 'col-span-3 md:col-span-1 md:order-5 md:aspect-[0.906]',
  },
  {
    title: 'Long jobs.',
    description: 'Run heavy tasks in the background without slowing down experience.',
    image: {
      url: longJobs,
      width: 312,
      height: 400,
      className: 'bottom-0 left-0 md:-bottom-8',
    },
    className: 'col-span-3 md:col-span-1 md:order-6 md:aspect-[0.906]',
  },
  {
    title: 'Explore datasets with TalkToTaipy.',
    description:
      'Leverage the LLM-based application to explore datasets using only natural languages.',
    image: {
      url: explore,
      width: 656,
      height: 400,
      className: 'bottom-0 left-0 sm:-bottom-5 sm:-left-5 sm:w-[540px] sm:max-w-none',
    },
    className: 'col-span-6 md:col-span-2 md:order-4 md:aspect-[1.882]',
  },
];

function Learn() {
  return (
    <section className="learn mt-[200px] px-safe lg:mt-32 md:mt-[114px] sm:mt-12">
      <div className="container">
        <h2 className="mx-auto max-w-[790px] text-center text-56 font-semibold leading-dense tracking-tight lg:max-w-[500px] lg:text-48 md:text-40 sm:text-28">
          Easy to learn, pleasure&nbsp;to&nbsp;work&nbsp;with
        </h2>
        <div className="mt-14 grid grid-cols-12 grid-rows-[400px_400px] gap-8 lg:grid-rows-[300px_300px] lg:gap-6 md:mt-10 md:grid-cols-2 md:grid-rows-4 md:px-8 sm:mt-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-5 sm:px-0">
          {CARDS.map(({ title, description, image, className }, index) => (
            <div
              className={clsx(
                className,
                'overflow-hidden rounded-lg bg-[linear-gradient(180deg,#2A2A2D_0%,rgba(42,42,45,0.5)_4.86%,rgba(42,42,45,0.4)_16.55%)] p-px sm:order-1 sm:aspect-square sm:max-w-xs',
              )}
              key={index}
            >
              <div className="relative h-full rounded-lg bg-grey-10 p-7 lg:p-6">
                <Image
                  className={clsx('pointer-events-none absolute w-full', image.className)}
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt={title}
                />
                <p className="relative text-18 font-medium leading-snug text-grey-70 lg:text-14 lg:font-normal">
                  <span className="text-white lg:font-medium">{title}</span> {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Learn;
