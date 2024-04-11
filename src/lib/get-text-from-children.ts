import { ReactNode, isValidElement } from 'react';

export const getTextFromChildren = (node: ReactNode): string => {
  let string = '';
  if (typeof node === 'string') {
    string = node;
  } else if (typeof node === 'number') {
    string = node.toString();
  } else if (node instanceof Array) {
    node.forEach(function (child) {
      string += getTextFromChildren(child);
    });
  } else if (isValidElement(node)) {
    string += getTextFromChildren(node.props.children);
  }

  return string;
};
