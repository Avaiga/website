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
    <section className="benefits mt-[196px] px-safe lg:mt-32 md:mt-24">
      <div className="container flex max-w-7xl gap-x-7 lg:gap-x-8 md:flex-wrap md:justify-center">
        <div className="max-w-[452px] shrink-0 grow lg:max-w-[352px] md:max-w-full md:text-center ">
          <span className="leading-snug text-primary-red md:text-14">Personas</span>
          <h2 className="mt-5 text-48 font-semibold leading-dense tracking-tight lg:mt-4 lg:text-40 md:mx-auto md:max-w-[484px] md:text-36">
            Who can benefit from Taipy&apos;s&nbsp;tools and capabilities?
          </h2>
        </div>
        <div className="mt-[42px] grid grid-cols-2 gap-x-[75px] gap-y-14 lg:mt-9 lg:gap-x-12 lg:gap-y-9 md:mt-10 md:max-w-xl md:gap-x-8">
          {CARDS.map(({ icon, title, description }, index) => (
            <div key={index}>
              <div className="flex gap-x-3 lg:gap-x-2.5">
                <Image
                  className="lg:mt-1 lg:h-5 lg:w-5"
                  src={icon}
                  width={24}
                  height={24}
                  alt={title}
                />
                <h3 className="text-24 font-medium lg:text-20 lg:leading-snug">{title}</h3>
              </div>
              <p className="mt-2 text-18 font-light text-grey-70 lg:mt-2.5 lg:text-14">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
