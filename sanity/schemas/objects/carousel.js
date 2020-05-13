import * as React from 'react'
import { BlockPreview } from '../components/BlockPreview'
import {
  getShopifyThumbnail,
  getPageLinkThumbnail,
  getReferencedDocument,
} from '../utils'

const getPreviewValues = async (values) => {
  const { title, collection, items } = values

  const collectionDoc = collection
    ? await getReferencedDocument(collection._ref)
    : undefined
  const collectionImage = collectionDoc
    ? await getShopifyThumbnail(collectionDoc)
    : undefined

  const firstItemImage =
    items && items.length ? await getPageLinkThumbnail(items[0]) : undefined

  const subtitles = [
    collectionDoc ? `🔗 Collection: ${collectionDoc.title}` : undefined,
    collectionDoc && collectionDoc.archived === true
      ? `🛑 This collection is archived and will not be displayed on the site.`
      : undefined,
    items && items.length
      ? `🔗 ${items.length} Link${items.length === 1 ? '' : 's'}`
      : undefined,
  ].filter(Boolean)

  return {
    title: title ? `🎠 Carousel: ${title}` : '🎠 Carousel',
    subtitles,
    src: collectionImage || firstItemImage,
  }
}

export const carousel = {
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
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
      name: 'collection',
      label: 'Collection',
      type: 'reference',
      options: {
        filter: 'archived != true',
      },
      description:
        'Create a carousel from a collection. If a collection is used, items linked to below will be ignored.',
      to: [{ type: 'shopifyCollection' }],
    },
    {
      name: 'items',
      label: 'Carousel Items',
      type: 'array',
      of: [{ type: 'richPageLink' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
      collection: 'collection',
    },
    component: (props) => (
      <BlockPreview {...props} getPreviewValues={getPreviewValues} />
    ),
  },
}
