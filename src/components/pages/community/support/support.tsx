import Image from 'next/image';

import goodFirstIssuesImage from '@/images/pages/community/support/good-first-issues.jpg';
import helpWantedImage from '@/images/pages/community/support/help-wanted.jpg';

const supportCards = [
  {
    title: 'Good first issues',
    description: 'Introductory issues for newcomers to Python and Taipy.',
    image: goodFirstIssuesImage,
  },
  {
    title: 'Help wanted',
    description:
      'Tackle more complex challenges with these issues if you have high skills in Python and Taipy.',
    image: helpWantedImage,
  },
];

function Support() {
  return (
    <section className="support pt-[182px] lg:pt-[142px] md:pt-[120px] sm:pt-[88px]">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <span className="text-16 leading-normal text-primary-red md:text-14">Support</span>
          <h2 className="mt-4 text-48 font-medium leading-dense tracking-tight lg:text-40 md:text-32 sm:mt-3.5 sm:text-28">
            How we work on the&nbsp;issues
          </h2>
          <p className="mt-[18px] max-w-[566px] text-18 font-light leading-snug tracking-snug text-grey-70 lg:max-w-[494px] lg:text-16 md:max-w-[412px] md:text-14 sm:mt-3 sm:max-w-[286px]">
            Here are the features we would like to implement in the future. Feel free to make one of
            them your very own project.
          </p>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-x-8 lg:mt-10 lg:gap-x-6 lg:px-8 md:mt-9 md:px-0 sm:mt-8 xs:grid-cols-1 xs:gap-5">
          {supportCards.map(({ title, description, image }) => (
            <li
              key={title}
              className="relative h-80 rounded-lg bg-grey-10 p-7 before:absolute before:-inset-px before:-z-10 before:rounded-lg before:bg-card-gradient lg:h-[307px] lg:p-6 md:h-[274px] sm:p-5 xs:h-[258px]"
            >
              <h3 className="relative z-10 text-24 font-medium leading-normal lg:text-20 sm:text-18">
                {title}
              </h3>
              <p className="relative z-10 mt-2 text-16 font-light leading-normal text-grey-70 lg:mt-1.5 md:text-14">
                {description}
              </p>
              <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-lg">
                <Image
                  className="absolute left-0 top-0 lg:top-5 lg:h-full lg:w-full lg:object-cover"
                  src={image}
                  alt={title}
                  width={464}
                  height={320}
                  quality={100}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Support;
