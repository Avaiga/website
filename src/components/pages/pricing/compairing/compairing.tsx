import Heading from '../heading';
import Table from './table';

export default function Compairing() {
  return (
    <section className="choose-version mt-[165px] bg-transparent text-white px-safe lg:mt-[126px] md:mt-[96px] sm:mt-[77px]">
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
