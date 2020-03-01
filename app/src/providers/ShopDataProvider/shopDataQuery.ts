import gql from 'graphql-tag'
import { SiteSettings, Menu, ProductInfo } from '../../types'
import {
  ctaFragment,
  internalLinkFragment,
  externalLinkFragment,
  richPageLinkFragment,
  productInfoFragment,
} from '../../graphql'

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
    SiteSettings(id: "site-settings") {
      _id
      _type
      links {
        ... on ExternalLink {
          ...ExternalLinkFragment
        }
        ... on InternalLink {
          ...InternalLinkFragment
        }
      }
      mailerTitle
      mailerSubtitle
    }
  }
  ${ctaFragment}
  ${internalLinkFragment}
  ${externalLinkFragment}
  ${productInfoFragment}
  ${richPageLinkFragment}
`

export interface ShopDataResponse {
  Menu: Menu
  ProductInfo: ProductInfo
  SiteSettings: SiteSettings
}
