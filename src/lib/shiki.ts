import { transformerNotationDiff } from '@shikijs/transformers';
import {
  BundledLanguage,
  BundledTheme,
  HighlighterGeneric,
  bundledLanguages,
  codeToHtml,
  getHighlighter,
} from 'shiki';

interface HighlightLine {
  code: string;
  language?: BundledLanguage;
}

function isBundledLanguage(lang: string): lang is BundledLanguage {
  return Object.keys(bundledLanguages).includes(lang as BundledLanguage);
}

let highlighter: HighlighterGeneric<BundledLanguage, BundledTheme> | null = null;

const parseHighlightLines = (meta: string): number[] => {
  const metaArray = meta.split(' ');
  let highlightLines: number[] = [];

  if (metaArray[0].includes('{')) {
    const highlightString = metaArray[0];
    const highlightStringArray = highlightString.split('{')[1].split('}')[0].split(',');
    highlightLines = highlightStringArray.reduce((result: number[], item: string) => {
      if (item.includes('-')) {
        const range = item.split('-');
        const start = parseInt(range[0], 10);
        const end = parseInt(range[1], 10);
        for (let i = start; i <= end; i++) {
          result.push(i);
        }
      } else {
        result.push(parseInt(item, 10));
      }

      return result;
    }, []);
  }

  return highlightLines;
};

export async function highlight(
  code: string,
  lang: BundledLanguage = 'bash',
  meta: string = '',
  theme: BundledTheme = 'slack-dark',
): Promise<string> {
  if (!isBundledLanguage(lang)) {
    lang = 'bash';
  }

  if (!highlighter) {
    highlighter = await getHighlighter({
      langs: [lang],
      themes: [theme],
    });
  }

  const html = codeToHtml(code, {
    lang,
    theme,
    transformers: [
      transformerNotationDiff(),
      {
        pre(node) {
          node.properties['data-language'] = lang;
        },
        code(node) {
          node.properties.class = 'grid';
        },
        line(node, line) {
          node.properties['data-line'] = line;

          if (meta) {
            const highlightedLines = parseHighlightLines(meta);

            highlightedLines.forEach((item) => {
              if (item === line) {
                node.properties['data-highlighted-line'] = true;
              }
            });
          }
        },
      },
    ],
  });

  await highlighter.loadLanguage(lang);

  return html;
}

export const getHighlightedCodeArray = async (items: HighlightLine[]): Promise<string[]> => {
  let highlightedItems: string[] = [];

  try {
    highlightedItems = await Promise.all(
      items.map(async (item) => {
        const highlightedCode = await highlight(item.code, item.language);

        return highlightedCode;
      }),
    );
  } catch (error) {
    /* empty */
  }

  return highlightedItems;
};
