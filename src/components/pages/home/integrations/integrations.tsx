import Image from 'next/image';

import awsSageMaker from '@/svgs/pages/home/integrations/aws-sage-maker.svg';
import databricks from '@/svgs/pages/home/integrations/databricks.svg';
import dataiku from '@/svgs/pages/home/integrations/dataiku.svg';
import googleColab from '@/svgs/pages/home/integrations/google-colab.svg';
import ibmWatson from '@/svgs/pages/home/integrations/ibm-watson.svg';

const CARDS = [
  {
    icon: databricks,
    title: 'Databricks',
  },
  {
    icon: dataiku,
    title: 'Dataiku',
  },
  {
    icon: googleColab,
    title: 'Google Colab',
  },
  {
    icon: awsSageMaker,
    title: 'AWS SageMaker',
  },
  {
    icon: ibmWatson,
    title: 'IBM Watson',
  },
];

function Integrations() {
  return (
    <section className="integrations mt-[154px] px-safe lg:mt-[120px] md:mt-24 sm:mt-[76px]">
      <div className="container max-w-[986px] text-center">
        <span className="leading-snug text-primary-red md:text-14">Integrations</span>
        <h2 className="mt-5 text-56 font-semibold leading-dense tracking-tight lg:mt-4 lg:text-48 md:text-40 sm:mt-3 sm:text-28">
          Beyond the basics
        </h2>
        <p className="mx-auto mt-5 max-w-[592px] text-18 font-light text-white/80 lg:mt-4 lg:max-w-[502px] lg:text-16 md:max-w-md md:text-14 sm:mt-3">
          Whether standalone or paired, Taipy connects effortlessly with leading data platforms,
          amplifying your application&apos;s potential.
        </p>
        <div className="mt-11 grid grid-cols-5 gap-x-6 lg:mt-10 md:mx-auto md:mt-8 md:max-w-[600px] sm:mt-6 sm:max-w-[280px] sm:grid-cols-2 sm:gap-4">
          {CARDS.map(({ icon, title }, index) => (
            <div
              className="rounded-lg bg-[linear-gradient(180deg,#2A2A2D_0%,rgba(42,42,45,0.5)_4.86%,rgba(42,42,45,0.4)_16.55%)] p-px"
              key={index}
            >
              <div className="rounded-lg bg-[linear-gradient(204.2deg,#222225_-7.76%,#111113_84.5%)] pb-6 pt-[34px] md:pb-[19px] md:pt-[27px]">
                <Image
                  className="mx-auto md:h-[45px] md:w-[45px]"
                  src={icon}
                  width={56}
                  height={56}
                  alt={title}
                />
                <p className="mt-[27px] text-center text-14 font-light leading-snug text-grey-70 md:mt-[23px] md:text-12">
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Integrations;
