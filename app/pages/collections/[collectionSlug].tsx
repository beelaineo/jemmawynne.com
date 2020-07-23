import * as React from 'react'
import gql from 'graphql-tag'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ShopifyCollection } from '../../src/types'
import { sanityQuery } from '../../src/services/sanity'
import { NotFound, ProductListing } from '../../src/views'
import { request, requestShopData } from '../../src/graphql'
import { definitely } from '../../src/utils'
import { sanityCollectionQuery } from '../../src/views/ProductListing'

interface CollectionResponse {
  allShopifyCollection: ShopifyCollection[]
}

interface CollectionProps {
  collection?: ShopifyCollection
  params: any
}

const Collection = ({ params, collection, ...rest }: CollectionProps) => {
  if (typeof window !== 'undefined') console.log({ params, ...rest })
  if (!collection) return <NotFound />
  return <ProductListing collection={collection} />
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const handle = ctx?.params?.collectionSlug ?? 'foo'
  const [collections, shopData] = await Promise.all([
    sanityQuery<ShopifyCollection[]>(sanityCollectionQuery, {
      handle,
      productStart: 0,
      productEnd: 13,
    }),

    requestShopData(),
  ])

  return {
    props: {
      shopData,
      params: ctx.params,
      collection: collections[0] || null,
    },
    unstable_revalidate: 60,
  }
}

/**
 * Static Routes
 */

// const collectionHandlesQuery = gql`
//   query CollectionHandlesQuery {
//     allShopifyCollection(
//       where: { shopifyId: { neq: null }, archived: { neq: true } }
//     ) {
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
