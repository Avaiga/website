'use client';

import useCopyToClipboard from '@/hooks/use-copy-to-clipboard';

import Button from '@/components/shared/button';

const CODE = 'pip install taipy';

function CopyButton() {
  const { isCopied, handleCopy } = useCopyToClipboard(4000);

  function copyHandle() {
    handleCopy(CODE);
  }

  return (
    <Button
      className="w-full max-w-[166px] md:max-w-[154px]"
      size="lg"
      theme="red-filled"
      onClick={copyHandle}
    >
      {isCopied ? 'Copied!' : `$ ${CODE}`}
    </Button>
  );
}

export default CopyButton;
