import Image from 'next/image';

import awsSageMaker from '@/svgs/pages/home/integrations/aws-sage-maker.svg';
import databricks from '@/svgs/pages/home/integrations/databricks.svg';
import dataiku from '@/svgs/pages/home/integrations/dataiku.svg';
import googleColab from '@/svgs/pages/home/integrations/google-colab.svg';

const CARDS = [
  {
    icon: googleColab,
    title: 'Google Colab',
  },
  {
    icon: databricks,
    title: 'Databricks',
  },
  {
    icon: awsSageMaker,
    title: 'AWS SageMaker',
  },
  {
    icon: dataiku,
    title: 'Dataiku',
  },
];

function Integrations() {
  return (
    <section className="integrations pt-40 px-safe">
      <div className="container max-w-[776px] text-center">
        <p className="leading-snug text-primary-red">Integrations</p>
        <h2 className="mt-5 text-56 font-semibold leading-dense tracking-tight">
          Beyond the basics
        </h2>
        <p className="mx-auto mt-5 max-w-[592px] text-18 font-light text-white/80">
          Whether standalone or paired, Taipy connects effortlessly with leading data platforms,
          amplifying your application&apos;s potential.
        </p>
        <div className="mt-11 grid grid-cols-12 gap-x-6">
          {CARDS.map(({ icon, title }, index) => (
            <div
              className="col-span-3 rounded-lg bg-[linear-gradient(180deg,#2A2A2D_0%,rgba(42,42,45,0.5)_4.86%,rgba(42,42,45,0.4)_16.55%)] p-px"
              key={index}
            >
              <div className="rounded-lg bg-[linear-gradient(204.2deg,#222225_-7.76%,#111113_84.5%)] pb-6 pt-[34px]">
                <Image className="mx-auto" src={icon} width={56} height={56} alt={title} />
                <p className="mt-[27px] text-center text-14 font-light leading-snug text-grey-70">
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
