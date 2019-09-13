import { Collection } from 'use-shopify'
import gql from 'graphql-tag'
import { Paginated } from '@good-idea/unwind-edges'
import { Menu, ProductInfo } from '../../types/generated'
import {
  linkFragment,
  imageBlockFragment,
  productInfoFragment,
} from '../../graphql/fragments'

export const SHOP_DATA_QUERY = /* GraphQL */ gql`
  {
    Menu(id: "menu-settings") {
      _id
      _type
      _key
      _createdAt
      menuItems {
        ... on MenuLink {
          _key
          _type
          label
          link {
            ...LinkFragment
          }
        }
        ... on SubMenu {
          _key
          _type
          title
          columns {
            ... on ImageBlock {
              ...ImageBlockFragment
            }
            ... on LinkGroup {
              _key
              _type
              title
              links {
                ...LinkFragment
              }
            }
          }
        }
      }
    }
    ProductInfo(id: "productInfo") {
      _id
      _type
      _key
      _createdAt
      globalBlocks {
        ...ProductInfoFragment
      }
      ringBlocks {
        ...ProductInfoFragment
      }
      earringBlocks {
        ...ProductInfoFragment
      }
      braceletBlocks {
        ...ProductInfoFragment
      }
      necklaceBlocks {
        ...ProductInfoFragment
      }
      blocksByTag {
        _key
        _type
        tag
        infoBlocks {
          ...ProductInfoFragment
        }
      }
    }
  }
  ${productInfoFragment}
  ${linkFragment}
  ${imageBlockFragment}
`

export interface ShopDataResponse {
  Menu: Menu
  ProductInfo: ProductInfo
}
