import HistoryList from './history-list';
import HistoryVideo from './history-video';

type microhubsProps = {
  text: string;
};

const microhubsData: microhubsProps[] = [
  {
    text: 'Orsay, France',
  },
  {
    text: 'Singapore, Singapore',
  },
  {
    text: 'California, USA',
  },
];

export default function OurHistory() {
  return (
    <section className="our-history pt-[155px] lg:pt-[124px] md:pt-[89px]">
      <div className="container-narrow max-w-[1279px]">
        <div className="w-full">
          <span className="text-16 font-normal leading-snug text-primary-red">Our story</span>
          <h2 className="pt-4 text-48 font-semibold leading-tight tracking-tight lg:tracking-tight md:text-[40px]">
            The history of Taipy
          </h2>
        </div>
        <div className="mt-11 flex w-full max-w-[1184px] justify-between gap-2.5 lg:mt-10 ">
          <div className="w-full max-w-[576px] lg:max-w-[448px] md:max-w-[320px]">
            <HistoryVideo />
            <ul className="mt-[51px] flex w-full max-w-[371px] justify-between lg:mt-[35px] lg:max-w-[354px] md:flex-col md:gap-5">
              <li className="flex w-full max-w-[84px] flex-col gap-[13px]">
                <span className="text-16 font-normal leading-snug text-grey-50">Founded in</span>
                <b className="text-20 font-medium tracking-snug text-grey-94 md:text-18">2024</b>
              </li>
              <li className="flex w-full max-w-[198px] flex-col gap-[13px] md:gap-[11px]">
                <span className="text-16 font-normal leading-snug text-grey-50">Microhubs</span>
                <div className="flex flex-col gap-[12px] md:gap-[9px]">
                  {microhubsData.map(({ text }, index) => (
                    <div
                      key={index}
                      className="text-20 font-medium tracking-snug text-grey-94 md:text-18"
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full max-w-[544px] lg:max-w-[480px] md:max-w-[352px]">
            <div className="">
              <p className=" text-18 font-light leading-snug text-grey-94 md:text-16">
                Taipy founders, Vincent Gosselin and Albert Antoine, with extensive backgrounds in
                leading software companies, transitioned from Java to Python a few years ago, driven
                by Python&apos;s increasing prominence in IT. Frustrated with the difficulty of
                bringing AI algorithms to the end-users, they created Taipy to address this
                challenge.
              </p>
              <p className="pt-5 text-18 font-light leading-snug text-grey-94 md:pt-2.5 md:text-16">
                Now Taipy offers a solution to multiple challenges, empowering businesses with
                interactive, user-centric AI applications.
              </p>
            </div>
            <HistoryList />
          </div>
        </div>
      </div>
    </section>
  );
}
