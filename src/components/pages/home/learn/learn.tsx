import Image from 'next/image';

import customizeStyles from '@/images/pages/home/learn/customize-styles.png';
import explore from '@/images/pages/home/learn/explore.png';
import longJobs from '@/images/pages/home/learn/long-jobs.png';
import multiUsers from '@/images/pages/home/learn/multi-users.png';
import scenarios from '@/images/pages/home/learn/scenarios.png';
import tasksScheduler from '@/images/pages/home/learn/tasks-scheduler.png';
import clsx from 'clsx';

import Link from '@/components/shared/link';

const CARDS = [
  {
    title: 'Scenarios made easy with Taipy Studio.',
    description: 'A powerful VS Code extension that unlocks a convenient graphical editor.',
    descriptionSpacing: 'pl-7 pr-16 pt-7 lg:pt-6 lg:pr-6 lg:pl-6',
    image: {
      url: scenarios,
      width: 656,
      height: 268,
      className: 'left-0 bottom-0 lg:max-w-[calc(100%+26px)] lg:left-[-7px]',
    },
    size: 'col-span-6',
  },
  {
    title: 'Tasks Scheduler.',
    description: 'Get your methods invoked at a certain time or intervals.',
    descriptionSpacing: 'pl-7 pr-7 pt-7 lg:pt-6 lg:pr-3 lg:pl-6',
    image: {
      url: tasksScheduler,
      width: 312,
      height: 299,
      className: 'left-0 bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:max-w-[calc(100%+14px)]',
    },
    size: 'col-span-3',
  },
  {
    title: 'Customize styles.',
    description: 'Enjoy variety of predefined themes or build your own.',
    descriptionSpacing: 'pl-7 pr-7 pt-7 lg:pt-6 lg:pr-3 lg:pl-6',
    image: {
      url: customizeStyles,
      width: 250,
      height: 238,
      className:
        'bottom-8 left-[30px] max-w-[calc(100%-60px)] lg:max-w-[calc(100%-32px)] lg:left-[20px] lg:bottom-[22px]',
    },
    size: 'col-span-3',
  },
  {
    title: 'Multi-users.',
    description: 'Each end-user has his own state enabling multi-user support.',
    descriptionSpacing: 'pl-7 pr-7 pt-7 lg:pt-6 lg:pr-3 lg:pl-6',
    image: {
      url: multiUsers,
      width: 241,
      height: 186,
      className:
        'bottom-[55px] left-[34px] max-w-[calc(100%-68px)] lg:max-w-[calc(100%-40px)] lg:left-[26px] lg:bottom-[42px]',
    },
    size: 'col-span-3',
  },
  {
    title: 'Long jobs.',
    description: 'Run heavy tasks in the background without slowing down experience.',
    descriptionSpacing: 'pl-7 pr-[26px] pt-7 lg:pt-6 lg:pr-2 lg:pl-6',
    image: {
      url: longJobs,
      width: 312,
      height: 400,
      className:
        'bottom-0 left-0 lg:left-1/2 lg:-translate-x-1/2 lg:max-w-[calc(100%+26px)] lg:-bottom-2',
    },
    size: 'col-span-3',
  },
  {
    title: 'Explore datasets with TalkToTaipy.',
    description:
      'Leverage the LLM-based application to explore datasets using only natural languages.',
    descriptionSpacing: 'pl-7 pr-[42px] pt-7 lg:pt-6 lg:pr-6 lg:pl-6',
    image: {
      url: explore,
      width: 656,
      height: 400,
      className: 'bottom-0 left-0 lg:max-w-[calc(100%+25px)]',
    },
    size: 'col-span-6',
  },
];

function Learn() {
  return (
    <section className="learn mt-[200px] px-safe lg:mt-32">
      <div className="container">
        <h2 className="mx-auto max-w-[790px] text-center text-56 font-semibold leading-dense tracking-tight lg:max-w-[500px] lg:text-48">
          Easy to learn, pleasure&nbsp;to&nbsp;work&nbsp;with
        </h2>
        <div className="mt-14 grid grid-cols-12 grid-rows-[400px_400px] gap-8 lg:grid-rows-[300px_300px] lg:gap-6">
          {CARDS.map(({ title, description, image, size, descriptionSpacing }, index) => (
            <div
              className={clsx(
                size,
                'rounded-lg bg-[linear-gradient(180deg,#2A2A2D_0%,rgba(42,42,45,0.5)_4.86%,rgba(42,42,45,0.4)_16.55%)] p-px lg:overflow-hidden',
              )}
              key={index}
            >
              <div className="relative h-full rounded-lg bg-grey-10">
                <Image
                  className={clsx('pointer-events-none absolute', image.className)}
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt={title}
                />
                <p
                  className={clsx(
                    descriptionSpacing,
                    'relative text-18 font-medium leading-snug text-grey-70 lg:text-14 lg:font-normal',
                  )}
                >
                  <span className="text-white lg:font-medium">{title}</span> {description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* TODO: remove lg:hidden before review */}
        <div className="mt-10 flex justify-center lg:hidden">
          <Link href="/" size="md" theme="white" arrowTheme="red">
            See all demos
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Learn;
