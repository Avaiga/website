import Image from 'next/image';

import { ROUTES } from '@/constants/routes';
import discordIcon from '@/images/pages/community/invoke/discord.svg';
import docsIcon from '@/images/pages/community/invoke/doc.svg';
import githubIcon from '@/images/pages/community/invoke/github.svg';

import Link from '@/components/shared/link';

const locationsData = [
  {
    icon: docsIcon,
    heading: 'Documentation',
    text: 'Get familiar with our library',
    link: ROUTES.DOCUMENTATION,
    linkText: 'Get started',
  },
  {
    icon: discordIcon,
    heading: 'Join Discord',
    text: 'Immerse yourself in the community by joining our dedicated server',
    link: ROUTES.DISCORD,
    linkText: 'Join Discord',
  },
  {
    icon: githubIcon,
    heading: 'Fork And Work',
    text: 'Discover an issue within our project and make a valuable contribution',
    link: 'https://github.com/Avaiga/taipy/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22',
    linkText: 'Find an issue',
  },
];

function Involve() {
  return (
    <section
      className="involve mt-[92px] scroll-mt-32 lg:mt-[26px] md:mt-[16px] sm:mt-[55px]"
      id="involve"
    >
      <div className="container">
        <h2 className="text-center text-48 font-medium leading-dense tracking-tight lg:text-40 lg:font-semibold md:text-32 sm:text-28">
          Get involved: start, engage, contribute
        </h2>
        <div className="mx-auto mt-16 grid max-w-[968px] grid-cols-3 gap-x-16 gap-y-12 lg:mt-14 lg:max-w-[896px] lg:gap-x-24 md:mt-11 md:max-w-[704px] md:gap-x-20 sm:mt-[52px] sm:max-w-[248px]">
          {locationsData.map(({ icon, heading, text, link, linkText }, index) => {
            return (
              <div key={index} className="flex flex-col items-center sm:col-span-full">
                <Image className="w-10 lg:w-9 sm:w-8" src={icon} width={40} height={40} alt="" />
                <h3 className="mt-6 text-24 font-medium leading-normal lg:mt-5 lg:text-20 sm:mt-4 sm:text-18">
                  {heading}
                </h3>
                <p className="mb-5 mt-3 text-center text-16 font-light leading-normal text-grey-70 lg:mt-2.5 lg:text-14 sm:mb-3.5 sm:mt-2">
                  {text}
                </p>
                <Link
                  className="text-15 leading-snug"
                  href={link}
                  theme="white"
                  arrowTheme="red"
                  target="_blank"
                >
                  {linkText}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Involve;
