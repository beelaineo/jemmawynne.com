import * as React from 'react'
import { Carousel } from './Carousel'
import { Collection, Product } from '../../types'
import { ProductThumbnail } from '../Product'
import { CollectionThumbnail } from '../Collection'

interface ItemsCarouselProps {
  items: Array<Collection | Product>
}

export const ItemsCarousel = ({ items }: ItemsCarouselProps) => {
  console.log(items)
  return (
    <Carousel>
      {items.map((item) =>
        item.__typename === 'Product' ? (
          <ProductThumbnail key={item.id} product={item} />
        ) : item.__typename === 'Collection' ? (
          <CollectionThumbnail key={item.id} collection={item} />
        ) : null,
      )}
    </Carousel>
  )
}
