import * as React from 'react'
import Link from 'next/link'
import { ShopifyCollection } from '../../types'
import { ImageWrapper, TextWrapper } from './styled'
import { Image } from '../Image'
import { Heading } from '../Text'

interface CollectionThumbnailProps {
  collection: ShopifyCollection
}

export const CollectionThumbnail = ({
  collection,
}: CollectionThumbnailProps) => {
  if (!collection.sourceData) return null
  const { products } = collection.sourceData
  if (!products || !products.edges || products.edges.length === 0) return null

  const to = `/collections/${collection.handle}`
  return (
    <Link href={to}>
      <a>
        <ImageWrapper>
          <Image image={collection.sourceData.image} ratio={1} />
        </ImageWrapper>
        <TextWrapper>
          <Heading level={3}>{collection.title}</Heading>
          <Heading level={6}>{products.edges.length} items</Heading>
        </TextWrapper>
      </a>
    </Link>
  )
}
