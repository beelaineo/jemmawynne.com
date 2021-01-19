import * as React from 'react'
import { BlockPreview } from '../components/BlockPreview'
import {
  getTypeText,
  getShopifyThumbnail,
  getReferencedDocument,
} from '../utils'

const getPreviewValues = async (values) => {
  const { customTitle, collection } = values

  const collectionDoc = collection
    ? await getReferencedDocument(collection._ref)
    : undefined
  const collectionImage = collectionDoc
    ? await getShopifyThumbnail(collectionDoc)
    : undefined

  const title =
    customTitle || collectionDoc?.title
      ? `Collection Grid: ${collectionDoc.title}`
      : '(no title)'

  const subtitles = [`🔗 ${getTypeText(collectionDoc)}: ${collectionDoc.title}`]

  return {
    title,
    src: collectionImage,
    subtitles,
  }
}

export const collectionGrid = {
  title: 'Collection Grid',
  type: 'object',
  name: 'collectionGrid',
  description: 'Display a grid of products from a collection',
  fields: [
    {
      title: 'Custom Title',
      name: 'customTitle',
      type: 'string',
      description: 'Defaults to the title of the collection',
    },
    {
      title: 'Collection',
      name: 'collection',
      type: 'reference',
      to: [{ type: 'shopifyCollection' }],
    },
    {
      title: 'Custom CTA Label',
      name: 'customCTALabel',
      type: 'string',
      description: 'Customize the CTA Label. Defaults to "Discover more"',
    },
  ],

  preview: {
    select: {
      collection: 'collection',
      customTitle: 'customTitle',
    },
    component: (props) => (
      <BlockPreview {...props} getPreviewValues={getPreviewValues} />
    ),
  },
}
