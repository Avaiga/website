import Image from 'next/image';

import TeamMember from '@/images/pages/about-us/team/1-team.jpg';

const teamListData = [
  {
    photo: TeamMember,
    name: 'Esther Monahan 🇫🇷',
    position: 'Future Intranet Manager',
    alt: '.Esther Monahan',
    flagAlt: '.France flag',
  },

  {
    photo: TeamMember,
    name: 'Jane Smith 🇬🇧',
    position: 'Head of Marketing',
    alt: '.Jane Smith',
    flagAlt: '.Greate Britain flag',
  },

  {
    photo: TeamMember,
    name: 'Evan Purdy 🇫🇷',
    position: 'Head of Product',
    alt: '.Evan Purdy',
    flagAlt: '.France flag',
  },

  {
    photo: TeamMember,
    name: 'Esther Monahan 🇺🇸',
    position: 'Chief Architect',
    alt: '.Esther Monahan',
    flagAlt: '.United States flag',
  },

  {
    photo: TeamMember,
    name: 'Evan Purdy 🇸🇬',
    position: 'Head of Product',
    alt: '.Evan Purdy',
    flagAlt: '.Singapore flag',
  },

  {
    photo: TeamMember,
    name: 'Esther Monahan 🇫🇷',
    position: 'Chief Architect',
    alt: '.Esther Monahan',
    flagAlt: '.France flag',
  },

  {
    photo: TeamMember,
    name: 'Esther Monahan 🇫🇷',
    position: 'Future Intranet Manager',
    alt: '.Esther Monahan',
    flagAlt: '.Singapore flag',
  },
];

export default function TeamList() {
  return (
    <ul className="mx-auto mt-[74px] flex w-full max-w-[864px] flex-wrap justify-start gap-x-14 gap-y-[66px]">
      {teamListData.map((item, index) => (
        <li
          className="col-gap-4 flex w-full max-w-[174px] flex-col items-center gap-[15px]"
          key={index}
        >
          <div className="relative h-[72px] w-[72px]">
            <Image src={item.photo} fill={true} alt={item.alt} />
          </div>
          <div className="">
            <div className="flex items-center justify-center gap-1">
              <span className="text-18 font-medium leading-none tracking-snug">{item.name}</span>
              {/* <Image src={item.flag} width={19} height={19} alt={item.flagAlt} /> */}
            </div>
            <p className="pt-2 text-center text-16 font-light leading-none tracking-snug">
              {item.position}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
