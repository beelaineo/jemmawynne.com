import gql from 'graphql-tag'
import { sanityImageFragment } from './media'

export const productInfoFragment = gql`
  fragment ProductInfoFragment on ProductInfoBlock {
    _key
    _type
    title
    bodyRaw
  }
`
const saneMoneyV2Fragment = gql`
  fragment SaneMoneyV2Fragment on SaneMoney {
    currencyCode
    amount
  }
`

export const saneShopifySourceImageFragment = gql`
  fragment SaneShopifySourceImageFragment on ShopifySourceImage {
    _key
    _type
    altText
    id
    originalSrc
    w100
    w300
    w800
  }
`

export const saneShopifySourceImagesFragment = gql`
  fragment SaneShopifySourceImagesFragment on ShopifySourceImages {
    _key
    _type
    edges {
      _key
      cursor
      node {
        ...SaneShopifySourceImageFragment
      }
    }
  }
  ${saneShopifySourceImageFragment}
`

export const saneShopifyCollectionFragmentWithoutProducts = gql`
  fragment SaneShopifyCollectionFragmentWithoutProducts on ShopifyCollection {
    _id
    _type
    _key
    title
    handle
    shopifyId
    sourceData {
      description
      id
      image {
        ...SaneShopifySourceImageFragment
      }
    }
  }
  ${saneShopifySourceImageFragment}
`

export const saneShopifyProductFragmentWithoutRelated = gql`
  fragment SaneShopifyProductFragmentWithoutRelated on ShopifyProduct {
    _id
    _type
    _key
    title
    handle
    shopifyId
    infoBlocks {
      ...ProductInfoFragment
    }
    sourceData {
      handle
      title
      options {
        name
        values
      }
      availableForSale
      productType
      tags
      priceRange {
        minVariantPrice {
          ...SaneMoneyV2Fragment
        }
        maxVariantPrice {
          ...SaneMoneyV2Fragment
        }
      }
      description
      id
      images {
        ...SaneShopifySourceImagesFragment
      }
    }
  }
  ${saneMoneyV2Fragment}
  ${productInfoFragment}
  ${saneShopifySourceImagesFragment}
`

export const richPageLinkFragment = gql`
  fragment RichPageLinkFragment on RichPageLink {
    _key
    _type
    title
    captionRaw
    image {
      ...SanityImageFragment
    }
    hoverImage {
      ...SanityImageFragment
    }
    document {
      ... on Page {
        _type
        _key
        title
        slug {
          current
        }
      }
      ... on ShopifyProduct {
        ...SaneShopifyProductFragmentWithoutRelated
      }
      ... on ShopifyCollection {
        ...SaneShopifyCollectionFragmentWithoutProducts
      }
    }
  }
  ${sanityImageFragment}
  ${saneShopifyCollectionFragmentWithoutProducts}
  ${saneShopifyProductFragmentWithoutRelated}
`

export const saneShopifyProductFragment = gql`
  fragment SaneShopifyProductFragment on ShopifyProduct {
    _id
    _type
    _key
    title
    handle
    shopifyId
    infoBlocks {
      ...ProductInfoFragment
    }
    related {
      _key
      _type
      title
      collection {
        _id
        _type
        _key
        title
        handle
        shopifyId
        products {
          ...SaneShopifyProductFragmentWithoutRelated
        }

        sourceData {
          description
          id
          image {
            ...SaneShopifySourceImageFragment
          }
        }
      }
      items {
        ...RichPageLinkFragment
      }
    }
    sourceData {
      handle
      title
      options {
        name
        values
      }
      availableForSale
      productType
      tags
      priceRange {
        minVariantPrice {
          ...SaneMoneyV2Fragment
        }
        maxVariantPrice {
          ...SaneMoneyV2Fragment
        }
      }
      description
      id
      images {
        ...SaneShopifySourceImagesFragment
      }
    }
  }
  ${saneMoneyV2Fragment}
  ${productInfoFragment}
  ${richPageLinkFragment}
  ${saneShopifySourceImagesFragment}
  ${saneShopifyProductFragmentWithoutRelated}
`

export const saneShopifyCollectionFragment = gql`
  fragment SaneShopifyCollectionFragment on ShopifyCollection {
    _id
    _type
    _key
    title
    handle
    shopifyId
    products {
      ...SaneShopifyProductFragment
    }
    sourceData {
      description
      id
      image {
        ...SaneShopifySourceImageFragment
      }
    }
  }
  ${saneShopifySourceImageFragment}
  ${saneShopifyProductFragment}
`

export const internalLinkFragment = gql`
  fragment InternalLinkFragment on InternalLink {
    _key
    _type
    document {
      ... on Page {
        _type
        _key
        title
        slug {
          current
        }
      }
      ... on ShopifyProduct {
        _key
        _type
        title
        handle
      }
      ... on ShopifyCollection {
        _key
        _type
        title
        handle
      }
    }
  }
`

export const ctaFragment = gql`
  fragment CTAFragment on Cta {
    _key
    _type
    label
    link {
      ...InternalLinkFragment
    }
  }
  ${internalLinkFragment}
`

export const externalLinkFragment = gql`
  fragment ExternalLinkFragment on ExternalLink {
    _key
    _type
    url
    newTab
  }
`

export const imageBlockFragment = gql`
  fragment ImageBlockFragment on ImageBlock {
    _key
    _type
    backgroundImage {
      ...SanityImageFragment
    }
    hoverImage {
      ...SanityImageFragment
    }
    captionRaw
    link {
      ...InternalLinkFragment
    }
  }
  ${sanityImageFragment}
  ${internalLinkFragment}
`

export const textBlockFragment = gql`
  fragment TextBlockFragment on TextBlock {
    _key
    _type
    header
    bodyRaw
    textAlign
    cta {
      ...CTAFragment
    }
  }
  ${ctaFragment}
`

export const heroFragment = gql`
  fragment HeroFragment on Hero {
    _key
    _type
    bodyRaw
    textPosition
    textPositionMobile
    textAlign
    cta {
      ...CTAFragment
    }
    mobileImage {
      ...SanityImageFragment
    }
    image {
      ...SanityImageFragment
    }
  }
  ${sanityImageFragment}
  ${ctaFragment}
`

export const carouselFragment = gql`
  fragment CarouselFragment on Carousel {
    _key
    _type
    title
    collection {
      ...SaneShopifyCollectionFragment
    }
    items {
      ...RichPageLinkFragment
    }
  }
  ${saneShopifyCollectionFragment}
  ${richPageLinkFragment}
`
