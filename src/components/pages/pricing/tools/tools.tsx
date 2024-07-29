'use client';

import { ROUTES } from '@/constants/routes';

import { ToolsProps } from '@/types/pricing-page';

import paintIcon from '@/svgs/pages/pricing/tools/paint.svg';
import passwordIcon from '@/svgs/pages/pricing/tools/password.svg';
import roadmapIcon from '@/svgs/pages/pricing/tools/roadmap.svg';
import routeIcon from '@/svgs/pages/pricing/tools/route.svg';
import serverRackIcon from '@/svgs/pages/pricing/tools/server-rack.svg';
import speedIndicatorIcon from '@/svgs/pages/pricing/tools/speed-indicator.svg';
import supportIcon from '@/svgs/pages/pricing/tools/support.svg';
import surveyIcon from '@/svgs/pages/pricing/tools/survey.svg';
import userFocusIcon from '@/svgs/pages/pricing/tools/user-focus.svg';

import ToolBlock from './tool-block';

export enum Gradient {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}
const cardsLogos = [
  supportIcon,
  paintIcon,
  routeIcon,
  passwordIcon,
  userFocusIcon,
  serverRackIcon,
  speedIndicatorIcon,
  surveyIcon,
  roadmapIcon,
];

function Tools({ cards }: ToolsProps) {
  return (
    <section className="tools mt-6 lg:mt-14 md:mt-12 sm:mt-10">
      <div className="container relative flex max-w-[1088px] flex-col items-center">
        <ul className="relative mt-10 grid grid-cols-3 gap-x-8 gap-y-[30px] lg:gap-x-6 lg:gap-y-6 md:mt-8 md:max-w-[640px] md:grid-cols-2 xs:mt-6 xs:grid-cols-1 xs:gap-y-5">
          {cards.slice(0, 3).map(({ title: cardTitle, subtitle, linkText }, index) => (
            <ToolBlock
              gradient={[Gradient.Left, Gradient.Center, Gradient.Right][index]}
              title={cardTitle}
              description={subtitle}
              logo={cardsLogos[index]}
              link={linkText ? { linkText, href: ROUTES.DESIGNER } : undefined}
              key={index}
            />
          ))}
          {cards.slice(3).map(({ title: cardTitle, subtitle, linkText }, index) => (
            <ToolBlock
              title={cardTitle}
              description={subtitle}
              logo={cardsLogos[(index + 3) % cardsLogos.length]}
              link={linkText ? { linkText, href: ROUTES.DESIGNER } : undefined}
              key={index + 3}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Tools;
