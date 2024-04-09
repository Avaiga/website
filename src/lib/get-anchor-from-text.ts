export const getAnchorFromText = (text?: string) => {
  if (!text) {
    return '';
  }

  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replaceAll(' ', '-');
};
