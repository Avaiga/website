// TODO: fix the complains
// eslint-disable-next-line
// @ts-nocheck
import { codeInput } from '@sanity/code-input';
import { FilterIcon, TagIcon, UserIcon } from '@sanity/icons';
import { table } from '@sanity/table';
import { visionTool } from '@sanity/vision';
import { SanityDocument, defineConfig } from 'sanity';
import { Iframe } from 'sanity-plugin-iframe-pane';
import { media, mediaAssetSource } from 'sanity-plugin-media';
import { DefaultDocumentNodeResolver, structureTool } from 'sanity/structure';

import { schemaTypes } from './schemas';

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

interface ExtendedSanityDocument extends SanityDocument {
  slug: {
    current: string;
  };
}

function getPreviewUrl(doc: ExtendedSanityDocument) {
  const host = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL;
  const url = new URL('/api/preview', host);

  url.searchParams.append('secret', process.env.SANITY_PREVIEW_SECRET!);

  url.searchParams.append(
    'redirect_url',
    new URL(`/blog${doc?.slug?.current ? `/${doc.slug.current}` : ''}`, host).toString(),
  );

  return url.toString();
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  switch (schemaType) {
    case 'post':
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: ExtendedSanityDocument) => getPreviewUrl(doc),
            showDisplayUrl: false,
            reload: {
              button: true,
            },
          })
          .title('Preview'),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

export default defineConfig({
  basePath: '/studio',

  name: 'default',
  title: 'Taipy',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            ...S.documentTypeListItems().filter((listItem) => listItem.getId() !== 'legal'),
            S.divider(),
            S.listItem()
              .title('Filtered Posts')
              .icon(FilterIcon)
              .child(
                S.list()
                  .title('Filter')
                  .items([
                    S.listItem()
                      .title('By Category')
                      .icon(TagIcon)
                      .child(
                        S.documentTypeList('category')
                          .title('Category')
                          .child((categoryId) =>
                            S.documentList()
                              .title('Post')
                              .filter('_type == "post" && $categoryId in categories[]._ref')
                              .params({ categoryId }),
                          ),
                      ),
                    S.listItem()
                      .title('By Author')
                      .icon(UserIcon)
                      .child(
                        S.documentTypeList('author')
                          .title('Author')
                          .child((authorId) =>
                            S.documentList()
                              .title('Post')
                              .filter('_type == "post" && $authorId == author._ref')
                              .params({ authorId }),
                          ),
                      ),
                  ]),
              ),
            S.divider(),
            ...S.documentTypeListItems().filter((listItem) => listItem.getId() === 'legal'),
          ]),
      defaultDocumentNode,
    }),
    media(),
    visionTool({ defaultApiVersion: apiVersion, defaultDataset: dataset }),
    table(),
    codeInput(),
  ],

  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: (previousAssetSources) =>
        previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource),
    },
  },

  schema: {
    types: schemaTypes,
  },
});
