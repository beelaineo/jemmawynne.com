import gql from 'graphql-tag'
import { SiteSettings, Menu, ProductInfo, CollectionInfo } from '../../types'
import {
  ctaFragment,
  internalLinkFragment,
  richPageLinkFragment,
  sanityImageFragment,
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
            _key
            title
            links {
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

            images {
              ...SanityImageFragment
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
    CollectionInfo(id: "collectionInfo") {
      relatedCollections {
        _id
        _type
        _key
        title
        handle
        shopifyId
      }
    }
    SiteSettings(id: "site-settings") {
      _id
      _type
      banner {
        dismissable
        announcements {
          _key
          text
          cta {
            ... on Cta {
              ...CTAFragment
            }
          }
        }
      }
      aboutRaw
      linkGroups {
        _key
        _type
        title
        links {
          ...InternalLinkFragment
        }
      }
    }
  }
  ${ctaFragment}
  ${internalLinkFragment}
  ${productInfoFragment}
  ${richPageLinkFragment}
  ${sanityImageFragment}
`

export interface ShopDataResponse {
  Menu: Menu
  ProductInfo: ProductInfo
  CollectionInfo: CollectionInfo
  SiteSettings: SiteSettings
}
