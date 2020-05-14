import * as React from 'react'
import { Carousel } from './Carousel'
import {
  ShopifyCollection,
  ShopifyProduct,
  RichPageLink as RichPageLinkType,
} from '../../types'
import { ProductThumbnail } from '../Product'
import { CollectionThumbnail } from '../Collection'
import { RichPageLink } from '../RichPageLink'

interface ItemsCarouselProps {
  items: Array<null | ShopifyCollection | ShopifyProduct | RichPageLinkType>
}

export const ItemsCarousel = ({ items }: ItemsCarouselProps) => {
  return (
    <Carousel>
      {items.map((item) => {
        if (!item) return null

        const { __typename, _key } = item

        if (!__typename)
          throw new Error(
            `There is no carousel thumbnail for type "${__typename}"`,
          )

        return item.__typename === 'ShopifyProduct' ? (
          <ProductThumbnail key={_key || 'some-key'} product={item} />
        ) : item.__typename === 'ShopifyCollection' ? (
          <CollectionThumbnail key={_key || 'some-key'} collection={item} />
        ) : item.document && item.__typename === 'RichPageLink' ? (
          item.document.__typename === 'ShopifyProduct' ? (
            <ProductThumbnail
              key={_key || 'some-key'}
              image={item.image}
              product={item.document}
            />
          ) : item.document.__typename === 'ShopifyCollection' ? (
            <CollectionThumbnail
              key={_key || 'some-key'}
              image={item.image}
              collection={item.document}
            />
          ) : (
            <RichPageLink key={_key || 'some-key'} link={item} />
          )
        ) : null
      })}
    </Carousel>
  )
}
