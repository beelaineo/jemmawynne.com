import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { ShopifyCollection, ShopifyProduct } from '../../types'
import { Carousel } from './Carousel'
import { ProductThumbnail } from '../Product'

interface CollectionCarouselProps {
  collection: ShopifyCollection
  /* */
}

export const CollectionCarousel = ({ collection }: CollectionCarouselProps) => {
  const { products } = collection
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
        return <ProductThumbnail key={key} product={product} />
      })}
    </Carousel>
  )
}
