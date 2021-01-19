import { FaParagraph } from 'react-icons/fa'
import { blocksToPlainText } from '../utils'

const getPreviewValues = ({ title, body, cta }) => {
  const fullTitle = body ? [title, blocksToPlainText(body)].join(' | ') : title
  const subtitle = cta && cta.label ? `CTA: ${cta.label}` : undefined
  return {
    title: fullTitle,
    subtitle,
  }
}

export const heroContent = {
  type: 'object',
  title: 'Hero Text',
  name: 'heroContent',
  icon: FaParagraph,
  fields: [
    { name: 'title', type: 'string' },
    { name: 'body', type: 'richText' },
    { name: 'cta', type: 'cta' },
    { name: 'align', type: 'textAlign', title: 'Text Alignment' },
    { title: 'Text Position', name: 'textPosition', type: 'position' },
    {
      name: 'textPositionMobile',
      title: 'Text Position (Mobile)',
      type: 'position',
    },
  ],
  preview: {
    select: { body: 'body', cta: 'cta', title: 'title' },
    prepare: getPreviewValues,
  },
}

export const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  description: 'Hero images & content blocks',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fieldsets: [
    { name: 'content', title: 'Content Blocks' },
    { name: 'images', title: 'Images' },
    { name: 'colors', title: 'Colors' },
  ],
  fields: [
    {
      name: 'content',
      type: 'array',
      fieldset: 'content',
      of: [{ type: 'heroContent' }],
      vaildation: (Rule) => Rule.max(2),
    },
    {
      name: 'contentLayout',
      type: 'string',
      fieldset: 'content',
      description:
        'Determines the layout of multiple content blocks (desktop only)',
      options: {
        list: [
          { title: 'Horiztional', value: 'horizontal' },
          { title: 'Vertical', value: 'vertical' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },

    {
      name: 'fullHeight',
      fieldset: 'images',
      type: 'boolean',
      title: 'Display Hero at Full Height',
      description:
        'Enable this to expand the hero to be full-height. (Desktop only)',
    },

    {
      name: 'image',
      title: 'Background Image',
      type: 'richImage',
      fieldset: 'images',
      description:
        'Recommended dimensions: 1800 x 450 (normal) / 1800 x 1200 (full-height & homepage)',
    },
    {
      name: 'mobileImage',
      title: 'Background Image (mobile)',
      type: 'richImage',
      fieldset: 'images',
      description: 'Recommended dimensions: 1200 x 1800',
    },
    {
      name: 'textColor',
      fieldset: 'colors',
      title: 'Text Color',
      type: 'colorPicker',
    },
    {
      name: 'textColorMobile',
      fieldset: 'colors',
      title: 'Text Color (Mobile)',
      type: 'colorPicker',
    },
  ],
  preview: {
    select: {
      content: 'content',
      media: 'image',
    },
    prepare: ({ content, media }) => {
      const { title, subtitle } =
        content && content.length
          ? getPreviewValues(content[0])
          : { title: '(no text)' }

      return {
        title,
        subtitle,
        media,
      }
    },
  },
}
