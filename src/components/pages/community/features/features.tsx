import Image from 'next/image';

import integration from '@/images/pages/community/features/integration.webp';
import more from '@/images/pages/community/features/more.webp';
import provide from '@/images/pages/community/features/provide.webp';
import systems from '@/images/pages/community/features/systems.webp';

const imagesData = [
  {
    alt: 'integration',
    image: integration,
  },
  {
    alt: 'provide',
    image: provide,
  },
  {
    alt: 'more',
    image: more,
  },
  {
    alt: 'systems',
    image: systems,
  },
];

function Features() {
  return (
    <section className="features mt-[184px] px-safe lg:mt-32 md:mt-[114px] sm:mt-12">
      <div className="container flex flex-col items-center">
        <span className="mx-auto text-16 leading-normal text-primary-red md:text-14">
          Future Features
        </span>
        <h2 className="mx-auto mt-5 max-w-[680px] text-center text-48 font-medium leading-dense tracking-snug">
          Choose between our projects or bring your own!
        </h2>
        <p className="mx-auto mt-4 max-w-[566px] text-center text-18 text-grey-70">
          Here are the features we would like to implement in the future. Feel free to make one of
          them your very own project.
        </p>
        <div className="mx-auto mt-11 grid max-w-[960px] grid-cols-12 grid-rows-[320px_320px] gap-8">
          {imagesData.map(({ alt, image }, index) => (
            <div className="col-span-6" key={index}>
              <Image
                className="pointer-events-none w-full"
                src={image}
                width={464}
                height={320}
                alt={alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
