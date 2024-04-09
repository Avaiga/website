import { PortableTextBlock } from 'sanity';

export const PortableToPlain = (blocks: PortableTextBlock[]) => {
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }

      return (block.children as { text: string }[])?.map((child) => child.text).join('');
    })
    .join(' ');
};
