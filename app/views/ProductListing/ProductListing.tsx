import * as React from 'react'
import { useQuery } from 'urql'
import { COLLECTION_QUERY, CollectionResult } from './query'
import { ProductListingHeader } from './ProductListingHeader'
import { ItemGrid } from '../../components/ItemGrid'

interface ProductListingProps {
  match: {
    params: {
      handle: string
    }
  }
}

export const ProductListing = ({ match }: ProductListingProps) => {
  const { handle } = match.params
  const variables = { handle }
  const [response] = useQuery<CollectionResult>({
    query: COLLECTION_QUERY,
    variables,
  })
  if (response.fetching || !response.data) return <p>Loading..</p>
  const collection = response.data.collectionByHandle
  return (
    <React.Fragment>
      <ProductListingHeader collection={collection} />
      <ItemGrid items={collection.products} />
    </React.Fragment>
  )
}
