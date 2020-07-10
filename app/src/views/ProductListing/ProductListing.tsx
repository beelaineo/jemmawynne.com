import * as React from 'react'
import { ShopifyCollection } from '../../types'
import { DocumentLink } from '../../components/DocumentLink'
import { useShopData } from '../../providers/ShopDataProvider'
import { ProductListingHeader } from './ProductListingHeader'
import { ItemGrid } from '../../components/ItemGrid'
import { Heading } from '../../components/Text'
import { Hr, CollectionsMain, CollectionsMenu } from './styled'
import { definitely } from '../../utils'

interface ProductListingProps {
  collection: ShopifyCollection
}

export const ProductListing = ({ collection }: ProductListingProps) => {
  const { collectionInfo } = useShopData()
  if (!collection || !collectionInfo) return null
  const relatedCollections = collection?.relatedCollections?.length
    ? collection.relatedCollections
    : collectionInfo.relatedCollections ?? []
  const { products, relatedCollectionsTitle, disableMenu } = collection
  return (
    <>
      <ProductListingHeader
        menuDisabled={disableMenu}
        collection={collection}
      />
      <CollectionsMain menuDisabled={disableMenu}>
        {disableMenu !== true ? (
          <CollectionsMenu>
            <Heading mb={4} level={7} weight={4} family="sans" color="body.8">
              {relatedCollectionsTitle || 'Collections'}
            </Heading>
            <Hr />
            {definitely(relatedCollections).map((rc) =>
              rc.archived !== true ? (
                <Heading
                  key={rc.handle || 'some-key'}
                  mt={5}
                  level={7}
                  weight={4}
                  family="sans"
                  color="body.6"
                >
                  <DocumentLink document={rc}>{rc.title}</DocumentLink>
                </Heading>
              ) : null,
            )}
          </CollectionsMenu>
        ) : null}
        <ItemGrid items={products} />
      </CollectionsMain>
    </>
  )
}
