import { PortableText } from '@portabletext/react';

import { ContentBlockProps, ContentBlockquote } from '@/types/blog';

import QuoteIcon from '@/svgs/icons/quote-sign.inline.svg';

function Blockquote({ value: { role, name, text } }: ContentBlockProps<ContentBlockquote>) {
  return (
    <figure className="not-prose my-8">
      <QuoteIcon className="h-auto w-10" />
      <blockquote className="mt-2 text-28 font-normal leading-normal tracking-tight text-grey-98">
        <PortableText value={text} />
      </blockquote>
      {name && (
        <figcaption className="mt-2.5 flex items-center gap-x-2 text-16 leading-tight tracking-tight">
          <cite className="font-medium not-italic text-grey-70">{name}</cite>
          {role && (
            <>
              <div className="h-[3px] w-[3px] rounded-full bg-grey-30" aria-hidden />
              <span className="font-light text-grey-60">{role}</span>
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}

export default Blockquote;
