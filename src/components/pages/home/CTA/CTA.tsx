'use client';

import { useRef } from 'react';

import Button from '@/components/shared/button';

function CTA() {
  const inputRef = useRef<HTMLInputElement>(null);

  function copyHandle(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    if (inputRef.current) {
      const input = inputRef.current;

      input.select();
      input.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(input.value);
    }
  }

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
            <input ref={inputRef} value="copy test" disabled />
            <Button onClick={copyHandle}>Copy</Button>
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
