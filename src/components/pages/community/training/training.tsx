import iconLayout from '@/images/pages/community/training/number-layout.svg';

import Button from '@/components/shared/button';

const trainingData = [
  {
    title: 'Submit your participation project',
    description:
      'Let us know which feature you would like to work on first. You can choose from all the existing features in our pipeline or propose your own.',
  },
  {
    title: 'Start your project with your mentor.',
    description:
      'Onboard and start working on your project under the supervision of your mentor for at least two weeks. Get trained by the bests!',
  },
  {
    title: 'Go on autonomously, success and go further.',
    description:
      'After onboarding, continue to work autonomously, fulfill your project or start another one! You will be able to contact your mentor throughout the project.',
  },
];

function Training() {
  return (
    <section className="training pt-[182px] lg:pt-28 md:pt-20">
      <div className="container flex max-w-7xl">
        <div className="basis-1/2">
          <span className="text-16 leading-normal text-primary-red">Join the Community</span>
          <h2 className="mt-5 max-w-[512px] text-40 font-medium leading-dense tracking-tight">
            Get personalized training with an expert mentor!
          </h2>
          <p className="mt-4 max-w-[544px] text-18 font-light leading-snug tracking-snug text-grey-70">
            Join Taipy&apos;s development community today! Your contributions are greatly
            appreciated and will be duly acknowledged. Don&apos;t hesitate to lend your help and be
            part of the Taipy adventure!
          </p>
          <Button className="mt-8" size="lg" theme="red-filled" href="/">
            Get started
          </Button>
        </div>
        <div className="relative left-[2.5%] basis-1/2">
          <span className="absolute top-0 z-10 h-full w-1 bg-[url('/images/svgs/line.inline.svg')] bg-repeat-y before:absolute before:left-1/2 before:h-[30px] before:w-[10px] before:-translate-x-1/2 before:bg-gradient-to-b before:from-black before:to-transparent after:absolute after:bottom-0 after:left-1/2 after:h-[30px] after:w-[10px] after:-translate-x-1/2 after:bg-gradient-to-t after:from-black after:to-transparent sm:hidden" />
          <ul className="mt-[46px] flex flex-col gap-y-14">
            {trainingData.map(({ title, description }, index) => (
              <li className="flex items-start gap-x-12" key={index}>
                <div className="flex shrink-0 items-center gap-x-7">
                  <div className="relative h-1.5 w-1.5 rounded-full bg-primary-red before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-primary-red before:shadow-icon" />
                  <div className="relative">
                    <img
                      className="w-12 shrink-0"
                      src={iconLayout}
                      alt=""
                      loading="lazy"
                      width={48}
                      height={48}
                    />
                    <span className="absolute left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 bg-digit-gradient bg-clip-text text-24 font-bold leading-normal text-transparent">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-20 font-medium leading-snug">{title}</h3>
                  <p className="mt-4 font-light leading-normal text-grey-70">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Training;
