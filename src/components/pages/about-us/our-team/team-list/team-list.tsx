import Image from 'next/image';

import albertAntoine from '@/images/pages/about-us/team/albert-antoine.jpg';
import alexandreSajus from '@/images/pages/about-us/team/alexandre-sajus.jpg';
import desmondDelandro from '@/images/pages/about-us/team/desmond-delandro.jpg';
import fabienLelaquais from '@/images/pages/about-us/team/fabien-lelaquais.jpg';
import florianJacta from '@/images/pages/about-us/team/florian-jacta.jpg';
import fredericLefevereLaoide from '@/images/pages/about-us/team/frederic-lefevere-laoide.jpg';
import jeanRobinMedori from '@/images/pages/about-us/team/jean-robin-medori.jpg';
import longNguyenDinh from '@/images/pages/about-us/team/long-nguyen-dinh.jpg';
import marineGosselin from '@/images/pages/about-us/team/marine-gosselin.jpg';
import myriamDelarue from '@/images/pages/about-us/team/myriam-delarue.jpg';
import namNguyen from '@/images/pages/about-us/team/nam-nguyen.jpg';
import prNgoBaoChau from '@/images/pages/about-us/team/pr-ngo-bao-chau.jpg';
import rymMichaut from '@/images/pages/about-us/team/rym-michaut.jpg';
import toanQuach from '@/images/pages/about-us/team/toan-quach.jpg';
import truongGiangDo from '@/images/pages/about-us/team/truong-giang-do.jpg';
import vincentGosselin from '@/images/pages/about-us/team/vincent-gosselin.jpg';
import vinhNguyen from '@/images/pages/about-us/team/vinh-nguyen.jpg';

const teamListData = [
  {
    photo: vincentGosselin,
    name: 'Vincent Gosselin 🇫🇷',
    position: 'CEO & Co-founder‍',
    alt: 'Vincent Gosselin',
  },
  {
    photo: albertAntoine,
    name: 'Albert Antoine 🇸🇬',
    position: 'Director & Co-founder‍',
    alt: 'Albert Antoine',
  },
  {
    photo: fabienLelaquais,
    name: 'Fabien Lelaquais 🇫🇷',
    position: 'CTO‍',
    alt: 'Fabien Lelaquais',
  },
  {
    photo: jeanRobinMedori,
    name: 'Jean-Robin Medori 🇺🇸',
    position: 'CPO',
    alt: 'Jean-Robin Medori',
  },
  {
    photo: myriamDelarue,
    name: 'Myriam Delarue 🇫🇷',
    position: 'Administration and Finance Manager',
    alt: 'Myriam Delarue',
  },
  {
    photo: desmondDelandro,
    name: 'Desmond Delandro 🇺🇸',
    position: 'Senior Advisor to the board',
    alt: 'Desmond Delandro',
  },

  {
    photo: prNgoBaoChau,
    name: 'Pr. Ngo Bao Chau 🇫🇷',
    position: 'Senior Advisor to the board',
    alt: 'Pr. Ngo Bao Chau',
  },
  {
    photo: vinhNguyen,
    name: 'Vinh Nguyen 🇻🇳',
    position: 'CFO',
    alt: 'Vinh Nguyen',
  },
  {
    photo: rymMichaut,
    name: 'Rym Michaut 🇫🇷',
    position: 'Global Community Manager',
    alt: 'Rym Michaut',
  },
  {
    photo: florianJacta,
    name: 'Florian Jacta 🇫🇷',
    position: 'Community Success Engineer',
    alt: 'Florian Jacta',
  },
  {
    photo: marineGosselin,
    name: 'Marine Gosselin 🇫🇷',
    position: 'Developer Advocate',
    alt: 'Marine Gosselin',
  },
  {
    photo: alexandreSajus,
    name: 'Alexandre Sajus 🇫🇷',
    position: 'Customer Success Engineer',
    alt: 'Alexandre Sajus',
  },
  {
    photo: truongGiangDo,
    name: 'Truong Giang Do 🇻🇳',
    position: 'Python Developer',
    alt: 'Truong Giang Do',
  },
  {
    photo: fredericLefevereLaoide, // frederic-lefevere-laoide
    name: 'Frédéric Lefévère-Laoide 🇫🇷',
    position: 'Senior Software Engineer',
    alt: 'Frédéric Lefévère-Laoide',
  },
  {
    photo: longNguyenDinh, // long-nguyen-dinh
    name: 'Long Nguyen Dinh 🇻🇳',
    position: 'Software Engineer',
    alt: 'Long Nguyen Dinh',
  },
  {
    photo: toanQuach, // toan-quach
    name: 'Toan Quach 🇻🇳',
    position: 'Backend Engineer',
    alt: 'Toan Quach',
  },
  {
    photo: namNguyen, // nam-nguyen
    name: 'Nam Nguyen 🇻🇳',
    position: 'Software Engineer',
    alt: 'Nam Nguyen',
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
