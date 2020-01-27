import gql from 'graphql-tag'
import { Menu, ProductInfo } from '../../types'
import {
  ctaFragment,
  internalLinkFragment,
  richPageLinkFragment,
  productInfoFragment,
} from '../../graphql/fragments'

export const SHOP_DATA_QUERY = gql`
  {
    Menu(id: "menu-settings") {
      _id
      _type
      _key
      _createdAt
      menuItems {
        ... on Cta {
          ...CTAFragment
        }
        ... on SubMenu {
          _key
          _type
          title
          columns {
            ... on RichPageLink {
              ...RichPageLinkFragment
            }
            ... on LinkGroup {
              _key
              _type
              title
              links {
                ...InternalLinkFragment
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
  ${ctaFragment}
  ${internalLinkFragment}
  ${productInfoFragment}
  ${richPageLinkFragment}
`

export interface ShopDataResponse {
  Menu: Menu
  ProductInfo: ProductInfo
}
