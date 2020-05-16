import gql from 'graphql-tag'

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
      ... on Stockists {
        _key
        _type
        title
      }
    }
  }
`

export const externalLinkFragment = gql`
  fragment ExternalLinkFragment on ExternalLink {
    _key
    _type
    url
    newTab
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

export const shopifySourceImageFragment = gql`
  fragment ShopifySourceImageFragment on ShopifySourceImage {
    id
    altText
    originalSrc
    w100
    w300
    w800
  }
`

export const sanityImageAssetFragment = gql`
  fragment SanityImageAssetFragment on SanityImageAsset {
    _id
    _type
    _key
    label
    extension
    path
    url
    metadata {
      dimensions {
        height
        width
        aspectRatio
      }
    }
  }
`

export const sanityImageFragment = gql`
  fragment SanityImageFragment on Image {
    _key
    asset {
      ...SanityImageAssetFragment
    }
  }
  ${sanityImageAssetFragment}
`

export const sanityRichImageFragment = gql`
  fragment SanityRichImageFragment on RichImage {
    _key
    altText
    asset {
      ...SanityImageAssetFragment
    }
    hotspot {
      x
      y
      height
      width
    }
  }
  ${sanityImageAssetFragment}
`

export const heroFragment = gql`
  fragment HeroFragment on Hero {
    _key
    _type
    bodyRaw
    title
    textPosition
    textPositionMobile
    textColor
    textColorMobile
    textAlign
    cta {
      ...CTAFragment
    }
    mobileImage {
      ...SanityRichImageFragment
    }
    image {
      ...SanityRichImageFragment
    }
  }
  ${sanityRichImageFragment}
  ${ctaFragment}
`

export const imageBlockFragment = gql`
  fragment ImageBlockFragment on ImageBlock {
    _key
    _type
    backgroundImage {
      ...SanityRichImageFragment
    }
    hoverImage {
      ...SanityRichImageFragment
    }
    captionRaw
    link {
      ...InternalLinkFragment
    }
  }
  ${sanityRichImageFragment}
  ${internalLinkFragment}
`

export const saneMoneyV2Fragment = gql`
  fragment ShopifyMoneyV2Fragment on ShopifyMoneyV2 {
    currencyCode
    amount
  }
`

export const productInfoFragment = gql`
  fragment ProductInfoFragment on ProductInfoBlock {
    _key
    _type
    title
    bodyRaw
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

export const productSourceVariantFragment = gql`
  fragment ProductSourceVariantFragment on ShopifySourceProductVariant {
    _key
    _type
    availableForSale
    id
    title
    sku
    weight
    weightUnit
    image {
      ...ShopifySourceImageFragment
    }
    priceV2 {
      ...ShopifyMoneyV2Fragment
    }
    requiresShipping
    selectedOptions {
      name
      value
    }
  }
  ${shopifySourceImageFragment}
  ${saneMoneyV2Fragment}
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
      variants {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            ...ProductSourceVariantFragment
          }
        }
      }
      priceRange {
        minVariantPrice {
          ...ShopifyMoneyV2Fragment
        }
        maxVariantPrice {
          ...ShopifyMoneyV2Fragment
        }
      }
      description
      descriptionHtml
      id
      images {
        ...SaneShopifySourceImagesFragment
      }
    }
  }
  ${saneMoneyV2Fragment}
  ${productInfoFragment}
  ${productSourceVariantFragment}
  ${saneShopifySourceImagesFragment}
`

export const saneShopifyCollectionFragment = gql`
  fragment SaneShopifyCollectionFragment on ShopifyCollection {
    _id
    _type
    _key
    title
    handle
    shopifyId
    sourceData {
      description
      descriptionHtml
      id
      image {
        ...SaneShopifySourceImageFragment
      }
      products {
        edges {
          node {
            id
          }
        }
      }
    }
  }
  ${saneShopifySourceImageFragment}
`

export const richPageLinkFragment = gql`
  fragment RichPageLinkFragment on RichPageLink {
    _key
    _type
    __typename
    title
    captionRaw
    image {
      ...SanityRichImageFragment
    }
    hoverImage {
      ...SanityRichImageFragment
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
        ...SaneShopifyProductFragment
      }
      ... on ShopifyCollection {
        ...SaneShopifyCollectionFragment
      }
    }
  }
  ${sanityRichImageFragment}
  ${saneShopifyCollectionFragment}
  ${saneShopifyProductFragment}
`

export const carouselFragment = gql`
  fragment CarouselFragment on Carousel {
    _key
    _type
    title
    collection {
      products {
        ...SaneShopifyProductFragment
      }
    }
    items {
      ...RichPageLinkFragment
    }
  }
  ${saneShopifyProductFragment}
  ${richPageLinkFragment}
`
