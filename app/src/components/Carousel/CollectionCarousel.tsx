import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { Carousel } from './Carousel'
import {
  ShopifyCollection,
  Collection,
  Product,
  ShopifyProductSource,
} from '../../types'
import { ProductThumbnail } from '../Product'

interface CollectionCarouselProps {
  collection: ShopifyCollection | Collection
}

const getProducts = (
  collection: ShopifyCollection | Collection,
): Product[] | ShopifyProductSource[] => {
  switch (collection.__typename) {
    case 'ShopifyCollection':
      const productNodes = collection?.products?.products
      if (!productNodes) return []
      return productNodes
        .map((pNode) => pNode?.sourceData)
        .reduce(
          (acc, current) =>
            current !== undefined && current !== null ? [...acc, current] : acc,
          [],
        )

    case 'Collection':
      const [collectionProducts] = unwindEdges(collection.products)
      return collectionProducts
    default:
      // @ts-ignore
      throw new Error(`Cannot get products for type "${collection.__typename}"`)
  }
}

export const CollectionCarousel = ({ collection }: CollectionCarouselProps) => {
  const products = getProducts(collection)
  if (!products || !products.length) return null

  return (
    <Carousel>
      {//
      // @ts-ignore no clue here
      products.map((product: Product | ShopifyProductSource) => {
        const key =
          product.__typename === 'Product'
            ? product.id
            : product._key || 'some-key'
        return <ProductThumbnail key={key} hidePrice={true} product={product} />
      })}
    </Carousel>
  )
}
