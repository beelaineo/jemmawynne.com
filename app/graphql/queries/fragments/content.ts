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

export const imageFragment = gql`
  fragment ImageFragment on Image {
    id
    altText
    originalSrc
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
  fragment SanityImageFragment on RichImage {
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

export const saneMoneyV2Fragment = gql`
  fragment SaneMoneyV2Fragment on SaneMoney {
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
            _key
            _type
            handle
            id
          }
        }
      }
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
      id
      image {
        ...SaneShopifySourceImageFragment
      }
    }
  }
  ${saneShopifySourceImageFragment}
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
        ...SaneShopifyProductFragment
      }
      ... on ShopifyCollection {
        ...SaneShopifyCollectionFragment
      }
    }
  }
  ${sanityImageFragment}
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
