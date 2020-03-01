import * as React from 'react'
import { ShopifyCollection } from '../../types'
import { COLLECTION_QUERY, CollectionResult } from './query'
import { PLD, ProductListingHeader } from './ProductListingHeader'
import { ItemGrid } from '../../components/ItemGrid'

interface ProductListingProps {
  collection: ShopifyCollection
}

export const ProductListing = ({ collection }: ProductListingProps) => {
  if (!collection) return null
  return (
    <>
      <ProductListingHeader collection={collection} />
      <ItemGrid items={collection.products} />
    </>
  )
}
