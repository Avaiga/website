import Image from 'next/image';

import albertAntoine from '@/images/pages/about-us/team/albert-antoine.jpg';
import desmondDelandro from '@/images/pages/about-us/team/desmond-delandro.jpg';
import fabienLelaquais from '@/images/pages/about-us/team/fabien-lelaquais.jpg';
import jeanRobinMedori from '@/images/pages/about-us/team/jean-robin-medori.jpg';
import myriamDelarue from '@/images/pages/about-us/team/myriam-delarue.jpg';
import prNgoBaoChau from '@/images/pages/about-us/team/pr-ngo-bao-chau.jpg';
import vincentGosselin from '@/images/pages/about-us/team/vincent-gosselin.jpg';

// TODO: import real photos
const teamListData = [
  {
    photo: vincentGosselin,
    name: 'Zaccheus Sia 🇫🇷',
    position: 'Application Developer',
  },
  {
    photo: albertAntoine,
    name: 'Anmol Baranwal 🇸🇬',
    position: 'Software Developer & Open-Source Advocate',
  },
  {
    photo: fabienLelaquais,
    name: 'Eric Narro 🇫🇷',
    position: 'Data Analyst',
  },
  {
    photo: prNgoBaoChau,
    name: 'Grégoire Marabout-Demazure 🇫🇷',
    position: 'CTO & Software Engineer',
  },
  {
    photo: jeanRobinMedori,
    name: 'Jean-Baptiste Braun 🇫🇷',
    position: 'Lead Data Engineer',
  },
  {
    photo: myriamDelarue,
    name: 'Nevo David 🇹🇭',
    position: 'Full-stack engineer',
  },
  {
    photo: desmondDelandro,
    name: 'Irv Lustig 🇺🇸',
    position: 'Certified Analytics Practitione',
  },
];

function Contributors() {
  return (
    <section className="contributors mt-[182px]">
      <div className="mx-auto max-w-[920px] text-center">
        <span className="leading-snug text-primary-red md:text-14">Shout out</span>
        <h2 className="mt-5 text-48 font-medium leading-dense tracking-tight">
          Our dearest contributors
        </h2>
        <p className="mx-auto mt-4 text-18 font-light text-grey-70">
          They make Taipy better every day. Join them!
        </p>
        <ul className="mt-[70px] grid grid-cols-4 gap-x-14 gap-y-14">
          {teamListData.map(({ photo, name, position }, index) => (
            <li className="flex flex-col items-center gap-[18px]" key={index}>
              <Image
                className="w-[72px] rounded-[8px] border border-grey-20 grayscale-[100%] filter"
                width={72}
                height={72}
                src={photo}
                alt={name}
              />

              <div className="flex flex-col gap-2">
                <span className="text-18 font-medium leading-tight tracking-snug">{name}</span>

                <p className="font-light leading-none tracking-snug text-grey-70">{position}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contributors;
