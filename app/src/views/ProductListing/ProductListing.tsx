import * as React from 'react'
import { useQuery } from 'urql'
import { ShopifyCollection } from '../../types'
import { COLLECTION_QUERY, CollectionResult } from './query'
import { ProductListingHeader } from './ProductListingHeader'
import { ItemGrid } from '../../components/ItemGrid'

interface ProductListingProps {
  collection: ShopifyCollection
}

export const ProductListing = ({ collection }: ProductListingProps) => {
  return (
    <React.Fragment>
      <ProductListingHeader collection={collection} />
      <ItemGrid items={collection.products} />
    </React.Fragment>
  )
}
