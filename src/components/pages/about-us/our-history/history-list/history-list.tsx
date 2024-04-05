import Image from 'next/image';

import PythonIcon from '/src/svgs/pages/about-us/python.svg';

type historyListProps = {
  heading: string;
  text: string;
};

const historyListData: historyListProps[] = [
  {
    heading: 'Collaborative data processing',
    text: 'Including Data Scientists, Data Engineers, GUI developers, MLOps, as reported by Gartner saying that more than 85% of pilots developed in Python remain pilots.',
  },
  {
    heading: 'Python tools for full-stack development',
    text: 'Taipy provides both frontend and backend components, enabling full-stack development in Python. The frontend allows for easy creation of GUI using Markdown language, while the backend schedules tasks and optimizes performance for efficient full-stack development',
  },
  {
    heading: 'User-centric approach',
    text: 'A lack of Python tools for both front-end and back-end development. With a fast learning curve and robust application-building capabilities.',
  },
];

export default function HistoryList() {
  return (
    <ul className="flex flex-col gap-6 pt-10">
      {historyListData.map((item, index) => (
        <li key={index}>
          <div className="flex gap-3">
            <Image src={PythonIcon} width={24} height={24} quality={70} alt=".Python Icon" />
            <h3 className="text-24 font-medium leading-normal">{item.heading}</h3>
          </div>
          <p className="pt-2 font-light leading-normal text-grey-70">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
