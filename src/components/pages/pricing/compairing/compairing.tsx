import Table from './table';

export default function Compairing() {
  return (
    <section className="choose-version mt-[168px] bg-transparent text-white px-safe">
      <div className="container max-w-[768px]">
        <h2 className="font-title col-span-full mx-auto text-center text-56 font-semibold leading-dense tracking-tight">
          Comparison table
        </h2>
        <div className="gap-x-grid mt-11 grid grid-cols-12">
          <div className="col-span-12">
            <Table />
          </div>
        </div>
      </div>
    </section>
  );
}
