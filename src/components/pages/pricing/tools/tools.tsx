'use client';

import type { ImageProps } from 'next/image';

import playgroundImage from '@/images/pages/pricing/tools/playground.png';

import paintIcon from '@/svgs/pages/pricing/tools/paint.svg';
import passwordIcon from '@/svgs/pages/pricing/tools/password.svg';
import roadmapIcon from '@/svgs/pages/pricing/tools/roadmap.svg';
import serverRackIcon from '@/svgs/pages/pricing/tools/server-rack.svg';
import speedIndicatorIcon from '@/svgs/pages/pricing/tools/speed-indicator.svg';
import supportIcon from '@/svgs/pages/pricing/tools/support.svg';
import surveyIcon from '@/svgs/pages/pricing/tools/survey.svg';
import userFocusIcon from '@/svgs/pages/pricing/tools/user-focus.svg';

import Heading from '../heading';
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
    logo: paintIcon,
    title: 'Taipy Designer',
    description: 'Simple drag-n-drop constructor.',
    image: {
      src: playgroundImage,
      alt: 'Taipy playground',
      width: 408,
      height: 210,
      className:
        'absolute right-2.5 top-0 lg:top-[-2px] shrink-0 lg:max-w-[380px] sm:max-w-[307px] sm:bottom-[-5px] sm:r-2 sm:top-auto',
    },
  },
  {
    logo: supportIcon,
    title: 'Customer Support',
    description: 'Personalized assistance and ticketing system.',
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
    <section className="tools mt-[168px] lg:mt-[128px] md:mt-[98px] sm:mt-[78px]">
      <div className="container flex max-w-[1088px] flex-col items-center">
        <span className="text-16 leading-normal text-primary-red md:text-14">Features</span>
        <Heading className="mt-4 sm:mt-3" text="Advanced tools for enterprise" />
        <p className="mt-[18px] max-w-[640px] text-center text-18 font-light leading-normal text-grey-70 lg:max-w-[586px] lg:text-16 md:max-w-[495px] md:text-14 sm:mt-3.5 sm:max-w-[293px]">
          Experience the difference with Taipy&apos;s unique tools, designed to support developers
          in building projects.
        </p>
        <ul className="relative mt-10 grid grid-cols-3 gap-x-8 gap-y-[30px] lg:gap-x-6 lg:gap-y-6 md:mt-8 md:max-w-[640px] md:grid-cols-2 sm:mt-6 sm:grid-cols-1 sm:gap-y-5">
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
                key={index}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Tools;
