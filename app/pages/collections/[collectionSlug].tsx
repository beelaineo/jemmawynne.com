import * as React from 'react'
import gql from 'graphql-tag'
import { ShopifyCollection } from '../../src/types'
import { NotFound, ProductListing } from '../../src/views'
import { heroFragment, shopifySourceImageFragment } from '../../src/graphql'

interface CollectionQueryResult {
  allShopifyCollection: [ShopifyCollection]
}

export const collectionQuery = gql`
  query CollectionPageQuery($handle: String) {
    allShopifyCollection(where: { handle: { eq: $handle } }) {
      _id
      _type
      _key
      title
      handle
      shopifyId
      sourceData {
        id
        handle
        title
        description
        image {
          ...ShopifySourceImageFragment
        }
      }
      hero {
        ...HeroFragment
      }
      products {
        _id
        _key
        _type
        shopifyId
        title
        handle
        sourceData {
          id
          title
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images {
            edges {
              cursor
              node {
                ...ShopifySourceImageFragment
              }
            }
          }
        }
      }
    }
  }

  ${heroFragment}
  ${shopifySourceImageFragment}
`
interface CollectionProps {
  collection: ShopifyCollection
}

const Collection = ({ collection }: CollectionProps) => {
  if (!collection) return <NotFound />
  return <ProductListing collection={collection} />
}

Collection.getInitialProps = async (ctx: any) => {
  const { apolloClient, query } = ctx
  const variables = { handle: query.collectionSlug }
  const response = await apolloClient.query({
    query: collectionQuery,
    variables,
  })

  const collections = response?.data?.allShopifyCollection
  const collection = collections.length ? collections[0] : undefined
  return { collection }
}

export default Collection
