import * as React from 'react'
import { x } from '@xstyled/styled-components'
import Link from 'next/link'
import { ShopifyCollection, RichImage } from '../../types'
import { Image } from '../Image'
import { Heading } from '../Text'
import { CollectionThumb } from './styled'

interface CollectionThumbnailProps {
  collection: ShopifyCollection
  image?: RichImage | null
}

export const CollectionThumbnail = ({
  collection,
  image,
}: CollectionThumbnailProps) => {
  const { archived, sourceData } = collection
  if (!sourceData || archived === true) return null

  // const products = sourceData.products
  //   ? //
  //     // @ts-ignore
  //     unwindEdges(sourceData.products)[0]
  //   : null
  //
  const to = `/collections/${collection.handle}`
  return (
    <CollectionThumb>
      <Link href={to}>
        <a>
          <Image image={image || sourceData.image} ratio={1} />
          <x.div mt={3}>
            <Heading
              mb={3}
              weight={3}
              level={7}
              textTransform="uppercase"
              family="sans"
            >
              {collection.title}
            </Heading>
          </x.div>
        </a>
      </Link>
    </CollectionThumb>
  )
}
