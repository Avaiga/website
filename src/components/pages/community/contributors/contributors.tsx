import Image from 'next/image';

import zSia from '@/images/pages/community/contributors/1.jpg';
import aBaranwal from '@/images/pages/community/contributors/2.jpg';
import eNarro from '@/images/pages/community/contributors/3.jpg';
import gMaraboutDemazure from '@/images/pages/community/contributors/4.jpg';
import jBBraun from '@/images/pages/community/contributors/5.jpg';
import nDavid from '@/images/pages/community/contributors/6.jpg';
import iLustig from '@/images/pages/community/contributors/7.jpg';
import fPearl from '@/images/pages/community/contributors/8.jpg';

// TODO: import real photos
const teamListData = [
  {
    photo: zSia,
    name: 'Zaccheus Sia 🇫🇷',
    position: 'Application Developer',
  },
  {
    photo: aBaranwal,
    name: 'Anmol Baranwal 🇸🇬',
    position: 'Software Developer & Open-Source Advocate',
  },
  {
    photo: eNarro,
    name: 'Eric Narro 🇫🇷',
    position: 'Data Analyst',
  },
  {
    photo: gMaraboutDemazure,
    name: 'Grégoire Marabout-Demazure 🇫🇷',
    position: 'CTO & Software Engineer',
  },
  {
    photo: jBBraun,
    name: 'Jean-Baptiste Braun 🇫🇷',
    position: 'Lead Data Engineer',
  },
  {
    photo: nDavid,
    name: 'Nevo David 🇹🇭',
    position: 'Full-stack engineer',
  },
  {
    photo: iLustig,
    name: 'Irv Lustig 🇺🇸',
    position: 'Certified Analytics Practitione',
  },
  {
    photo: fPearl,
    name: 'Forcha Pearl 🇨🇲',
    position: 'Software Engineer',
  },
];
// TODO: create shared component for that
function Contributors() {
  return (
    <section className="contributors mt-[180px] lg:mt-[142px] md:mt-[129px] sm:mt-[42px]">
      <div className="container max-w-[984px] text-center lg:max-w-[942px] md:max-w-[682px]">
        <span className="leading-snug text-primary-red sm:text-14">Shout out</span>
        <h2 className="mt-5 text-48 font-medium leading-dense tracking-tight lg:text-40 md:text-32 sm:mt-3.5 sm:text-28">
          Our dearest contributors
        </h2>
        <p className="mx-auto mt-4 text-18 font-light tracking-snug text-grey-70 lg:text-16 md:text-14 sm:mt-3">
          They make Taipy better every day. Join them!
        </p>
        <ul className="mt-[70px] grid grid-cols-4 gap-x-6 gap-y-14 lg:mt-[62px] lg:gap-x-10 lg:gap-y-12 md:mt-[54px] md:grid-cols-3 md:gap-x-14 sm:mt-[46px] sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10">
          {teamListData.map(({ photo, name, position }, index) => (
            <li className="flex flex-col items-center gap-[18px] md:gap-4 sm:gap-3" key={index}>
              <Image
                className="w-[72px] rounded-[8px] border border-grey-20 grayscale-[100%] filter sm:w-14"
                width={72}
                height={72}
                src={photo}
                alt={name}
              />
              <div className="flex flex-col gap-2 sm:max-w-[171px] sm:gap-1.5">
                <span className="text-18 font-medium leading-tight tracking-snug md:text-16">
                  {name}
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

export default Contributors;
