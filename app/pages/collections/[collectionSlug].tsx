import * as React from 'react'
import gql from 'graphql-tag'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ShopifyCollection } from '../../src/types'
import { NotFound, ProductListing } from '../../src/views'
import {
  request,
  requestShopData,
  shopifyProductThumbnailFragment,
  heroFragment,
  shopifySourceImageFragment,
} from '../../src/graphql'

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
      products {
        ...ShopifyProductThumbnailFragment
      }
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
      disableMenu
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
  ${shopifyProductThumbnailFragment}
`

interface CollectionResponse {
  allShopifyCollection: ShopifyCollection[]
}

interface CollectionProps {
  collection?: ShopifyCollection
}

const Collection = ({ collection }: CollectionProps) => {
  if (!collection) return <NotFound />
  return <ProductListing collection={collection} />
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const variables = { handle: ctx?.params?.collectionSlug || 'foo' }
  const [response, shopData] = await Promise.all([
    request<CollectionResponse>(collectionQuery, variables),
    requestShopData(),
  ])

  const collections = response?.allShopifyCollection
  const collection = collections.length ? collections[0] : undefined

  return {
    props: {
      shopData,
      collection,
    },
    unstable_revalidate: 60,
  }
}

/**
 * Static Routes
 */

// const collectionHandlesQuery = gql`
//   query CollectionHandlesQuery {
//     allShopifyCollection {
//       _id
//       shopifyId
//       handle
//     }
//   }
// `

export const getStaticPaths: GetStaticPaths = async () => {
  // const result = await request<CollectionResponse>(collectionHandlesQuery)
  // const collections = definitely(result?.allShopifyCollection)
  // const paths = collections.map((collection) => ({
  //   params: {
  //     collectionSlug: collection.handle ? collection.handle : undefined,
  //   },
  // }))

  return {
    paths: [],
    fallback: true,
  }
}

export default Collection
