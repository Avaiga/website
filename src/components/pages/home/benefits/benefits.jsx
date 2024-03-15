import Image from 'next/image';

import businessAnalystIcon from '@/svgs/pages/home/benefits/business-analyst.svg';
import cIcon from '@/svgs/pages/home/benefits/c.svg';
import dataScienceIcon from '@/svgs/pages/home/benefits/data-science.svg';
import pythonIcon from '@/svgs/pages/home/benefits/python.svg';

const CARDS = [
  {
    icon: dataScienceIcon,
    title: 'For Data Scientists',
    description:
      'Effortlessly visualize ML/AI models with Taipy. Integrates seamlessly with Streamlit and Gradio for quick insights.',
  },
  {
    icon: pythonIcon,
    title: 'For Python Developers',
    description:
      'Streamline full project development. Simplify GUI, backend, and DevOps tasks for efficient IT integration.',
  },
  {
    icon: cIcon,
    title: 'For C-suits',
    description:
      'Our solution supports your journey, seamlessly extending to augment your influence across the organization.',
  },
  {
    icon: businessAnalystIcon,
    title: 'For Business Analysts',
    description:
      'Integrate smoothly for deeper insights and informed decision-making across your organization.',
  },
];

function Benefits() {
  return (
    <section className="mt-[200px]">
      <div className="container flex max-w-[1215px] gap-x-7">
        <div className="max-w-[452px] shrink-0 grow">
          <p className="leading-snug text-primary-red">Personas</p>
          <h2 className="mt-5 text-48 font-semibold leading-dense tracking-tight">
            Who can benefit from Taipy&apos;s tools and capabilities?
          </h2>
        </div>
        <div className="mt-[42px] grid grid-cols-2 gap-x-[75px] gap-y-14">
          {CARDS.map(({ icon, title, description }, index) => (
            <div className="col-span-1" key={index}>
              <div className="flex gap-x-3">
                <Image src={icon} width={24} height={24} alt={title} />
                <h3 className="text-24 font-medium">{title}</h3>
              </div>
              <p className="mt-2 text-18 font-light text-grey-70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
