import * as React from 'react'
import { ShopifyProduct, Product, Collection } from '../../../types/generated'
import { CarouselBlock } from '../../../components/ContentBlock/CarouselBlock'
import { unwindEdges } from '../../../utils/graphql'

interface ProductRelatedProps {
  product: Product
  saneProduct?: ShopifyProduct
}

export const ProductRelated = (props: ProductRelatedProps) => {
  const { product } = props
  const customRelated = props?.saneProduct?.related
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
  const [collections] = unwindEdges<Collection>(product.collections)
  if (!collections || !collections.length) return null

  const defaultTitle = `Shop the ${collections[0].title} Collection`
  const collectionContent = {
    title: defaultTitle,
    collection: collections[0],
  }
  // @ts-ignore TODO update after graphql migration
  return <CarouselBlock content={collectionContent} />
}
