import Image from 'next/image';

import FR from '@/images/country-svgs/FR.svg';
import SG from '@/images/country-svgs/SG.svg';
import US from '@/images/country-svgs/US.svg';
import locationIcon from '@/images/pages/contact-us/location.svg';

// TODO: implement countryIcon name generator by country name
const locationsData = [
  {
    heading: 'Singapore',
    address: '80 Robinson Road, 068898 Singapore',
    countryIcon: SG,
  },
  {
    heading: 'France',
    address: '6 Boulevard Dubreuil, 91400 Orsay, France',
    countryIcon: FR,
  },
  {
    heading: 'USA',
    address: '104 Bond Court, Los Gatos, California 95030',
    countryIcon: US,
  },
];

function Locations() {
  return (
    <section className="locations mt-44 px-safe lg:mt-[135px] md:mt-[146px] sm:mt-[131px]">
      <div className="container">
        <h2 className="text-center text-48 font-medium leading-dense tracking-tight lg:text-40 lg:font-semibold md:text-36 sm:text-24">
          Locate where we&apos;re based
        </h2>
        <div className="mx-auto mt-16 grid max-w-[832px] grid-cols-3 gap-x-8 lg:mt-14 lg:max-w-[704px] lg:gap-x-16 md:mt-11 sm:mt-10 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-11 sm:pr-4">
          {locationsData.map(({ heading, address, countryIcon }, index) => {
            return (
              <div key={index}>
                <Image
                  className="w-6 md:w-[22px]"
                  src={locationIcon}
                  width={24}
                  height={40}
                  alt=""
                />
                <div className="mt-[18px] flex items-center gap-1.5 lg:mt-4 md:mt-3.5 sm:mt-3">
                  <h3 className="text-24 font-medium leading-normal lg:text-20 sm:text-18">
                    {heading}
                  </h3>
                  <img className="w-3.5" src={countryIcon} alt={heading} />
                </div>
                <p className="mb-2 mt-1.5 text-18 font-light leading-normal text-grey-70 lg:text-16 md:mb-1.5 md:mt-0.5 sm:text-14">
                  {address}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Locations;
