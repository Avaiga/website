import Image from 'next/image';

import CM from '@/images/country-svgs/CM.svg';
import FR from '@/images/country-svgs/FR.svg';
import SG from '@/images/country-svgs/SG.svg';
import TH from '@/images/country-svgs/TH.svg';
import US from '@/images/country-svgs/US.svg';
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
    name: 'Zaccheus Sia',
    position: 'Application Developer',
    countryIcon: FR,
  },
  {
    photo: aBaranwal,
    name: 'Anmol Baranwal',
    position: 'Software Developer & Open-Source Advocate',
    countryIcon: SG,
  },
  {
    photo: eNarro,
    name: 'Eric Narro',
    position: 'Data Analyst',
    countryIcon: FR,
  },
  {
    photo: gMaraboutDemazure,
    name: 'Grégoire Marabout-Demazure',
    position: 'CTO & Software Engineer',
    countryIcon: FR,
  },
  {
    photo: jBBraun,
    name: 'Jean-Baptiste Braun',
    position: 'Lead Data Engineer',
    countryIcon: FR,
  },
  {
    photo: nDavid,
    name: 'Nevo David',
    position: 'Full-stack engineer',
    countryIcon: TH,
  },
  {
    photo: iLustig,
    name: 'Irv Lustig',
    position: 'Certified Analytics Practitione',
    countryIcon: US,
  },
  {
    photo: fPearl,
    name: 'Forcha Pearl',
    position: 'Software Engineer',
    countryIcon: CM,
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
          {teamListData.map(({ photo, name, position, countryIcon }, index) => (
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

export default Contributors;
