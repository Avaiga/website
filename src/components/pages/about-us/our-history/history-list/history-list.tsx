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
    text: 'Including Data Scientists, Data Engineers, GUI developers, MLOps, as reported by Gartner saying that more than 85% of pilots developed in Python remain pilots.',
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
    text: 'A lack of Python tools for both front-end and back-end development. With a fast learning curve and robust application-building capabilities.',
  },
];

export default function HistoryList() {
  return (
    <ul className="flex flex-col gap-6 pt-10 md:gap-6 md:pt-[45px]">
      {historyListData.map(({ logo: Logo, heading, text, alt }, index) => (
        <li key={index}>
          <div className="flex items-center gap-3">
            <Logo className="h-[24px] w-[24px] fill-white" alt={alt} />
            <h3 className="text-24 font-medium leading-normal md:leading-tight">{heading}</h3>
          </div>
          <p className="pt-2 font-light leading-normal text-grey-70">{text}</p>
        </li>
      ))}
    </ul>
  );
}
