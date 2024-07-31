import Image from 'next/image';

import contributorsImage from '@/images/pages/community/contributors/contributors.png';

function Contributors() {
  return (
    <section className="contributors mt-[150px] lg:mt-[116px] md:mt-[134px] sm:mt-[76px]">
      <div className="container flex items-center lg:justify-between md:flex-wrap md:justify-center">
        <div className="mt-3 max-w-lg lg:max-w-md md:mt-0 md:flex md:w-full md:max-w-[605px] md:flex-col md:items-center md:text-center">
          <span className="inline-block leading-snug text-primary-red sm:text-14">
            For the community
          </span>
          <h2 className="mt-3.5 text-48 font-medium leading-dense tracking-tight lg:text-40 md:mt-4 md:text-32 sm:mt-3.5 sm:text-28">
            Built by the community
          </h2>
          <p className="mt-[18px] text-18 font-light tracking-snug text-grey-70 lg:text-16 lg:leading-snug sm:mt-[18px] sm:px-3 sm:text-14 sm:leading-normal">
            They make Taipy better every day. Join them! Open-source is in the heart of Taipy. We
            keep all the source code and work publicly available. Join our community driven project
            with over 3,000+ developers from around the world who contribute code and help building
            the modern notification infrastructure.
          </p>
        </div>
        <Image
          className="ml-[120px] shrink-0 lg:ml-8 lg:h-auto lg:w-[480px] md:ml-0 md:mt-10 md:w-auto sm:mt-8 sm:max-w-full"
          src={contributorsImage}
          width={639}
          height={643}
          alt=""
        />
      </div>
    </section>
  );
}

export default Contributors;
