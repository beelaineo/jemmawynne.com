import * as React from 'react'
import { Carousel } from './Carousel'
import {
  ShopifyCollection,
  ShopifyProduct,
  RichPageLink as RichPageLinkType,
} from '../../types'
import { ProductThumbnail } from '../Product'
import { RichPageLink } from '../RichPageLink'
import { CollectionThumbnail } from '../Collection'

interface ItemsCarouselProps {
  items: Array<ShopifyCollection | ShopifyProduct | RichPageLinkType>
}

export const ItemsCarousel = ({ items }: ItemsCarouselProps) => {
  console.log(items)
  return (
    <Carousel>
      {items.map((item) =>
        item.__typename === 'ShopifyProduct' ? (
          <ProductThumbnail key={item._key} product={item} />
        ) : item.__typename === 'ShopifyCollection' ? (
          <CollectionThumbnail key={item._key} collection={item} />
        ) : item.__typename === 'RichPageLink' ? (
          <RichPageLink key={item._key} link={item} />
        ) : null,
      )}
    </Carousel>
  )
}
