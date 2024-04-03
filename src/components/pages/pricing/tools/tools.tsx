'use client';

import type { ImageProps } from 'next/image';

import playgroundImage from '@/images/pages/pricing/tools/playground.png';

import Button from '@/components/shared/button';

import ArrowIcon from '@/svgs/icons/arrow.inline.svg';
import paintIcon from '@/svgs/pages/pricing/tools/paint.svg';
import passwordIcon from '@/svgs/pages/pricing/tools/password.svg';
import roadmapIcon from '@/svgs/pages/pricing/tools/roadmap.svg';
import serverRackIcon from '@/svgs/pages/pricing/tools/server-rack.svg';
import speedIndicatorIcon from '@/svgs/pages/pricing/tools/speed-indicator.svg';
import supportIcon from '@/svgs/pages/pricing/tools/support.svg';
import surveyIcon from '@/svgs/pages/pricing/tools/survey.svg';
import userFocusIcon from '@/svgs/pages/pricing/tools/user-focus.svg';

import ToolBlock from './tool-block';

const gradient = {
  left: 'left',
  center: 'center',
  right: 'right',
} as const;

export type Tool = {
  logo: string;
  title: string;
  description: string;
  image?: ImageProps;
  gradient?: keyof typeof gradient;
};

const toolBlocks: Tool[] = [
  {
    logo: supportIcon,
    title: 'Customer Support',
    description: 'Personalized assistance and ticketing system.',
  },
  {
    logo: paintIcon,
    title: 'Taipy Designer',
    description: 'Simple drag-n-drop constructor.',
    image: {
      src: playgroundImage,
      alt: 'Taipy playground',
      width: 408,
      height: 210,
      className: 'absolute right-3.5 top-0 shrink-0',
    },
  },
  {
    logo: passwordIcon,
    title: 'Authentication',
    description: 'Applications security with SSO feature.',
  },
  {
    logo: userFocusIcon,
    title: 'Authorization',
    description: 'Profile management with ACL-based authorization.',
  },
  {
    logo: serverRackIcon,
    title: 'Data management',
    description: 'MongoDB support for efficient data handling.',
  },
  {
    logo: speedIndicatorIcon,
    title: 'Distributed computing',
    description: 'Optimal performance and scalability.',
    gradient: 'right',
  },
  {
    logo: surveyIcon,
    title: 'Telemetry',
    description: 'Valuable insights into application performance.',
    gradient: 'center',
  },
  {
    logo: roadmapIcon,
    title: 'Job Scheduler',
    description: 'Efficient task scheduling and parallel execution.',
    gradient: 'left',
  },
];

function Tools() {
  return (
    <section className="tools mb-[169px] mt-[165px]">
      <div className="container flex max-w-[1092px] flex-col items-center">
        <div className="flex flex-col items-center text-center">
          <p className="text-16 leading-snug text-primary-red">Features</p>
          <h2 className="mt-3.5 text-56 font-semibold leading-[1.125] tracking-tight">
            Advanced tools for enterprise
          </h2>
          <p className="mt-[18px] max-w-[640px] text-18 leading-snug text-grey-70">
            Experience the difference with Taipy&apos;s unique tools, designed to support developers
            in building projects.
          </p>
        </div>
        <div className="relative mt-10 grid grid-cols-3 gap-x-8 gap-y-[30px]">
          {toolBlocks.map(({ title, description, logo, image }, index) => {
            const gradientState = {
              [toolBlocks.length - 1]: gradient.left,
              [toolBlocks.length - 2]: gradient.center,
              [toolBlocks.length - 3]: gradient.right,
            };

            return (
              <ToolBlock
                gradient={gradientState[index]}
                title={title}
                description={description}
                logo={logo}
                image={image}
                key={`${title}-${index}`}
              />
            );
          })}
        </div>
        <Button size="lg" theme="outline" className="mt-[46px] flex items-center gap-x-2.5">
          <span>See comparison table</span>
          <ArrowIcon className="h-2.5 w-2.5" />
        </Button>
      </div>
    </section>
  );
}

export default Tools;
