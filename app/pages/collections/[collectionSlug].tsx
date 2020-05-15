import * as React from 'react'
import gql from 'graphql-tag'
import { PageContext } from '../_app'
import { ShopifyProduct, ShopifyCollection } from '../../src/types'
import { NotFound, ProductListing } from '../../src/views'
import { heroFragment, shopifySourceImageFragment } from '../../src/graphql'

export const collectionQuery = gql`
  query CollectionPageQuery($handle: String) {
    allShopifyCollection(
      where: { handle: { eq: $handle }, archived: { neq: true } }
    ) {
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
    }
  }

  ${heroFragment}
  ${shopifySourceImageFragment}
`

const productsQuery = gql`
  query AllCollectionProducts($collectionId: ID) {
    allShopifyProduct(
      where: { _: { references: $collectionId }, archived: { neq: true } }
    ) {
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
        options {
          name
          values
        }
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

  ${shopifySourceImageFragment}
`

interface CollectionResponse {
  allShopifyCollection: ShopifyCollection[]
}

interface ProductsResponse {
  allShopifyProduct: ShopifyProduct[]
}

interface CollectionProps {
  collection?: ShopifyCollection
  products: ShopifyProduct[]
}

const Collection = ({ collection, products }: CollectionProps) => {
  if (!collection) return <NotFound />
  return <ProductListing collection={collection} products={products} />
}

Collection.getInitialProps = async (ctx: PageContext) => {
  const { apolloClient, query } = ctx
  const collectionResponse = await apolloClient.query<CollectionResponse>({
    query: collectionQuery,
    variables: { handle: query.collectionSlug },
  })

  const collections = collectionResponse?.data?.allShopifyCollection
  const collection = collections.length ? collections[0] : undefined

  const productsResponse = collection
    ? await apolloClient.query<ProductsResponse>({
        query: productsQuery,
        variables: { collectionId: collection._id },
      })
    : undefined

  const products = productsResponse?.data?.allShopifyProduct || []

  return { collection, products }
}

export default Collection
