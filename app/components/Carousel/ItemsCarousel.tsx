import * as React from 'react'
import { Carousel } from './Carousel'
import { ShopifyCollection, ShopifyProduct, RichPageLink } from '../../types'
import { ProductThumbnail } from '../Product'
import { CollectionThumbnail } from '../Collection'

interface ItemsCarouselProps {
  items: Array<ShopifyCollection | ShopifyProduct | RichPageLink>
}

export const ItemsCarousel = ({ items }: ItemsCarouselProps) => {
  return (
    <Carousel>
      {items.map((item) =>
        item.__typename === 'ShopifyProduct' ? (
          <ProductThumbnail key={item._id} product={item} />
        ) : item.__typename === 'ShopifyCollection' ? (
          <CollectionThumbnail key={item._id} collection={item} />
        ) : null,
      )}
    </Carousel>
  )
}
