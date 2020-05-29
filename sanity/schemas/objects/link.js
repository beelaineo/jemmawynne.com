import * as React from 'react'
import { BlockPreview } from '../components/BlockPreview'
import {
  getImageThumbnail,
  getReferencedDocument,
  getShopifyThumbnail,
} from '../utils'

const getTypeText = (doc) => {
  if (!doc) return ''
  if (doc._type === 'shopifyProduct') return 'Product'
  if (doc._type === 'shopifyCollection') return 'Collection'
  if (doc._type === 'page') return 'Page'
  return ''
}

const getPreviewValues = async (values) => {
  const { document, title, image } = values

  if (!document || !document._ref) {
    return { title: '(empty)' }
  }

  const doc = await getReferencedDocument(document._ref)
  if (doc && doc._type === 'stockists') {
    return { title: 'Stockists' }
  }
  if (!doc) {
    return {
      title: '🛑 Document reference is missing',
      subtitles: 'To fix, delete this item and add a new link',
    }
  }
  const customThumbnail = await getImageThumbnail(image)
  const shopifyThumbnail =
    doc && (doc._type === 'shopifyProduct' || doc._type === 'shopifyCollection')
      ? getShopifyThumbnail(doc)
      : undefined
  const subtitles = [
    `🔗 ${getTypeText(doc)}: ${doc.title}`,
    doc && doc.archived === true
      ? `🛑 This collection is archived and will not be displayed on the site.`
      : undefined,
  ].filter(Boolean)

  return {
    src: customThumbnail || shopifyThumbnail,
    title: title || doc.title,
    subtitles,
  }
}

export const externalLink = {
  title: 'External Link',
  type: 'object',
  name: 'externalLink',
  icon: () => (
    <span role="img" aria-label="Link" style={{ fontSize: '3em' }}>
      🔗
    </span>
  ),
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'newTab',
      type: 'boolean',
      title: 'Open in New Tab',
    },
  ],
  preview: {
    select: {
      url: 'url',
      newTab: 'newTab',
    },
    prepare: ({ url, newTab }) => {
      return {
        title: url,
        subtitle: newTab ? '⧉ Opens in new tab' : undefined,
      }
    },
  },
}

export const internalLink = {
  title: 'Page, Product, or Collection',
  description: 'Link to a Page, Product, or Collection',
  name: 'internalLink',
  type: 'object',
  fields: [
    {
      name: 'document',
      title: 'Linked Page',
      type: 'reference',
      options: {
        filter: 'archived != true',
      },
      to: [
        { type: 'shopifyProduct' },
        { type: 'shopifyCollection' },
        { type: 'page' },
        { type: 'stockists' },
      ],
    },
  ],
  preview: {
    select: {
      document: 'document',
    },
    component: (props) => (
      <BlockPreview {...props} getPreviewValues={getPreviewValues} />
    ),
  },
}

export const richPageLink = {
  title: 'Page, Product, or Collection',
  description: 'Link to a Page, Product, or Collection',
  name: 'richPageLink',
  type: 'object',
  fields: [
    {
      name: 'document',
      title: 'Linked Page',
      type: 'reference',

      options: {
        filter: 'archived != true',
      },
      to: [
        { type: 'shopifyProduct' },
        { type: 'shopifyCollection' },
        { type: 'page' },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'If left empty, the title of the linked page, product, or collection will be used.',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'array',
      description: '(captions will not appear in carousels)',
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
      name: 'image',
      title: 'Image',
      description:
        'If left empty, the image of the linked product or document will be used.',
      type: 'richImage',
    },
    {
      name: 'hoverImage',
      title: 'Hover Image',
      description:
        'If left empty, the second image of the linked product will be used.',
      type: 'richImage',
    },
  ],
  preview: {
    select: {
      document: 'document',
      title: 'title',
      image: 'image',
    },
    component: (props) => (
      <BlockPreview {...props} getPreviewValues={getPreviewValues} />
    ),
  },
}
