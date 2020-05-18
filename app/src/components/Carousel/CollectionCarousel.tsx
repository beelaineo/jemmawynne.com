import * as React from 'react'
import { ShopifyCollection } from '../../types'
import { Carousel } from './Carousel'
import { ProductThumbnail } from '../Product'
import { definitely } from '../../utils'

interface CollectionCarouselProps {
  collection: ShopifyCollection
  /* */
}

export const CollectionCarousel = ({ collection }: CollectionCarouselProps) => {
  const { products } = collection
  if (!products || !products.length) return null

  return (
    <Carousel>
      {definitely(products)
        .filter((product) => product?.archived !== true)
        .map((product) => {
          return (
            <ProductThumbnail
              key={product._key || 'some-key'}
              product={product}
            />
          )
        })}
    </Carousel>
  )
}
