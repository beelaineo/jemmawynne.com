import * as React from 'react'
import gql from 'graphql-tag'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ShopifyProduct } from '../../src/types'
import {
  saneShopifyProductFragment,
  carouselFragment,
  request,
  requestShopData,
} from '../../src/graphql'
import { NotFound, ProductDetail } from '../../src/views'

interface ProductProps {
  product?: ShopifyProduct
}

const Product = ({ product }: ProductProps) => {
  if (!product) return <NotFound />
  return <ProductDetail key={product._id || 'some-key'} product={product} />
}

const productQuery = gql`
  query ProductPageQuery($handle: String) {
    allShopifyProduct(
      where: { handle: { eq: $handle }, archived: { neq: true } }
    ) {
      ...SaneShopifyProductFragment
      collections {
        __typename
        _id
        _key
        title
        handle
        shopifyId
      }

      related {
        ...CarouselFragment
      }
    }
  }
  ${saneShopifyProductFragment}
  ${carouselFragment}
`

interface ProductResponse {
  allShopifyProduct: ShopifyProduct[]
}

/**
 * Initial Props
 */

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx
  if (!params) return { props: { product: undefined } }
  const variables = { handle: params.productSlug }

  const [response, shopData] = await Promise.all([
    request<ProductResponse>(productQuery, variables),
    requestShopData(),
  ])
  const products = response?.allShopifyProduct

  const product = products && products.length ? products[0] : null
  return { props: { product, shopData }, unstable_revalidate: 60 }
}

/**
 * Static Paths
 */
// const pageHandlesQuery = gql`
//   query ProductHandlesQuery {
//     allShopifyProduct {
//       _id
//       shopifyId
//       handle
//     }
//   }
// `

export const getStaticPaths: GetStaticPaths = async () => {
  // const result = await request<Response>(pageHandlesQuery)
  // const products = definitely(result?.allShopifyProduct)
  // const paths = products.map((product) => ({
  //   params: { productSlug: product.handle ? product.handle : undefined },
  // }))

  return {
    paths: [],
    fallback: true,
  }
}

export default Product
