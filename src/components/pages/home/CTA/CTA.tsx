import Button from '@/components/shared/button';

function CTA() {
  return (
    <section className="cta mt-[200px] px-safe">
      <div className="container-narrow grix-cols-2 grid max-w-[1088px] gap-x-8">
        <div>
          <h3>Start with Taipy now</h3>
          <p>
            Python library for building production-ready apps, including other libraries missing
            features
          </p>
          <form action="">
            <textarea name="" id="" />
          </form>
        </div>
        <div>
          <h3>Taipy Enterprise</h3>
          <p>Provide security to your app by providing authentication and authorization features</p>
          <Button>Learn more</Button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
