import * as React from 'react'
import gql from 'graphql-tag'
import { PageContext } from '../_app'
import { ShopifyProduct } from '../../src/types'
import {
  saneShopifyCollectionFragment,
  saneShopifyProductFragment,
} from '../../src/graphql'
import { NotFound, ProductDetail } from '../../src/views'

interface ProductProps {
  product?: ShopifyProduct
}

const Product = ({ product }: ProductProps) => {
  if (!product) return <NotFound />
  return <ProductDetail product={product} />
}

const productQuery = gql`
  query ProductPageQuery($handle: String) {
    allShopifyProduct(
      where: { handle: { eq: $handle }, archived: { neq: true } }
    ) {
      ...SaneShopifyProductFragment
      collections {
        ...SaneShopifyCollectionFragment
      }
    }
  }
  ${saneShopifyCollectionFragment}
  ${saneShopifyProductFragment}
`

interface ProductResponse {
  allShopifyProduct: [ShopifyProduct]
}

Product.getInitialProps = async (ctx: PageContext) => {
  const { apolloClient, query } = ctx
  const { productSlug } = query
  const productResponse = await apolloClient.query<ProductResponse>({
    query: productQuery,
    variables: { handle: productSlug },
  })

  const products = productResponse?.data?.allShopifyProduct
  const product = products.length ? products[0] : undefined

  return { product }
}

export default Product
