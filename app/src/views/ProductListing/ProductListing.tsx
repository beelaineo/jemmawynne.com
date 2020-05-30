import * as React from 'react'
import { ShopifyCollection, ShopifyProduct } from '../../types'
import { DocumentLink } from '../../components/DocumentLink'
import { useShopData } from '../../providers/ShopDataProvider'
import { ProductListingHeader } from './ProductListingHeader'
import { ItemGrid } from '../../components/ItemGrid'
import { Heading } from '../../components/Text'
import { Hr, CollectionsMain, CollectionsMenu } from './styled'

interface ProductListingProps {
  collection: ShopifyCollection
  products: ShopifyProduct[]
}

export const ProductListing = ({
  collection,
  products,
}: ProductListingProps) => {
  const { collectionInfo } = useShopData()
  if (!collection || !collectionInfo) return null
  const relatedCollections =
    collection.relatedCollections || collectionInfo.relatedCollections || []
  const { disableMenu } = collection
  return (
    <>
      <ProductListingHeader collection={collection} />
      <CollectionsMain menuDisabled={disableMenu}>
        {disableMenu !== true ? (
          <div>
            <CollectionsMenu>
              <Heading mb={4} level={7} weight={3} family="sans" color="body.8">
                Collections
              </Heading>
              <Hr />
              {relatedCollections.map((rc) =>
                rc ? (
                  <Heading
                    key={rc.handle || 'some-key'}
                    mt={5}
                    level={7}
                    weight={3}
                    family="sans"
                    color="body.6"
                  >
                    <DocumentLink document={rc}>{rc.title}</DocumentLink>
                  </Heading>
                ) : null,
              )}
            </CollectionsMenu>
          </div>
        ) : null}
        <ItemGrid items={products} />
      </CollectionsMain>
    </>
  )
}
