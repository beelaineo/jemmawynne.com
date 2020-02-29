import * as React from 'react'
import { ShopifyProduct } from '../../src/types'
import { NotFound, ProductDetail } from '../../src/views'
import { client } from '../../src/utils/sanity'

interface ProductQueryResult {
  productByHandle: ShopifyProduct
  allShopifyProducts: [ShopifyProduct]
}

interface ProductProps {
  productData: ShopifyProduct
}

function head<T>(arr: T[]): T {
  return arr ? arr[0] : undefined
}

const Product = ({ productData }: ProductProps) => {
  if (!productData) return <NotFound />
  return <ProductDetail product={productData} />
}

const productQuery = `
*[_type == "shopifyProduct" && handle == $handle]{
  collections[]->{
    products[]->,
    ...

  },
  ...
}[0]
`

Product.getInitialProps = async (ctx: any) => {
  const { productSlug } = ctx.query
  const productData = await client.fetch(productQuery, { handle: productSlug })
  return { productData }
}

export default Product
