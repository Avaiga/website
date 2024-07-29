import { CompairingTableProps } from '@/types/pricing-page';

import Table from './table';

interface ComraipingProps {
  data: CompairingTableProps;
}

export default function Compairing({ data }: ComraipingProps) {
  return (
    <section className="compairing-table mt-[184px] bg-transparent text-white px-safe lg:mt-[126px] md:mt-24 sm:mt-20">
      <div className="container max-w-[768px] md:max-w-[704px]">
        <h2 className="text-center text-48 font-medium leading-dense tracking-tight lg:text-40 md:text-36 sm:text-32">
          Comparison table
        </h2>
        <div className="mt-11 grid grid-cols-12 lg:mt-[34px] md:mt-[30px] sm:mt-[21px]">
          <div className="col-span-12">
            <Table data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
