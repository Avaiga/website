import Image from 'next/image';

import bug from '@/images/pages/community/benefits/bug.svg';
import bulb from '@/images/pages/community/benefits/bulb.svg';
import docs from '@/images/pages/community/benefits/docs.svg';
import info from '@/images/pages/community/benefits/info.svg';
import mic from '@/images/pages/community/benefits/mic.svg';
import palette from '@/images/pages/community/benefits/palette.svg';

import Link from '@/components/shared/link';

const benefitsData = [
  {
    icon: palette,
    title: 'Create content',
    description: 'Help others discover Taipy with videos and blog articles.',
    link: '/',
  },
  {
    icon: mic,
    title: 'Present at meetups',
    description: 'Share your experience and represent Taipy in public meetups.',
    link: '/',
  },
  {
    icon: bug,
    title: 'Report bugs',
    description: 'Identify any bugs within the codebase and submit pull requests to rectify them',
    link: '/',
  },
  {
    icon: bulb,
    title: 'Submit new ideas',
    description: 'Suggest features, integrations, or SDKs for our roadmap.',
    link: '/',
  },
  {
    icon: docs,
    title: 'Improve documentation',
    description: 'Share your experience and represent Taipy in public',
    link: '/',
  },
  {
    icon: info,
    title: 'Helping others',
    description: 'Support developers with their projects and contributions',
    link: '/',
  },
];

function Benefits() {
  return (
    <section className="benefits mt-[184px] lg:mt-[142px] md:mt-[122px] sm:mt-[83px]">
      <div className="container max-w-7xl">
        <h2 className="text-56 font-semibold leading-dense tracking-tight lg:text-48 md:text-40 sm:text-32">
          Other ways to help
        </h2>
        <div className="mt-14 grid grid-cols-6 gap-x-20 gap-y-[52px] lg:gap-x-24 lg:gap-y-[50px] md:mt-[49px] md:gap-x-[70px] md:gap-y-[42px] sm:mt-11 sm:gap-x-4 sm:gap-y-10">
          {benefitsData.map(({ icon, title, description, link }, index) => (
            <div key={index} className="col-span-2 md:col-span-3 xs:col-span-full">
              <Image
                className="mb-[26px] w-10 shrink-0 lg:mb-[22px] lg:w-9 md:mb-3 sm:w-8"
                src={icon}
                width={40}
                height={40}
                alt=""
              />
              <h3 className="mb-[5px] text-24 font-medium lg:text-20 sm:mb-0.5 sm:text-18">
                {title}
              </h3>
              <p className="mb-2.5 text-18 font-light text-grey-70 lg:text-16 md:mb-1.5 sm:pr-11 sm:text-14">
                {description}
              </p>
              <Link
                className="text-16 leading-snug sm:text-14"
                href={link}
                theme="white"
                arrowTheme="red"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
