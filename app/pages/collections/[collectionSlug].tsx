import * as React from 'react'
import { ShopifyCollection } from '../../types'
import { NotFound, ProductListing } from '../../views'
import { client } from '../../utils/sanity'

interface CollectionQueryResult {
  collectionByHandle: ShopifyCollection
  allShopifyCollections: [ShopifyCollection]
}

interface CollectionProps {
  collectionData: ShopifyCollection
}

function head<T>(arr: T[]): T {
  return arr ? arr[0] : undefined
}

const Collection = ({ collectionData }: CollectionProps) => {
  if (!collectionData) return <NotFound />
  return <ProductListing collection={collectionData} />
}

const collectionQuery = `
*[_type == "shopifyCollection" && handle == $handle]{
  products[]->,
  ...
}[0]
`

Collection.getInitialProps = async (ctx: any) => {
  const { collectionSlug } = ctx.query
  const collectionData = await client.fetch(collectionQuery, {
    handle: collectionSlug,
  })
  return { collectionData }
}

export default Collection
