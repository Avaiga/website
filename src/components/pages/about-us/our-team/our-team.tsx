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
    photo: fredericLefevereLaoide,
    name: 'Frédéric Lefévère-Laoide',
    position: 'Senior Software Engineer',
    countryIcon: FR,
  },
  {
    photo: longNguyenDinh,
    name: 'Long Nguyen Dinh',
    position: 'Software Engineer',
    countryIcon: VN,
  },
  {
    photo: toanQuach,
    name: 'Toan Quach',
    position: 'Backend Engineer',
    countryIcon: VN,
  },
  {
    photo: namNguyen,
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

export default function OurTeam() {
  return (
    <section className="contributors mt-[180px] lg:mt-[142px] md:mt-[129px] sm:mt-[42px]">
      <div className="container max-w-[928px] text-center lg:max-w-[942px] md:max-w-[682px]">
        <span className="leading-snug text-primary-red">Our team</span>
        <h2 className="mt-4 text-48 font-medium leading-dense tracking-tight lg:text-44 md:text-36 sm:mt-3.5 sm:text-28">
          A great team bringing together AI veterans and talented young developers
        </h2>
        <p className="mx-auto mt-4 max-w-[680px] text-18 font-light leading-snug tracking-snug text-grey-70 lg:mt-[18px] sm:mt-3 sm:max-w-[296px] sm:text-16">
          We are committed to helping organizations gain visibility into their IT infrastructure
          providing a platform that is flexible and easy to use.
        </p>
        <ul className="mt-[70px] grid grid-cols-4 gap-x-11 gap-y-16 lg:mt-16 lg:gap-x-10 lg:gap-y-[54px] md:mt-[54px] md:grid-cols-3 md:gap-x-14 md:gap-y-16 sm:mt-11 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-9">
          {teamListData.map(({ photo, name, position, countryIcon }, index) => (
            <li className="flex flex-col items-center gap-[18px] md:gap-4 sm:gap-2.5" key={index}>
              <Image
                className="w-[72px] rounded-[8px] border border-grey-20 grayscale-[100%] filter sm:w-14"
                width={72}
                height={72}
                src={photo}
                alt={name}
              />
              <div className="flex flex-col gap-2 lg:gap-1.5 md:gap-[3px]">
                <span className="text-18 font-medium leading-tight tracking-snug md:text-16">
                  {name}
                  <span className="whitespace-nowrap">
                    &nbsp;
                    <img
                      className="ml-1.5 inline w-3.5 md:ml-1"
                      src={countryIcon}
                      width={14}
                      height={18}
                      alt=""
                      loading="lazy"
                    />
                  </span>
                </span>
                <p className="font-light leading-none tracking-snug text-grey-70 md:text-14 sm:text-13">
                  {position}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
