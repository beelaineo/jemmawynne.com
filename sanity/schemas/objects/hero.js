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
  fieldsets: [
    {
      name: 'options',
      title: 'Colors & Layout',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    { name: 'title', type: 'string' },
    { name: 'body', type: 'richText' },
    {
      name: 'cta',
      type: 'cta',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'align',
      fieldset: 'options',
      type: 'textAlign',
      title: 'Text Alignment',
    },
    {
      title: 'Text Color',
      fieldset: 'options',
      name: 'textColor',
      type: 'colorPicker',
    },
    {
      title: 'Text Color (mobile)',
      fieldset: 'options',
      name: 'textColorMobile',
      type: 'colorPicker',
    },
    {
      title: 'Text Position',

      fieldset: 'options',
      name: 'textPosition',
      type: 'position',
    },
    {
      name: 'textPositionMobile',
      fieldset: 'options',
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
  ],
  fields: [
    {
      name: 'content',
      type: 'array',
      fieldset: 'content',
      of: [{ type: 'heroContent' }],
      validation: (Rule) => Rule.max(2),
    },
    {
      name: 'heroStyle',
      type: 'string',
      title: 'Hero Template Style',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Double (1:2 / Left)', value: 'one-two' },
          { title: 'Double (2:1 / Right)', value: 'two-one' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'contentLayout',
      type: 'string',
      fieldset: 'content',
      description:
        'Determines the layout of multiple content blocks (desktop only)',
      options: {
        list: [
          { title: 'Horizontal', value: 'horizontal' },
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
      description: 'Recommended dimensions: 1200 x 1200',
    },
    {
      name: 'image_secondary',
      title: 'Background Image (secondary)',
      type: 'richImage',
      fieldset: 'images',
      hidden: ({ parent }) =>
        parent?.heroStyle && parent?.heroStyle === 'default',
      description: 'Recommended dimensions: 1200 x 1200',
    },
    {
      name: 'mobileImage_secondary',
      title: 'Background Image (mobile, secondary)',
      type: 'richImage',
      fieldset: 'images',
      hidden: ({ parent }) =>
        parent?.heroStyle && parent?.heroStyle === 'default',
      description: 'Recommended dimensions: 1200 x 1200',
    },
  ],
  initialValue: {
    heroStyle: 'default',
  },
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
