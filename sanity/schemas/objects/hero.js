import { FaParagraph } from 'react-icons/fa'
import { GiClick } from 'react-icons/gi'
import { blocksToPlainText } from '../utils'

const getPreviewValues = ({ title, body, cta }) => {
  const fullTitle = body ? [title, blocksToPlainText(body)].join(' | ') : title
  const subtitle = cta && cta.label ? `CTA: ${cta.label}` : undefined
  console.log({ title, body, cta })
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
  options: {
    collapsible: true,
    collapsed: true,
  },
  fieldsets: [{ name: 'options', title: 'Options' }],
  fields: [
    {
      name: 'content',
      type: 'array',
      of: [{ type: 'heroContent' }],
      vaildation: (Rule) => Rule.max(2),
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
      name: 'textColor',
      fieldset: 'options',
      title: 'Text Color',
      type: 'colorPicker',
    },
    {
      name: 'textColorMobile',
      fieldset: 'options',
      title: 'Text Color (Mobile)',
      type: 'colorPicker',
    },
    {
      name: 'fullHeight',
      fieldset: 'options',
      type: 'boolean',
      title: 'Full Height',
    },
    {
      name: 'contentLayout',
      type: 'string',
      fieldset: 'options',
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
