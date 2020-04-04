import * as React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
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
      relatedCollections {
        _id
        _type
        _key
        title
        handle
        shopifyId
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
  handle: string
}

const Collection = ({ handle }: CollectionProps) => {
  const { loading, data } = useQuery(collectionQuery, { variables: { handle } })
  if (loading) return null
  const collections = data?.allShopifyCollection
  const collection = collections.length ? collections[0] : undefined

  if (!collection) return <NotFound />
  return <ProductListing collection={collection} />
}

export const getServerSideProps = async (ctx: any) => {
  const { query } = ctx
  return { props: { handle: query.collectionSlug } }
}

export default Collection
