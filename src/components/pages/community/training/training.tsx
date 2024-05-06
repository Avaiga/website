import { ROUTE } from '@/constants/routes';
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
      'Onboard and start working on your project under the supervision of your mentor for at least two weeks. Get trained by the best!',
  },
  {
    title: 'Go on autonomously, succeed, and go further.',
    description:
      'After onboarding, continue to work autonomously, fulfill your project or start another one! You will be able to contact your mentor throughout the project.',
  },
];

function Training() {
  return (
    <section className="training pt-[182px] lg:pt-36 md:pb-[104px] md:pt-[117px] sm:pb-16 sm:pt-[88px]">
      <div className="container relative flex max-w-7xl md:flex-col md:items-center">
        <div className="flex basis-1/2 flex-col items-start md:items-center">
          <span className="text-16 leading-normal text-primary-red sm:text-14">
            Join the Community
          </span>
          <h2 className="mt-5 max-w-[430px] text-40 font-medium leading-dense tracking-tight lg:max-w-[394px] lg:text-36 md:max-w-[428px] md:text-center md:text-32 sm:mt-3.5 sm:max-w-[280px] sm:text-28">
            Get personalized onboarding with an expert mentor!
          </h2>
          <p className="mt-4 max-w-[544px] text-18 font-light leading-snug tracking-snug text-grey-70 lg:max-w-[457px] lg:text-16 md:text-center md:text-14 sm:mt-3">
            Join Taipy&apos;s development community today! Your contributions are greatly
            appreciated and will be duly acknowledged. Don&apos;t hesitate to lend your help and be
            part of the Taipy adventure!
          </p>
          <Button
            className="mt-8 md:absolute md:top-full md:w-[152px] sm:mt-6 sm:w-[141px]"
            size="lg"
            theme="red-filled"
            href={ROUTE.MENTORSHIP}
          >
            Get started
          </Button>
        </div>
        <div className="relative basis-1/2">
          <span className="absolute top-0 ml-[5%] h-full w-1 bg-[url('/images/svgs/line.inline.svg')] bg-repeat-y before:absolute before:left-1/2 before:h-[30px] before:w-[10px] before:-translate-x-1/2 before:bg-gradient-to-b before:from-black before:to-transparent after:absolute after:bottom-0 after:left-1/2 after:h-[30px] after:w-[10px] after:-translate-x-1/2 after:bg-gradient-to-t after:from-black after:to-transparent lg:ml-[6%] md:ml-0" />
          <ul className="mt-[46px] flex flex-col gap-y-14 pl-[5%] lg:gap-y-12 lg:pl-[6%] md:mt-14 md:pl-0 sm:mt-10 sm:gap-y-9">
            {trainingData.map(({ title, description }, index) => (
              <li className="flex items-start gap-x-12 lg:gap-x-11 sm:gap-x-[18px]" key={index}>
                <div className="flex shrink-0 items-center gap-x-7 lg:gap-x-6 sm:gap-x-3">
                  <div className="relative -left-[2%] h-1.5 w-1.5 rounded-full bg-primary-red before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-primary-red before:shadow-icon" />
                  <div className="relative">
                    <img
                      className="w-12 shrink-0 sm:w-8"
                      src={iconLayout}
                      alt=""
                      loading="lazy"
                      width={48}
                      height={48}
                    />
                    <span className="absolute left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 bg-digit-gradient bg-clip-text text-24 font-bold leading-normal text-transparent sm:text-16">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="max-w-[435px] lg:max-w-[328px] md:max-w-[456px] sm:max-w-[252px]">
                  <h3 className="text-20 font-medium leading-snug lg:text-18 sm:text-16">
                    {title}
                  </h3>
                  <p className="mt-4 font-light leading-normal text-grey-70 lg:mt-3.5 lg:text-14 sm:mt-2">
                    {description}
                  </p>
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
