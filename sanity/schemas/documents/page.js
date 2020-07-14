import * as React from 'react'
import { BlockPreview } from '../components/BlockPreview'
import { getImageThumbnail, blocksToPlainText } from '../utils'

const getPageBlockPreviewValues = async ({ content }) => {
  const firstImage = content.find((c) => c._type === 'richImage')
  const firstText = content.find((c) => c._type === 'pageText')
  const src = firstImage ? await getImageThumbnail(firstImage) : undefined
  const title = firstText ? firstText.heading : '(no text)'
  const subtitles = firstText ? [blocksToPlainText(firstText.body)] : undefined
  return { title, subtitles, src }
}

export const pageText = {
  title: 'Page Text',
  name: 'pageText',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'body',
      type: 'richText',
    },
  ],
}

export const pageBlock = {
  title: 'Page Block',
  name: 'pageBlock',
  type: 'object',
  fields: [
    {
      name: 'backgroundColor',
      type: 'colorPicker',
      title: 'Background Color',
    },
    {
      name: 'textColor',
      type: 'colorPicker',
      title: 'Text Color',
    },

    {
      name: 'alignment',
      type: 'position',
      title: 'Content Alignment',
    },
    {
      name: 'content',
      type: 'array',
      of: [{ type: 'pageText', isHighlighted: true }, { type: 'richImage' }],
      validation: (Rule) => Rule.max(3),
    },
  ],
  preview: {
    select: {
      content: 'content',
    },
    component: (props) => (
      <BlockPreview {...props} getPreviewValues={getPageBlockPreviewValues} />
    ),
  },
}

export const page = {
  title: 'Page',
  type: 'document',
  name: 'page',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      label: 'Page URL',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'body',
      label: 'Content',
      type: 'array',
      of: [{ type: 'pageBlock' }, { type: 'hero' }, { type: 'carousel' }],
    },
  ],
}
