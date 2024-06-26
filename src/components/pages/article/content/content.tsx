import Image from 'next/image';

import {
  PortableText,
  PortableTextComponentProps,
  PortableTextComponents,
} from '@portabletext/react';
import clsx from 'clsx';
import { PortableTextBlock } from 'sanity';

import Link from '@/components/shared/link';

import {
  ContentBlockquote,
  ContentCode,
  ContentNotice,
  ContentPicture,
  ContentTable,
  ContentYoutube,
} from '@/types/blog';
import { ClassName } from '@/types/classname';

import { getAnchorFromText } from '@/lib/get-anchor-from-text';
import { getTextFromChildren } from '@/lib/get-text-from-children';

import circleHashIcon from '@/svgs/icons/circle-hashtag.svg';
import ExternalIcon from '@/svgs/icons/external.inline.svg';

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
      <CodeBlock language={language!} code={code} className="my-8 lg:my-7 md:my-6 sm:my-5" />
    ),
    customTable: ({ value: { table, type } }: PortableTextComponentProps<ContentTable>) => (
      <Table table={table} type={type} />
    ),
    customNotice: ({ value: { text, type } }: PortableTextComponentProps<ContentNotice>) => (
      <Notice type={type} className="my-8 lg:my-7 md:my-6 sm:my-5">
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
  marks: {
    link: ({ children, value }) => {
      if (value.href && value.href.startsWith('http')) {
        return (
          <a className="my-0" href={value.href} target="_blank" rel="noopener noreferrer">
            <span>{children}</span>
            <ExternalIcon className="mb-1.5 ml-1 inline-block h-4 w-4" aria-hidden />
          </a>
        );
      }

      return <Link href={value.href || ''}>{children}</Link>;
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 id={getAnchorFromText(getTextFromChildren(children))}>
        <span>{children}</span>
        <a className="bottom-1.5" href={`#${getAnchorFromText(getTextFromChildren(children))}`}>
          <Image className="mb-0 mt-0" src={circleHashIcon} width={24} height={24} alt="" />
        </a>
      </h2>
    ),
    h3: ({ children }) => (
      <h3 id={getAnchorFromText(getTextFromChildren(children))}>
        <span>{children}</span>
        <a className="bottom-0.5" href={`#${getAnchorFromText(getTextFromChildren(children))}`}>
          <Image className="mb-0 mt-0" src={circleHashIcon} width={24} height={24} alt="" />
        </a>
      </h3>
    ),
  },
};

type contentProps = ClassName & {
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
