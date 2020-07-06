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
import { useViewportSize } from '../../utils'

interface ItemsCarouselProps {
  items: Array<null | ShopifyCollection | ShopifyProduct | RichPageLinkType>
}

export const ItemsCarousel = ({ items }: ItemsCarouselProps) => {
  const { width: viewportWidth } = useViewportSize()
  const initialSlide = viewportWidth < 650 ? 1 : 0
  return (
    <Carousel initialSlide={initialSlide}>
      {items.map((item) => {
        if (!item) return null
        const { _key } = item
        switch (item.__typename) {
          case 'ShopifyProduct':
            return (
              <ProductThumbnail
                key={_key || 'some-key'}
                headingLevel={5}
                product={item}
              />
            )
          case 'ShopifyCollection':
            return (
              <CollectionThumbnail key={_key || 'some-key'} collection={item} />
            )
          case 'RichPageLink':
            return <RichPageLink key={_key || 'some-key'} link={item} />
          default:
            return null
        }
      })}
    </Carousel>
  )
}
