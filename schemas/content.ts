import {
  BlockquoteIcon,
  DocumentVideoIcon,
  ImageIcon,
  ThListIcon,
  WarningOutlineIcon,
} from '@sanity/icons';
import { TablePreview, TableValue } from '@sanity/table';
import { ArrayRule, BlockRule, PreviewValue, defineField } from 'sanity';

const TABLE_TYPES = [
  { title: 'With top header', value: 'withTopHeader' },
  { title: 'Without header', value: 'withoutHeader' },
];

const NOTICE_TYPES = [
  { title: 'Info', value: 'info' },
  { title: 'Note', value: 'note' },
  { title: 'Warning', value: 'warning' },
  { title: 'Attention', value: 'attention' },
];

export const customTable = {
  title: 'Table',
  name: 'customTable',
  icon: ThListIcon,
  type: 'object',
  fields: [
    {
      title: 'Type',
      type: 'string',
      name: 'type',
      options: {
        list: TABLE_TYPES,
      },
      initialValue: 'withTopHeader',
    },
    {
      title: 'Table',
      name: 'table',
      type: 'table',
    },
  ],
  components: {
    preview: TablePreview,
  },
  preview: {
    select: {
      table: 'table',
    },
    prepare: (value: Record<string, TableValue>) => {
      return {
        rows: value?.table?.rows ? value.table.rows : [],
      } as PreviewValue;
    },
  },
};

export const customBlockquote = {
  title: 'Blockquote',
  name: 'customBlockquote',
  icon: BlockquoteIcon,
  type: 'object',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'role', type: 'string', title: 'Role' },
    {
      name: 'text',
      type: 'array',
      title: 'Text',
      of: [{ type: 'block' }],
      validation: (Rule: BlockRule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: 'name',
      role: 'role',
      text: 'text',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare: (value: Record<string, any>) => {
      let subtitle = value?.name ? value.name : '';
      subtitle += value?.role ? `, ${value.role}` : '';

      return {
        title: value.text?.[0]?.children?.[0]?.text,
        subtitle,
      };
    },
  },
};

export const customNotice = {
  title: 'Notice',
  name: 'customNotice',
  icon: WarningOutlineIcon,
  type: 'object',
  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      options: { list: NOTICE_TYPES },
      initialValue: 'info',
    },
    { name: 'text', type: 'array', title: 'Text', of: [{ type: 'block' }] },
  ],
  preview: {
    select: {
      type: 'type',
      text: 'text',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare: (value: Record<string, any>) => {
      return {
        title: value?.type || '',
        subtitle: value?.text?.[0]?.children?.[0]?.text || '',
      };
    },
  },
};

// TODO: setup preview
export const customYoutube = {
  title: 'YouTube',
  name: 'youtube',
  icon: DocumentVideoIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    }),
  ],
};

export const contentField = defineField({
  name: 'content',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
      },
    },
    { type: 'customBlockquote' },
    { type: 'customNotice' },
    {
      type: 'code',
      options: {
        languageAlternatives: [
          { title: 'Plain text', value: 'text' },
          { title: 'JavaScript', value: 'javascript' },
          { title: 'bash', value: 'bash' },
          { title: 'sh', value: 'sh' },
          { title: 'tsx', value: 'tsx' },
          { title: 'yaml', value: 'yaml' },
          { title: 'Golang', value: 'golang' },
          { title: 'JSON', value: 'json' },
          { title: 'Python', value: 'Python' },
        ],
      },
    },
    { type: 'customTable' },
    { type: 'youtube' },
    {
      type: 'image',
      title: 'Image',
      icon: ImageIcon,
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'Caption under the picture',
        },
      ],
    },
  ],
  validation: (rule: ArrayRule<unknown[]>) => rule.required(),
  group: 'content',
});
