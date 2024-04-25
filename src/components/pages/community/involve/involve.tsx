import Image from 'next/image';

import discordIcon from '@/images/pages/community/invoke/discord.svg';
import docsIcon from '@/images/pages/community/invoke/doc.svg';
import githubIcon from '@/images/pages/community/invoke/github.svg';

import Link from '@/components/shared/link';

const locationsData = [
  {
    icon: docsIcon,
    heading: 'Documentation',
    text: 'Embark on your journey by creating your personalized account',
    link: '/',
    linkText: 'Get started',
  },
  {
    icon: discordIcon,
    heading: 'Join Discord',
    text: 'Immerse yourself in the community by joining our dedicated server',
    link: '/',
    linkText: 'Join discord',
  },
  {
    icon: githubIcon,
    heading: 'Fork And Work',
    text: 'Discover an issue within our project and make a valuable contribution',
    link: '/',
    linkText: 'Find an issue',
  },
];

function Involve() {
  return (
    <section className="involve mt-[92px]">
      <div className="container">
        <h2 className="text-center text-48 font-medium leading-dense tracking-tight lg:text-40 lg:font-semibold md:text-36 sm:text-24">
          Get involved: start, engage, contribute
        </h2>
        <div className="mx-auto mt-16 grid max-w-[968px] grid-cols-3 gap-x-16">
          {locationsData.map(({ icon, heading, text, link, linkText }, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <Image className="w-10" src={icon} width={40} height={40} alt="" />
                <h3 className="mt-6 text-24 font-medium leading-normal">{heading}</h3>
                <p className="mb-[17px] mt-3 text-center text-16 font-light leading-normal text-grey-70">
                  {text}
                </p>
                <Link className="text-16 leading-snug" href={link} theme="white" arrowTheme="red">
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
