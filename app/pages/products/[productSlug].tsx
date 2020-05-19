import * as React from 'react'
import gql from 'graphql-tag'
import { PageContext, catchErrors } from '../_app'
import { ShopifyProduct, ShopifyCollection } from '../../src/types'
import {
  saneShopifyCollectionFragment,
  saneShopifyProductFragment,
  carouselFragment,
} from '../../src/graphql'
import { NotFound, ProductDetail } from '../../src/views'

interface ProductProps {
  product?: ShopifyProduct
  collections: ShopifyCollection[]
}

const Product = ({ product, collections }: ProductProps) => {
  if (!product) return <NotFound />
  return (
    <ProductDetail
      key={product._id || 'some-key'}
      product={product}
      collections={collections}
    />
  )
}

const productQuery = gql`
  query ProductPageQuery($handle: String) {
    allShopifyProduct(
      where: { handle: { eq: $handle }, archived: { neq: true } }
    ) {
      ...SaneShopifyProductFragment
      related {
        ...CarouselFragment
      }
    }
  }
  ${saneShopifyProductFragment}
  ${carouselFragment}
`

const collectionsQuery = gql`
  query ProductPageCollectionsQuery($productId: ID) {
    allShopifyCollection(
      where: { _: { references: $productId }, archived: { neq: true } }
    ) {
      ...SaneShopifyCollectionFragment
      products {
        ...SaneShopifyProductFragment
      }
    }
  }
  ${saneShopifyCollectionFragment}
  ${saneShopifyProductFragment}
`

interface ProductResponse {
  allShopifyProduct: ShopifyProduct[]
}

interface CollectionsResponse {
  allShopifyCollection: ShopifyCollection[]
}

Product.getInitialProps = catchErrors(async (ctx: PageContext) => {
  const { apolloClient, query } = ctx
  const { productSlug } = query
  try {
    const productResponse = await apolloClient.query<ProductResponse>({
      query: productQuery,
      variables: { handle: productSlug },
    })

    const products = productResponse?.data?.allShopifyProduct
    const product = products.length ? products[0] : undefined

    const collectionsResponse = product
      ? await apolloClient.query<CollectionsResponse>({
          query: collectionsQuery,
          variables: { productId: product._id },
        })
      : undefined

    const collections = collectionsResponse
      ? collectionsResponse?.data?.allShopifyCollection
      : []

    return { product, collections }
  } catch (error) {
    return {
      error,
    }
  }
})

export default Product
