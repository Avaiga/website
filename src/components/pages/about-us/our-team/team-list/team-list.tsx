import Image from 'next/image';

import TeamMember from '@/images/pages/about-us/team/1-team.png';
import TeamMember2 from '@/images/pages/about-us/team/2-team.png';
import TeamMember3 from '@/images/pages/about-us/team/3-team.png';
import TeamMember4 from '@/images/pages/about-us/team/4-team.png';
import TeamMember5 from '@/images/pages/about-us/team/5-team.jpg';
import TeamMember6 from '@/images/pages/about-us/team/6-team.png';
import TeamMember7 from '@/images/pages/about-us/team/7-team.jpg';
import TeamMember8 from '@/images/pages/about-us/team/8-team.png';
import TeamMember9 from '@/images/pages/about-us/team/9-team.png';
import TeamMember10 from '@/images/pages/about-us/team/10-team.png';
import TeamMember11 from '@/images/pages/about-us/team/11-team.png';
import TeamMember12 from '@/images/pages/about-us/team/12-team.png';
import TeamMember13 from '@/images/pages/about-us/team/13-team.jpg';

const teamListData = [
  {
    photo: TeamMember,
    name: 'Vincent Gosselin 🇫🇷',
    position: 'Future Intranet Manager',
    alt: 'Vincent Gosselin',
    flagAlt: 'France flag',
  },
  {
    photo: TeamMember2,
    name: 'Albert Antoine 🇸🇬',
    position: 'Head of Marketing',
    alt: 'Albert Antoine',
    flagAlt: 'Greate Britain flag',
  },
  {
    photo: TeamMember3,
    name: 'Fabien Lelaquais 🇫🇷',
    position: 'Head of Product',
    alt: 'Fabien Lelaquais',
    flagAlt: 'France flag',
  },
  {
    photo: TeamMember4,
    name: 'Jean-Robin Medori 🇺🇸',
    position: 'Chief Architect',
    alt: 'Jean-Robin Medori',
    flagAlt: 'United States flag',
  },
  {
    photo: TeamMember5,
    name: 'Myriam Delarue 🇫🇷',
    position: 'Head of Product',
    alt: 'Myriam Delarue',
    flagAlt: 'Singapore flag',
  },
  {
    photo: TeamMember6,
    name: 'Desmond Delandro 🇺🇸',
    position: 'Chief Architect',
    alt: 'Desmond Delandro',
    flagAlt: 'France flag',
  },

  {
    photo: TeamMember7,
    name: 'Pr. Ngo Bao Chau 🇫🇷',
    position: 'Future Intranet Manager',
    alt: 'Pr. Ngo Bao Chau',
    flagAlt: 'Singapore flag',
  },
  {
    photo: TeamMember8,
    name: 'Vinh Nguyen 🇻🇳',
    position: 'Future Intranet Manager',
    alt: 'Vinh Nguyen',
    flagAlt: 'Singapore flag',
  },
  {
    photo: TeamMember9,
    name: 'Rym Michaut 🇫🇷',
    position: 'Future Intranet Manager',
    alt: 'Rym Michaut',
    flagAlt: 'Singapore flag',
  },
  {
    photo: TeamMember10,
    name: 'Florian Jacta 🇫🇷',
    position: 'Future Intranet Manager',
    alt: 'Florian Jacta',
    flagAlt: 'Singapore flag',
  },
  {
    photo: TeamMember11,
    name: 'Marine Gosselin 🇫🇷',
    position: 'Future Intranet Manager',
    alt: 'Marine Gosselin',
    flagAlt: 'Singapore flag',
  },
  {
    photo: TeamMember12,
    name: 'Alexandre Sajus 🇫🇷',
    position: 'Future Intranet Manager',
    alt: 'Alexandre Sajus',
    flagAlt: 'Singapore flag',
  },
  {
    photo: TeamMember13,
    name: 'Truong Giang Do 🇻🇳',
    position: 'Future Intranet Manager',
    alt: 'Truong Giang Do',
    flagAlt: 'Singapore flag',
  },
];

export default function TeamList() {
  return (
    <div className="flex justify-center">
      <ul className="mx-auto mt-[74px] grid grid-cols-4 gap-x-14 gap-y-16 lg:mt-16 lg:gap-14 md:mt-[55px] md:grid-cols-3 sm:mt-9 sm:gap-8 xs:grid-cols-2">
        {teamListData.map(({ photo, name, position, alt }, index) => (
          <li
            className="flex w-full max-w-[174px] flex-col items-center gap-[18px] md:max-w-[152px] sm:max-w-[142px] sm:gap-3"
            key={index}
          >
            <div className="relative h-[72px] w-[72px] sm:h-14 sm:w-14">
              <Image
                className="rounded-[8px] grayscale-[100%] filter"
                src={photo}
                fill={true}
                alt={alt}
              />
            </div>
            <div className="">
              <div className="flex items-center justify-center gap-1">
                <span className="whitespace-nowrap text-18 font-medium leading-none tracking-snug md:whitespace-normal md:text-center sm:text-16">
                  {name}
                </span>
              </div>
              <p className="mt-2 text-center text-16 font-light leading-none tracking-snug text-grey-70 sm:text-13">
                {position}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
