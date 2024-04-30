import Image from 'next/image';

import integration from '@/images/pages/community/features/integration.webp';
import more from '@/images/pages/community/features/more.webp';
import provide from '@/images/pages/community/features/provide.webp';
import systems from '@/images/pages/community/features/systems.webp';

const imagesData = [
  {
    alt: 'integration',
    text: 'Integration with data <br> visualisation packages',
    image: integration,
  },
  {
    alt: 'provide',
    text: 'Provide more features to the table <br>graphical objects',
    image: provide,
  },
  {
    alt: 'more',
    text: 'More predefined data nodes',
    image: more,
  },
  {
    alt: 'systems',
    text: 'Integration with external <br>execution systems',
    additionalText: '... and many more!',
    image: systems,
  },
];

function Features() {
  return (
    <section className="features mt-[184px] px-safe lg:mt-36 md:mt-[119px] sm:mt-[92px]">
      <div className="container flex flex-col items-center">
        <span className="mx-auto text-16 leading-normal text-primary-red md:text-14">
          Future Features
        </span>
        <h2 className="mx-auto mt-5 max-w-[620px] text-center text-48 font-medium leading-dense tracking-tight lg:max-w-[513px] lg:text-40 md:max-w-[412px] md:text-32 sm:mt-3.5 sm:max-w-[262px] sm:text-28">
          Choose between our projects or bring your own!
        </h2>
        <p className="mx-auto mt-4 max-w-[566px] text-center text-18 leading-snug tracking-snug text-grey-70 lg:max-w-[494px] lg:text-16 md:max-w-[437px] md:text-14 sm:mt-3 sm:max-w-[264px]">
          Here are the features we would like to implement in the future. Feel free to make one of
          them your very own project.
        </p>
        <div className="mx-auto mt-12 grid w-full max-w-[960px] grid-cols-12 gap-8 lg:mt-9 lg:max-w-[896px] lg:gap-6 md:mt-9 sm:mt-8 sm:gap-5">
          {imagesData.map(({ alt, image, text, additionalText }, index) => (
            <div
              className="col-span-6 aspect-[1.45] overflow-hidden rounded-[8px] lg:aspect-[1.36] md:aspect-[1.26] sm:col-span-full sm:aspect-[1.415]"
              key={index}
            >
              <div className="relative flex h-full flex-col justify-between p-7 lg:p-6 sm:p-5">
                <p
                  className="text-18 font-medium leading-snug text-white lg:text-16 sm:text-14"
                  dangerouslySetInnerHTML={{ __html: text }}
                />

                {additionalText && (
                  <p className="mt-auto self-end text-18 font-medium leading-snug text-white lg:text-16 sm:text-14">
                    {additionalText}
                  </p>
                )}
                <Image
                  className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full object-cover"
                  src={image}
                  width={464}
                  height={320}
                  alt={alt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
