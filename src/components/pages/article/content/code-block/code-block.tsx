import clsx from 'clsx';
import { BundledLanguage } from 'shiki/langs';

import { highlight } from '@/lib/shiki';

import Wrapper from './wrapper';

type CodeBlockProps = {
  language: string;
  code: string;
  className?: string;
};

async function CodeBlock({ language, code, className }: CodeBlockProps) {
  const html = await highlight(code, language.toLowerCase() as BundledLanguage);

  return (
    <Wrapper className={className}>
      <div
        className={clsx(
          'code-block not-prose pp-sm:[&_[data-line]]:px-4 pp-sm:[&_pre]:py-4 overflow-x-auto rounded-xl bg-grey-10 font-mono text-14 *:!bg-grey-10 [&_[data-line]]:px-6 [&_pre]:py-6',
          `language-${language}`,
        )}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Wrapper>
  );

  return null;
}

export default CodeBlock;
