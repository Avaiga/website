import { SVGProps } from 'react';

import CollaborationIcon from '@/svgs/pages/about-us/our-history/collaboration.inline.svg';
import UsersIcon from '@/svgs/pages/about-us/our-history/users.inline.svg';
import PythonIcon from '@/svgs/pages/home/benefits/python.inline.svg';

type ExtendedSVGProps<T extends SVGElement> = SVGProps<T> & {
  alt?: string;
};

type historyListProps = {
  logo: React.FunctionComponent<ExtendedSVGProps<SVGSVGElement>>;
  alt: string;
  heading: string;
  text: string;
};

const historyListData: historyListProps[] = [
  {
    logo: CollaborationIcon,
    alt: 'Collaborative data processing',
    heading: 'Collaborative data processing',
    text: "It is at the heart of Taipy's approach, involving a diverse team of experts including Data Scientists, Data Engineers, GUI developers, and MLOps specialists. Gartner's research underscores the enduring significance of Python in this realm, revealing that over 85% of Python-based pilot projects retain their pilot status.",
  },
  {
    logo: PythonIcon,
    alt: 'Python tools for full-stack development',
    heading: 'Python tools for full-stack development',
    text: 'Taipy provides both frontend and backend components, enabling full-stack development in Python. The frontend allows for easy creation of GUI using Markdown language, while the backend schedules tasks and optimizes performance for efficient full-stack development',
  },
  {
    logo: UsersIcon,
    alt: 'User-centric approach',
    heading: 'User-centric approach',
    text: "User-centricity guides Taipy's approach, which addresses the dearth of Python tools spanning both front-end and back-end development. Python's rapid learning curve and robust application-building capabilities further accentuate its suitability for this purpose.",
  },
];

export default function HistoryList() {
  return (
    <ul className="flex flex-col gap-7 pt-[45px] lg:gap-6">
      {historyListData.map(({ logo: Logo, heading, text, alt }, index) => (
        <li key={index}>
          <div className="flex items-center gap-3 lg:items-start">
            <Logo className="h-[24px] w-[24px] fill-white lg:mt-1.5" alt={alt} />
            <h3 className="text-24 font-medium leading-normal lg:leading-tight">{heading}</h3>
          </div>
          <p className="pt-2 font-light leading-normal text-grey-70">{text}</p>
        </li>
      ))}
    </ul>
  );
}
