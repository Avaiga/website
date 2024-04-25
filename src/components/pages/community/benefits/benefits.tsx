import Image from 'next/image';

import bug from '@/images/pages/community/benefits/bug.svg';
import bulb from '@/images/pages/community/benefits/bulb.svg';
import docs from '@/images/pages/community/benefits/docs.svg';
import info from '@/images/pages/community/benefits/info.svg';
import mic from '@/images/pages/community/benefits/mic.svg';
import palette from '@/images/pages/community/benefits/palette.svg';

import Link from '@/components/shared/link';

const CARDS = [
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

function Hero() {
  return (
    <section className="hero mt-[184px]">
      <div className="container max-w-7xl">
        <h2 className="text-56 font-semibold leading-dense tracking-tight">Other ways to help</h2>
        <div className="mt-14 grid grid-cols-6 gap-x-16 gap-y-14">
          {CARDS.map(({ icon, title, description, link }, index) => (
            <div key={index} className="col-span-2">
              <Image className="mb-[26px] w-10 shrink-0" src={icon} width={40} height={40} alt="" />
              <h3 className="mb-[5px] text-24 font-medium">{title}</h3>
              <p className="mb-2.5 text-18 font-light text-grey-70">{description}</p>
              <Link className="text-16 leading-snug" href={link} theme="white" arrowTheme="red">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
