import * as React from 'react'

export const defaultExternalLink = {
  type: 'object',
  name: 'link',
  options: {
    editModal: 'popover',
  },
  fields: [
    {
      name: 'href',
      type: 'url',
      title: 'Url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'tel', 'mailto'],
          allowRelative: true,
        }),
    },
  ],
}

const TextSpan = ({ fontSize, backgroundColor, children, fontWeight }) => (
  <span style={{ fontSize, fontWeight, backgroundColor }}>{children}</span>
)

const createBlockEditorConfig = ({ label, fontWeight }) => ({
  icon: () => (
    <TextSpan fontSize={11} fontWeight={fontWeight}>
      {label}
    </TextSpan>
  ),
  render: ({ children }) => (
    <TextSpan backgroundColor="#e5e8f7" fontWeight={fontWeight}>
      {children}
    </TextSpan>
  ),
})

export const richText = {
  name: 'richText',
  label: 'Rich Text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1 (serif)', value: 'h1' },
        { title: 'H2 (serif)', value: 'h2' },
        { title: 'H3 (serif)', value: 'h3' },
        { title: 'H4 (sans)', value: 'h4' },
        { title: 'H5 (sans)', value: 'h5' },
        { title: 'H6 (sans)', value: 'h6' },
      ],
      marks: {
        decorators: [
          {
            title: 'Regular',
            value: 'regular',
            blockEditor: createBlockEditorConfig({
              label: 'Regular',
              fontWeight: 400,
            }),
          },
          {
            title: 'Light',
            value: 'light',
            blockEditor: createBlockEditorConfig({
              label: 'Light',
              fontWeight: 200,
            }),
          },
          {
            title: 'Bold',
            value: 'bold',
            blockEditor: createBlockEditorConfig({
              label: 'Bold',
              fontWeight: 900,
            }),
          },
          { title: 'Italic', value: 'em' },
          { title: 'Underline', value: 'underline' },
        ],
        annotations: [
          { name: 'link', type: 'link', title: 'External Link' },
          {
            name: 'internalLink',
            type: 'internalLink',
            title: 'Internal Link',
          },
        ],
      },
    },
    { type: 'richImage' },
  ],
}
