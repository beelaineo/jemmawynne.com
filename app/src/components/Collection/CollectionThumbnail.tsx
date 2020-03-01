import * as React from 'react'
import Link from 'next/link'
import { unwindEdges } from '@good-idea/unwind-edges'
import { ShopifyCollection, RichImage } from '../../types'
import { ImageWrapper, TextWrapper } from './styled'
import { Image } from '../Image'
import { Heading } from '../Text'

interface CollectionThumbnailProps {
  collection: ShopifyCollection
  image?: RichImage | null
}

export const CollectionThumbnail = ({
  collection,
  image,
}: CollectionThumbnailProps) => {
  const { sourceData } = collection
  if (!sourceData) return null

  const products = sourceData.products
    ? //
      // @ts-ignore
      unwindEdges(sourceData.products)[0]
    : null

  const to = `/collections/${collection.handle}`
  return (
    <Link href={to}>
      <a>
        <Image image={image || sourceData.image} ratio={1} />
        <Heading my={2} level={3}>
          {collection.title}
        </Heading>
        {products && products.length ? (
          <Heading color="body.6" level={5}>
            {products.length} items
          </Heading>
        ) : null}
      </a>
    </Link>
  )
}
