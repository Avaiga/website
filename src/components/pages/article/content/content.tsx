import {
  PortableText,
  PortableTextComponentProps,
  PortableTextComponents,
} from '@portabletext/react';
import clsx from 'clsx';
import { PortableTextBlock } from 'sanity';

import {
  ContentBlockquote,
  ContentCode,
  ContentNotice,
  ContentPicture,
  ContentTable,
  ContentYoutube,
} from '@/types/blog';

import { getAnchorFromText } from '@/lib/get-anchor-from-text';

import CircleHashIcon from '@/svgs/icons/circle-hashtag.inline.svg';

import Blockquote from './blockquote';
import CodeBlock from './code-block';
import Notice from './notice';
import Picture from './picture';
import Table from './table';
import YouTube from './youtube';

const components: PortableTextComponents = {
  types: {
    image: ({ value }: PortableTextComponentProps<ContentPicture>) => <Picture value={value} />,
    code: ({ value: { language, code } }: PortableTextComponentProps<ContentCode>) => (
      <CodeBlock language={language!} code={code} className="my-8 lg:my-6 md:my-5" />
    ),
    customTable: ({ value: { table, type } }: PortableTextComponentProps<ContentTable>) => (
      <Table table={table} type={type} />
    ),
    customNotice: ({ value: { text, type } }: PortableTextComponentProps<ContentNotice>) => (
      <Notice type={type} className="my-8 lg:my-6 md:my-5">
        <PortableText value={text} />
      </Notice>
    ),
    customBlockquote: ({ value }: PortableTextComponentProps<ContentBlockquote>) => (
      <Blockquote value={value} />
    ),
    youtube: ({ value: { url, title } }: PortableTextComponentProps<ContentYoutube>) => (
      <YouTube url={url} title={title} />
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 id={getAnchorFromText(children?.toString())}>
        <span>{children}</span>
        <a href={`#${getAnchorFromText(children?.toString())}`}>
          <CircleHashIcon className="h-6 w-6" />
        </a>
      </h2>
    ),
    h3: ({ children }) => (
      <h3 id={getAnchorFromText(children?.toString())}>
        <span>{children}</span>
        <a href={`#${getAnchorFromText(children?.toString())}`}>
          <CircleHashIcon className="h-6 w-6" />
        </a>
      </h3>
    ),
  },
};

type contentProps = {
  className?: string;
  content: PortableTextBlock[];
};

function Content({ className, content }: contentProps) {
  return (
    <div className={clsx('prose max-w-none', className)}>
      <PortableText value={content} components={components} />
    </div>
  );
}

export default Content;
