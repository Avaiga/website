import Heading from '../heading';
import Table from './table';

export default function Compairing() {
  return (
    <section className="choose-version mt-24 bg-transparent text-white px-safe lg:mt-[72px] md:mt-16 sm:mt-12">
      <div className="container max-w-[768px] md:max-w-[704px]">
        <Heading text="Comparison table" />
        <div className="mt-11 grid grid-cols-12 lg:mt-[34px] md:mt-[30px] sm:mt-[21px]">
          <div className="col-span-12">
            <Table />
          </div>
        </div>
      </div>
    </section>
  );
}
