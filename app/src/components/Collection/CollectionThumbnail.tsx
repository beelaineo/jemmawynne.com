import * as React from 'react'
import Link from 'next/link'
import { ShopifyCollection } from '../../types'
import { ImageWrapper, TextWrapper } from './styled'
import { Image } from '../Image'
import { Header3, Header6 } from '../Text'

interface CollectionThumbnailProps {
  collection: ShopifyCollection
}

export const CollectionThumbnail = ({
  collection,
}: CollectionThumbnailProps) => {
  const to = `/collections/${collection.handle}`
  return (
    <Link href={to}>
      <a>
        <ImageWrapper>
          <Image image={collection.sourceData.image} ratio={1} />
        </ImageWrapper>
        <TextWrapper>
          <Header3>{collection.title}</Header3>
          <Header6>{collection.products.length} items</Header6>
        </TextWrapper>
      </a>
    </Link>
  )
}
