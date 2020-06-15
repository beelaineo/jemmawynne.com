import * as React from 'react'
import { ShopifyProduct } from '../../../types'
import { CarouselBlock } from '../../../components/ContentBlock/CarouselBlock'

interface ProductRelatedProps {
  product: ShopifyProduct
}

export const ProductRelated = ({ product }: ProductRelatedProps) => {
  const { collections } = product
  const customRelated = product?.related
  /* Return a custom carousel */
  if (customRelated && customRelated.collection) {
    const customTitle = customRelated.title || customRelated?.collection?.title
    const content = {
      title: customTitle,
      collection: customRelated.collection,
    }
    return <CarouselBlock content={content} />
  }

  if (customRelated && customRelated.items && customRelated.items.length > 0) {
    const content = {
      title: customRelated.title,
      items: customRelated.items,
    }
    return <CarouselBlock content={content} />
  }

  /* Otherwise, find the first collection form the product */
  if (!collections || !collections.length) return null

  const defaultCollection = collections[0]
  if (!defaultCollection) return null
  const defaultTitle = 'More to love'
  const collectionContent = {
    title: defaultTitle,
    collection: collections[0],
  }
  return <CarouselBlock content={collectionContent} />
}
