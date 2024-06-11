'use client';

import type { Route } from 'next';

import { ROUTES } from '@/constants/routes';

import paintIcon from '@/svgs/pages/enterprise/tools/paint.svg';
import passwordIcon from '@/svgs/pages/enterprise/tools/password.svg';
import roadmapIcon from '@/svgs/pages/enterprise/tools/roadmap.svg';
import routeIcon from '@/svgs/pages/enterprise/tools/route.svg';
import serverRackIcon from '@/svgs/pages/enterprise/tools/server-rack.svg';
import speedIndicatorIcon from '@/svgs/pages/enterprise/tools/speed-indicator.svg';
import supportIcon from '@/svgs/pages/enterprise/tools/support.svg';
import surveyIcon from '@/svgs/pages/enterprise/tools/survey.svg';
import userFocusIcon from '@/svgs/pages/enterprise/tools/user-focus.svg';

import ToolBlock from './tool-block';

const gradient = {
  left: 'left',
  center: 'center',
  right: 'right',
} as const;

interface Link {
  linkText: string;
  href: URL | Route<string>;
}

export type Tool = {
  logo: string;
  title: string;
  description: string;
  link?: Link;
  gradient?: keyof typeof gradient;
};

const toolBlocks: Tool[] = [
  {
    logo: supportIcon,
    title: 'Customer support',
    description: 'Personalized assistance and ticketing system.',
  },
  {
    logo: paintIcon,
    title: 'Taipy Designer',
    description: 'Simple drag-n-drop builder.',
    link: {
      linkText: 'Learn more',
      href: ROUTES.ABOUT_US,
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
    description: 'Robust scenario data management.',
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
  {
    logo: routeIcon,
    title: 'Scenario management',
    description: 'Unlimited amount of scenarios.',
  },
];

function Tools() {
  return (
    <section className="tools mt-6 lg:mt-14 md:mt-12 sm:mt-10">
      <div className="container relative flex max-w-[1088px] flex-col items-center">
        <ul className="relative mt-10 grid grid-cols-3 gap-x-8 gap-y-[30px] lg:gap-x-6 lg:gap-y-6 md:mt-8 md:max-w-[640px] md:grid-cols-2 sm:mt-6 sm:grid-cols-1 sm:gap-y-5">
          {toolBlocks.map(({ title, description, logo, link }, index) => {
            const gradientState: { [key: number]: keyof typeof gradient } = {
              0: gradient.left,
              1: gradient.center,
              2: gradient.right,
            };

            return (
              <ToolBlock
                gradient={gradientState[index]}
                title={title}
                description={description}
                logo={logo}
                link={link}
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
