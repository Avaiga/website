import Button from '@/components/shared/button';

const contributeListData = [
  {
    heading: 'Fix bugs',
    text: 'Help us identify unwanted behaviors in the product and fix them.',
  },
  {
    heading: 'Implement features',
    text: 'Chose one of the incoming features from our list, or develop your own.',
  },
  {
    heading: 'Submit feedback',
    text: 'Tell us what you love and what you would improve in Taipy.',
  },
];

export default function Contribute() {
  return (
    <section className="contribute pt-[176px]">
      <div className="container-narrow max-w-[1277px] text-center">
        <span className="text-16 font-normal leading-snug text-primary-red">Contribute</span>
        <h2 className="pt-4 text-56 font-semibold leading-dense tracking-tight">
          Get started to drive your data in minutes
        </h2>
        <p className="mx-auto w-full max-w-[768px] pt-4 text-18 font-light leading-snug text-grey-70">
          Join Taipy&apos;s development community today! Your contributions are greatly appreciated
          and will be duly acknowledged. Don&apos;t hesitate and be part of the Taipy adventure!
        </p>
        <ul className="mt-16 flex w-full justify-between text-start">
          {contributeListData.map((item, index) => (
            <li
              className="flex h-[385px] w-full max-w-[383px] items-end bg-grey-10 p-8"
              key={index}
            >
              <div className="">
                <b className="text-20 font-semibold leading-snug">{item.heading}</b>
                <p className="pt-2 text-18 font-normal leading-normal text-grey-70">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <Button
          className="mt-[55px] w-full max-w-[180px] md:max-w-40 sm:mt-5"
          size="lg"
          theme="red-filled"
        >
          Learn more
        </Button>
      </div>
    </section>
  );
}
