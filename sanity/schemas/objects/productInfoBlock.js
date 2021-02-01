import * as React from 'react'
import { BlockPreview } from '../components/BlockPreview'
import { getReferencedDocument } from '../utils'

export const productInfoBlock = {
  title: 'Product Information',
  type: 'object',
  name: 'productInfoBlock',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'body',
      label: 'Text',
      type: 'array',
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
  ],
}

const tagRegex = /^[\w\s-]+$/

export const productInfoBlocksByTag = {
  title: 'Product Information (by tag)',
  type: 'object',
  name: 'productInfoBlocksByTag',
  fields: [
    {
      title: 'Tag',
      name: 'tag',
      description: 'Tag to match from Shopify.',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          const passes = tagRegex.test(value)
          if (passes) return true
          return 'Tags may only contain letters, numbers, and spaces'
        }),
    },
    {
      title: 'Info Blocks',
      name: 'infoBlocks',
      type: 'array',
      of: [{ type: 'productInfoBlock' }],
    },
  ],
}

const getPreviewValues = async (values) => {
  const { collections, infoBlocks } = values
  const collectionDocs = await Promise.all(
    collections.map((c) => getReferencedDocument(c._ref)),
  )

  const docTitles =
    collectionDocs.length === 0
      ? ['(no collections specified)']
      : collectionDocs.map((c) => c.title).join(', ')

  const subtitles = [['in', docTitles].join(' ')]

  const title =
    infoBlocks.length === 0
      ? '(empty)'
      : infoBlocks.map((i) => i.title).join(', ')

  return {
    title,
    subtitles,
  }
}

export const productInfoBlocksByCollection = {
  title: 'Product Information (by collection)',
  type: 'object',
  name: 'productInfoBlocksByCollection',
  fields: [
    {
      title: 'Matching Collections',
      name: 'collections',
      description:
        'These accordions will appear on products that are in any of these collections',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'shopifyCollection' }] }],
    },
    {
      title: 'Info Blocks',
      name: 'infoBlocks',
      type: 'array',
      of: [{ type: 'productInfoBlock' }],
    },
  ],
  preview: {
    select: {
      collections: 'collections',
      infoBlocks: 'infoBlocks',
    },
    component: (props) => (
      <BlockPreview {...props} getPreviewValues={getPreviewValues} />
    ),
  },
}
