import Image from 'next/image';

import FR from '@/images/country-svgs/FR.svg';
import SG from '@/images/country-svgs/SG.svg';
import TH from '@/images/country-svgs/TH.svg';
import US from '@/images/country-svgs/US.svg';
import VN from '@/images/country-svgs/VN.svg';
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
import nevoDavid from '@/images/pages/about-us/team/nevo-david.jpg';
import prNgoBaoChau from '@/images/pages/about-us/team/pr-ngo-bao-chau.jpg';
import rymMichaut from '@/images/pages/about-us/team/rym-michaut.jpg';
import toanQuach from '@/images/pages/about-us/team/toan-quach.jpg';
import truongGiangDo from '@/images/pages/about-us/team/truong-giang-do.jpg';
import vincentGosselin from '@/images/pages/about-us/team/vincent-gosselin.jpg';
import vinhNguyen from '@/images/pages/about-us/team/vinh-nguyen.jpg';

const teamListData = [
  {
    photo: vincentGosselin,
    name: 'Vincent Gosselin',
    position: 'CEO & Co-founder‍',
    countryIcon: FR,
  },
  {
    photo: albertAntoine,
    name: 'Albert Antoine',
    position: 'Director & Co-founder‍',
    countryIcon: SG,
  },
  {
    photo: fabienLelaquais,
    name: 'Fabien Lelaquais',
    position: 'CTO‍',
    countryIcon: FR,
  },
  {
    photo: jeanRobinMedori,
    name: 'Jean-Robin Medori',
    position: 'CPO',
    countryIcon: US,
  },
  {
    photo: myriamDelarue,
    name: 'Myriam Delarue',
    position: 'Administration and Finance Manager',
    countryIcon: FR,
  },
  {
    photo: desmondDelandro,
    name: 'Desmond Delandro',
    position: 'Senior Advisor to the board',
    countryIcon: US,
  },

  {
    photo: prNgoBaoChau,
    name: 'Pr. Ngo Bao Chau',
    position: 'Senior Advisor to the board',
    countryIcon: FR,
  },
  {
    photo: vinhNguyen,
    name: 'Vinh Nguyen',
    position: 'CFO',
    countryIcon: VN,
  },
  {
    photo: rymMichaut,
    name: 'Rym Michaut',
    position: 'Global Community Manager',
    countryIcon: FR,
  },
  {
    photo: florianJacta,
    name: 'Florian Jacta',
    position: 'Community Success Engineer',
    countryIcon: FR,
  },
  {
    photo: marineGosselin,
    name: 'Marine Gosselin',
    position: 'Developer Advocate',
    countryIcon: FR,
  },
  {
    photo: alexandreSajus,
    name: 'Alexandre Sajus',
    position: 'Customer Success Engineer',
    countryIcon: FR,
  },
  {
    photo: truongGiangDo,
    name: 'Truong Giang Do',
    position: 'Python Developer',
    countryIcon: VN,
  },
  {
    photo: fredericLefevereLaoide, // frederic-lefevere-laoide
    name: 'Frédéric Lefévère-Laoide',
    position: 'Senior Software Engineer',
    countryIcon: FR,
  },
  {
    photo: longNguyenDinh, // long-nguyen-dinh
    name: 'Long Nguyen Dinh',
    position: 'Software Engineer',
    countryIcon: VN,
  },
  {
    photo: toanQuach, // toan-quach
    name: 'Toan Quach',
    position: 'Backend Engineer',
    countryIcon: VN,
  },
  {
    photo: namNguyen, // nam-nguyen
    name: 'Nam Nguyen',
    position: 'Software Engineer',
    countryIcon: VN,
  },
  {
    photo: nevoDavid,
    name: 'Nevo David',
    position: 'Fractional CMO',
    countryIcon: TH,
  },
];

export default function TeamList() {
  return (
    <div className="flex justify-center">
      <ul className="mx-auto mt-[74px] grid grid-cols-4 gap-x-14 gap-y-16 lg:mt-16 lg:gap-14 md:mt-[55px] md:grid-cols-3 sm:mt-9 sm:gap-8 xs:grid-cols-2">
        {teamListData.map(({ photo, name, position, countryIcon }, index) => (
          <li
            className="flex w-full max-w-[174px] flex-col items-center gap-[18px] md:max-w-[152px] sm:max-w-[142px] sm:gap-3"
            key={index}
          >
            <div className="relative h-[72px] w-[72px] sm:h-14 sm:w-14">
              <Image
                className="rounded-[8px] grayscale-[100%] filter"
                src={photo}
                fill={true}
                alt={`${name}-image.img`}
              />
            </div>
            <div className="">
              <div className="flex items-center justify-center gap-1.5">
                <span className="whitespace-nowrap text-18 font-medium leading-none tracking-snug md:whitespace-normal md:text-center sm:text-16">
                  {name}
                </span>
                <img className="w-3.5" src={countryIcon} alt="" />
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
