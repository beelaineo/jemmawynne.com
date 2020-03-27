import * as React from 'react'
import { Box } from '@xstyled/styled-components'
import Link from 'next/link'
import { unwindEdges } from '@good-idea/unwind-edges'
import { ShopifyCollection, RichImage } from '../../types'
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
        <Box mt={5}>
          <Heading
            mb={3}
            level={7}
            textTransform="uppercase"
            weight={2}
            letterSpacing="0.06em"
            family="sans"
          >
            {collection.title}
          </Heading>
          {products && products.length ? (
            <Heading color="body.6" level={5}>
              {products.length} items
            </Heading>
          ) : null}
        </Box>
      </a>
    </Link>
  )
}
