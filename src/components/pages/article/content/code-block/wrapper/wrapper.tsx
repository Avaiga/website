'use client';

import { ReactElement, ReactNode, isValidElement } from 'react';

import useCopyToClipboard from '@/hooks/use-copy-to-clipboard';
import clsx from 'clsx';

import { ClassName } from '@/types/classname';

import CheckIcon from '@/svgs/icons/check.inline.svg';
import CopyIcon from '@/svgs/icons/copy-code.inline.svg';

type CodeBlockWrapperProps = ClassName & {
  children?: ReactNode;
};

type ExpectedProps = {
  children?: ReactNode;
  'data-line'?: string;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
};

// Type guard to check if an element has the expected props
function hasExpectedProps(element: ReactNode): element is ReactElement<ExpectedProps> {
  return isValidElement(element) && typeof element.props === 'object';
}

function extractTextFromNode(node: ReactNode): string {
  if (typeof node === 'string') {
    return node;
  }

  if (hasExpectedProps(node)) {
    if (typeof window !== 'undefined' && node.props.dangerouslySetInnerHTML?.__html) {
      // Extract text from the HTML string
      const parser = new DOMParser();
      const doc = parser.parseFromString(node.props.dangerouslySetInnerHTML.__html, 'text/html');
      let textContent = '';

      // Iterate over each 'span' with 'data-line' attribute
      const lineElements = doc.querySelectorAll('span[data-line]');

      lineElements.forEach((lineElem) => {
        let line = lineElem.textContent;

        // add special characters for diff lines
        if (lineElem.classList.contains('diff') && lineElem.classList.contains('add')) {
          line = `+ ${line}`;
        }
        if (lineElem.classList.contains('diff') && lineElem.classList.contains('remove')) {
          line = `- ${line}`;
        }

        textContent += line + '\n'; // Preserve the newline from the original HTML
      });

      return textContent.trim(); // Trim the final string to remove any extra newline at the end
    } else if (node.props.children) {
      let text = '';
      const children = node.props.children;

      if (Array.isArray(children)) {
        children.forEach((child) => {
          text += extractTextFromNode(child);

          if (hasExpectedProps(child) && 'data-line' in child.props) {
            text += '\n';
          }
        });
      } else {
        text = extractTextFromNode(children);
      }

      return text;
    }
  }

  return '';
}

function Wrapper({ className = '', children, ...otherProps }: CodeBlockWrapperProps) {
  const { isCopied, handleCopy } = useCopyToClipboard(3000);

  const code = extractTextFromNode(children);

  return (
    <figure className={clsx('code-block group relative', className)} {...otherProps}>
      {children}
      <button
        className="pp-lg:visible pp-lg:opacity-100 invisible absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded bg-[#333] opacity-0 transition-[background-color,opacity,visibility] duration-300 group-hover:visible group-hover:opacity-100"
        disabled={isCopied}
        aria-label="Copy"
        onClick={() => handleCopy(code)}
      >
        {isCopied ? (
          <CheckIcon className="h-auto w-[17px] stroke-white" />
        ) : (
          <CopyIcon className="h-[17px] w-[17px]" />
        )}
      </button>
    </figure>
  );
}

export default Wrapper;
