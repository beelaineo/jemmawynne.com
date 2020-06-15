import gql from 'graphql-tag'
import { SiteSettings, Menu, ProductInfo, CollectionInfo } from '../../types'
import {
  ctaFragment,
  internalLinkFragment,
  richPageLinkFragment,
  sanityRichImageFragment,
  sanityImageFragment,
  productInfoFragment,
} from './fragments'
import { request } from '../request'

export const SHOP_DATA_QUERY = gql`
  {
    Menu(id: "menu-settings") {
      __typename
      _id
      _type
      _key
      _createdAt
      menuItems {
        ... on Cta {
          __typename
          ...CTAFragment
        }
        ... on SubMenu {
          __typename
          _key
          _type
          title
          columns {
            __typename
            _key
            title
            links {
              ... on RichPageLink {
                __typename
                ...RichPageLinkFragment
              }
              ... on LinkGroup {
                __typename
                _key
                _type
                title
                links {
                  ...InternalLinkFragment
                }
              }
            }

            images {
              ...SanityRichImageFragment
            }
          }
        }
      }
    }
    ProductInfo(id: "productInfo") {
      __typename
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
        __typename
        _key
        _type
        tag
        infoBlocks {
          ...ProductInfoFragment
        }
      }
      swatches {
        __typename
        _type
        _key
        colorName
        swatchImage {
          ...SanityImageFragment
        }
      }
    }
    CollectionInfo(id: "collectionInfo") {
      __typename
      relatedCollections {
        __typename
        _id
        _type
        _key
        title
        handle
        shopifyId
      }
    }
    SiteSettings(id: "site-settings") {
      __typename
      _id
      _type
      banner {
        __typename
        dismissable
        announcements {
          __typename
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
        __typename
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
  ${sanityRichImageFragment}
`

export interface ShopDataResponse {
  Menu: Menu
  ProductInfo: ProductInfo
  CollectionInfo: CollectionInfo
  SiteSettings: SiteSettings
}

export const requestShopData = async () => {
  const response = await request<ShopDataResponse>(SHOP_DATA_QUERY)
  return response
}
