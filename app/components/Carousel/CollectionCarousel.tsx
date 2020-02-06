import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { Carousel } from './Carousel'
import {
  ShopifyCollection,
  ShopifyProduct,
  ShopifyProductSource,
} from '../../types'
import { ProductThumbnail } from '../Product'

interface CollectionCarouselProps {
  collection: ShopifyCollection
}

const getProducts = (collection: ShopifyCollection): ShopifyProduct[] => {
  const productNodes = collection?.products
  if (!productNodes) return []
  return productNodes
    .map((pNode) => pNode?.sourceData)
    .reduce(
      (acc, current) =>
        current !== undefined && current !== null ? [...acc, current] : acc,
      [],
    )
}

export const CollectionCarousel = ({ collection }: CollectionCarouselProps) => {
  const { products } = collection
  // const products = getProducts(collection)
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
