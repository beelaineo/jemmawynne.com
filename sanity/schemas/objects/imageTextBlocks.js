import { MdTextFields, MdCropOriginal } from 'react-icons/md'
import { blocksToPlainText } from '../utils'

export const imageTextSection = {
  name: 'imageTextSection',
  title: 'Text & Images',
  type: 'object',
  icon: MdCropOriginal,
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
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
      name: 'blocks',
      title: 'Content Blocks',
      type: 'array',
      of: [{ type: 'imageBlock' }, { type: 'textBlock' }],
      validation: (Rule) => Rule.max(3),
    },
    {
      name: 'backgroundImage',
      type: 'image',
    },
  ],
}

export const textBlock = {
  name: 'textBlock',
  type: 'object',
  title: 'Text Block',
  icon: MdTextFields,
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      description: 'Tip: Use shift+return for a soft-wrapping line',
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
    { name: 'cta', title: 'Link Button', type: 'cta' },
  ],
}

export const imageBlock = {
  name: 'imageBlock',
  type: 'object',
  title: 'Image Block',
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'richImage',
    },
    {
      name: 'link',
      type: 'internalLink',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'array',
      description: 'Tip: Use shift+return for a soft-wrapping line',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
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
      name: 'hoverImage',
      title: 'Hover Image',
      type: 'richImage',
    },
  ],
  // validation: (Rule) => {
  //   console.log(Rule)
  //   return Rule.required()
  //   return undefined
  // },
  preview: {
    select: {
      caption: 'caption',
      media: 'backgroundImage',
    },
    prepare: ({ caption, media }) => {
      return {
        media,
        title:
          caption && caption.length ? blocksToPlainText(caption) : '(no text)',
      }
    },
  },
}
