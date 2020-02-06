import gql from 'graphql-tag'
import { ShopifyProduct } from '../../types'
// import {
//   imageFragment,
//   moneyV2Fragment,
//   saneShopifyProductFragment,
//   saneShopifyCollectionFragmentWithoutProducts,
// } from '../../graphql'

// const PRODUCT_QUERY = gql`
//   query ProductQuery($handle: String!) {
//     allShopifyProducts(where: { handle: $handle }) {
//       handle
//     }
//   }
// `

// const PRODUCT_QUERY = gql`
//   query ProductQuery($handle: String!) {
//     allShopifyProducts(where: { handle: $handle }) {
//
//       ...SaneShopifyProductFragment
//       collections {
//         ...SaneShopifyCollectionFragmentWithoutProducts
//       }
//     }
//   }
//   ${saneShopifyProductFragment}
//   ${saneShopifyCollectionFragmentWithoutProducts}
//   ${imageFragment}
//   ${moneyV2Fragment}
// `

export interface ProductQueryResult {
  productByHandle: ShopifyProduct
  allShopifyProducts: [ShopifyProduct]
}
