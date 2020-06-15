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
      type: 'richText',
    },
    {
      name: 'blocks',
      title: 'Content Blocks',
      type: 'array',
      of: [{ type: 'imageTextBlock' }],
      validation: (Rule) => Rule.max(4),
    },
  ],
  preview: {
    select: {
      blocks: 'blocks',
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare: (props) => {
      const { title, subtitle, blocks } = props
      const firstBlockTitle = blocks.find((block) => block?.header)?.header
      const firstBlockImage = blocks.find((block) => block?.backgroundImage)
        ?.backgroundImage

      return {
        title: firstBlockTitle || title,
        subtitle,
        media: firstBlockImage,
      }
    },
  },
}

export const textBlock = {
  name: 'imageTextBlock',
  type: 'object',
  title: 'Image / Text Block',
  icon: MdTextFields,
  fieldsets: [
    {
      title: 'Text',
      name: 'text',
      options: { collapsible: true, collapsed: false },
    },
    {
      title: 'Image',
      name: 'image',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'string',
      fieldset: 'text',
    },
    {
      name: 'headerFont',
      title: 'Header Font',
      type: 'fontPicker',
      fieldset: 'text',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'richText',
      fieldset: 'text',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'colorPicker',
      fieldset: 'text',
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'colorPicker',
      fieldset: 'text',
    },
    {
      name: 'textAlign',
      type: 'textAlign',
      fieldset: 'text',
    },
    {
      name: 'cta',
      title: 'Link Button',
      type: 'cta',

      fieldset: 'text',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'richImage',
      fieldset: 'image',
    },
    {
      name: 'hoverImage',
      title: 'Hover Image',
      type: 'richImage',
      fieldset: 'image',
    },
  ],

  preview: {
    select: {
      header: 'header',
      media: 'backgroundImage',
    },
    prepare: ({ header, media }) => {
      return {
        title: header,
        media,
      }
    },
  },
}
