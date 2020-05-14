import * as React from 'react'
import { ShopifyProduct, ShopifyCollection } from '../../../types'
import { CarouselBlock } from '../../../components/ContentBlock/CarouselBlock'

interface ProductRelatedProps {
  product: ShopifyProduct
  collections: ShopifyCollection[]
}

export const ProductRelated = (props: ProductRelatedProps) => {
  const { collections, product } = props
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
  const defaultTitle = `Shop the ${defaultCollection.title} Collection`
  const collectionContent = {
    title: defaultTitle,
    collection: collections[0],
  }
  console.log(defaultCollection)
  // @ts-ignore TODO update after graphql migration
  return <CarouselBlock content={collectionContent} />
}
