import { blocksToPlainText } from '../utils'

export const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Header 2', value: 'h2' },
            { title: 'Header 3', value: 'h3' },
            { title: 'Normal', value: 'normal' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    },
    {
      name: 'textAlign',
      type: 'textAlign',
    },
    {
      name: 'textPosition',
      title: 'Text Position',
      type: 'position',
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'cta',
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'colorPicker',
    },
    {
      name: 'image',
      title: 'Background Image',
      type: 'richImage',
    },
    {
      name: 'mobileImage',
      title: 'Background Image (mobile)',
      type: 'richImage',
    },
    {
      name: 'textPositionMobile',
      title: 'Text Position (Mobile)',
      type: 'position',
    },

    {
      name: 'textColorMobile',
      title: 'Text Color (Mobile)',
      type: 'colorPicker',
    },
  ],
  preview: {
    select: {
      title: 'body',
      media: 'image',
    },
    prepare: ({ title, media }) => {
      return {
        media,
        title: title && title.length ? blocksToPlainText(title) : '(no text)',
      }
    },
  },
}
