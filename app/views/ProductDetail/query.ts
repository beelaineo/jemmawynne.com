import gql from 'graphql-tag'
import { Product, ShopifyProduct } from '../../types/generated'
import {
  imageFragment,
  moneyV2Fragment,
  saneShopifyProductFragment,
} from '../../graphql/fragments'

export const PRODUCT_QUERY = gql`
  query ProductQuery($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
      tags
      productType
      collections(first: 5) {
        edges {
          node {
            title
            products(first: 8) {
              edges {
                cursor
                node {
                  id
                  title
                  handle
                  images(first: 2) {
                    edges {
                      cursor
                      node {
                        ...ImageFragment
                      }
                    }
                  }
                  priceRange {
                    minVariantPrice {
                      ...MoneyV2Fragment
                    }
                    maxVariantPrice {
                      ...MoneyV2Fragment
                    }
                  }
                }
              }
            }
          }
        }
      }
      images(first: 50) {
        edges {
          node {
            ...ImageFragment
          }
        }
      }
      options {
        name
        values
      }
      variants(first: 50) {
        edges {
          node {
            id
            availableForSale
            priceV2 {
              amount
              currencyCode
            }
            sku
            title
            selectedOptions {
              name
              value
            }
            image {
              ...ImageFragment
            }
          }
        }
      }
    }

    allShopifyProducts(where: { handle: $handle }) {
      ...SaneShopifyProductFragment
    }
  }
  ${saneShopifyProductFragment}
  ${imageFragment}
  ${moneyV2Fragment}
`

export interface ProductQueryResult {
  productByHandle: Product | void
  allShopifyProducts: [ShopifyProduct]
}
