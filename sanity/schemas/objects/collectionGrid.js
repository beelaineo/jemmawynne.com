import * as React from 'react'
import { BlockPreview } from '../components/BlockPreview'
import { getShopifyThumbnail, getReferencedDocument } from '../utils'

const getPreviewValues = async (values) => {
  const { collection } = values

  const collectionDoc = collection
    ? await getReferencedDocument(collection._ref)
    : undefined
  const collectionImage = collectionDoc
    ? await getShopifyThumbnail(collectionDoc)
    : undefined

  const title = collectionDoc?.title
    ? `Collection Grid: ${collectionDoc.title}`
    : '(no title)'

  return {
    title,
    src: collectionImage,
  }
}

export const collectionGrid = {
  title: 'Collection Grid',
  type: 'object',
  name: 'collectionGrid',
  description: 'Display a grid of products from a collection',
  fields: [
    {
      title: 'Collection',
      name: 'collection',
      type: 'reference',
      to: [{ type: 'shopifyCollection' }],
    },
  ],

  preview: {
    select: {
      collection: 'collection',
    },
    component: (props) => (
      <BlockPreview {...props} getPreviewValues={getPreviewValues} />
    ),
  },
}
