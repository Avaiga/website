import { useState } from 'react';

type CopyToClipboardReturn = {
  isCopied: boolean;
  handleCopy: (text: string) => void;
};

export default function useCopyToClipboard(resetInterval: number): CopyToClipboardReturn {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => setIsCopied(true))
      // eslint-disable-next-line no-console
      .catch((error) => console.error('Failed to copy text: ', error));

    setTimeout(() => setIsCopied(false), resetInterval);
  }

  return { isCopied, handleCopy };
}
