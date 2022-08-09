import gql from 'graphql-tag'

export const internalLinkFragment = gql`
  fragment InternalLinkFragment on InternalLink {
    _key
    _type
    label
    document {
      __typename
      ... on Page {
        _type
        _key
        title
        slug {
          current
        }
      }
      ... on PressPage {
        _type
        _key
        title
      }
      ... on ShopifyProduct {
        _key
        _type
        title
        handle
        archived
      }
      ... on ShopifyCollection {
        _key
        _type
        title
        handle
        archived
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
    __typename
    _key
    _type
    url
    newTab
  }
`

export const ctaFragment = gql`
  fragment CTAFragment on Cta {
    __typename
    _key
    _type
    label
    link {
      ...InternalLinkFragment
    }
    mailToEmail
    mailToSubject
  }
  ${internalLinkFragment}
`

export const shopifySourceImageFragment = gql`
  fragment ShopifySourceImageFragment on ShopifySourceImage {
    __typename
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
    __typename
    _id
    _type
    _key
    label
    extension
    path
    url
    metadata {
      __typename
      dimensions {
        __typename
        height
        width
        aspectRatio
      }
    }
  }
`

export const sanityImageFragment = gql`
  fragment SanityImageFragment on Image {
    __typename
    _key
    asset {
      ...SanityImageAssetFragment
    }
  }
  ${sanityImageAssetFragment}
`

export const sanityRichImageFragment = gql`
  fragment SanityRichImageFragment on RichImage {
    __typename
    _key
    altText
    caption
    asset {
      ...SanityImageAssetFragment
    }
    hotspot {
      __typename
      x
      y
      height
      width
    }
  }
  ${sanityImageAssetFragment}
`

export const imageTextBlockFragment = gql`
  fragment ImageTextBlockFragment on ImageTextBlock {
    __typename
    _key
    _type
    header
    headerFont
    bodyRaw
    backgroundColor
    textColor
    textAlign
    cta {
      ...CTAFragment
    }
    backgroundImage {
      ...SanityRichImageFragment
    }
    hoverImage {
      ...SanityRichImageFragment
    }
  }
  ${ctaFragment}
  ${sanityRichImageFragment}
`

export const shopifySourceProductVariantFragment = gql`
  fragment ShopifySourceProductVariantFragment on ShopifySourceProductVariant {
    __typename
    _key
    _type
    availableForSale
    id
    title
    image {
      ...ShopifySourceImageFragment
    }
    priceV2 {
      __typename
      amount
      currencyCode
    }
    selectedOptions {
      __typename
      _key
      name
      value
    }
  }
  ${shopifySourceImageFragment}
`

export const shopifySourceProductFragment = gql`
  fragment ShopifySourceProductFragment on ShopifySourceProduct {
    __typename
    id
    title
    handle
    tags
    productType
    description
    descriptionHtml
    collections {
      __typename
      pageInfo {
        __typename
        hasNextPage
        hasPreviousPage
      }
      edges {
        __typename
        node {
          __typename
          handle
          id
        }
      }
    }
    variants {
      __typename
      edges {
        __typename
        cursor
        node {
          ...ShopifySourceProductVariantFragment
        }
      }
    }
    priceRange {
      __typename
      minVariantPrice {
        __typename
        amount
        currencyCode
      }
      maxVariantPrice {
        __typename
        amount
        currencyCode
      }
    }
    images {
      __typename
      edges {
        __typename
        cursor
        node {
          ...ShopifySourceImageFragment
        }
      }
    }
  }
  ${shopifySourceImageFragment}
  ${shopifySourceProductVariantFragment}
`

export const shopifyProductThumbnailFragment = gql`
  fragment ShopifyProductThumbnailFragment on ShopifyProduct {
    __typename
    _id
    _key
    archived
    shopifyId
    title
    handle
    collections {
      __typename
      handle
    }
    options {
      __typename
      _key
      _type
      shopifyOptionId
      name
      values {
        __typename
        _key
        _type
        value
      }
    }
    sourceData {
      ...ShopifySourceProductFragment
    }
  }

  ${shopifySourceImageFragment}
  ${shopifySourceProductFragment}
`

export const heroFragment = gql`
  fragment HeroFragment on Hero {
    __typename
    _key
    _type
    content {
      __typename
      _key
      _type
      title
      bodyRaw
      cta {
        ...CTAFragment
      }
      align
      textPosition
      textPositionMobile
      textColor
      textColorMobile
    }
    heroStyle
    fullHeight
    contentLayout
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

export const saneMoneyV2Fragment = gql`
  fragment ShopifyMoneyV2Fragment on ShopifyMoneyV2 {
    __typename
    currencyCode
    amount
  }
`

export const tagBadgeFragment = gql`
  fragment TagBadgeFragment on TagBadge {
    __typename
    _key
    tag
    label
  }
`

export const productInfoFragment = gql`
  fragment ProductInfoFragment on ProductInfoBlock {
    __typename
    _key
    _type
    title
    bodyRaw
  }
`

export const saneShopifySourceImageFragment = gql`
  fragment SaneShopifySourceImageFragment on ShopifySourceImage {
    __typename
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
    __typename
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
    __typename
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
    compareAtPriceV2 {
      ...ShopifyMoneyV2Fragment
    }
    requiresShipping
    selectedOptions {
      __typename
      name
      value
    }
  }
  ${shopifySourceImageFragment}
  ${saneMoneyV2Fragment}
`

export const saneShopifyProductFragment = gql`
  fragment SaneShopifyProductFragment on ShopifyProduct {
    __typename
    _id
    _type
    _key
    archived
    title
    handle
    shopifyId
    minVariantPrice
    maxVariantPrice
    infoBlocks {
      ...ProductInfoFragment
    }
    collections {
      __typename
      _key
      handle
    }
    sourceData {
      __typename
      handle
      title
      options {
        __typename
        name
        values
      }
      availableForSale
      productType
      tags
      variants {
        __typename
        pageInfo {
          __typename
          hasNextPage
          hasPreviousPage
        }
        edges {
          __typename
          cursor
          node {
            ...ProductSourceVariantFragment
          }
        }
      }

      priceRange {
        __typename
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
    __typename
    archived
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
      __typename
      description
      descriptionHtml
      id
      image {
        ...SaneShopifySourceImageFragment
      }
      products {
        __typename
        edges {
          __typename
          node {
            __typename
            id
          }
        }
      }
    }
  }
  ${saneShopifySourceImageFragment}
  ${saneShopifyProductFragment}
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
      __typename
      ... on Page {
        _type
        _key
        title
        slug {
          __typename
          current
        }
      }
      ... on ShopifyProduct {
        _key
        _type
        title
        handle
        archived
      }
      ... on ShopifyCollection {
        _key
        _type
        title
        handle
        archived
      }
    }
  }
  ${sanityRichImageFragment}
`

export const carouselFragment = gql`
  fragment CarouselFragment on Carousel {
    __typename
    _key
    _type
    title
    collection {
      __typename
      handle
      products {
        ...ShopifyProductThumbnailFragment
      }
    }
    items {
      ...RichPageLinkFragment
    }
    cta {
      ...CTAFragment
    }
  }
  ${shopifyProductThumbnailFragment}
  ${richPageLinkFragment}
  ${ctaFragment}
`

export const collectionGridFragment = gql`
  fragment CollectionGridFragment on CollectionGrid {
    __typename
    _key
    _type
    customTitle
    customCTALabel
    collection {
      __typename
      handle
      title
      products {
        ...ShopifyProductThumbnailFragment
      }
    }
  }
  ${shopifyProductThumbnailFragment}
`

export const pageBlockFragment = gql`
  fragment PageBlockFragment on PageBlock {
    __typename
    _key
    _type
    backgroundColor
    layoutOptions
    alignment
    content {
      ... on RichImage {
        ...SanityRichImageFragment
      }
      ... on PageText {
        __typename
        _type
        heading
        bodyRaw
      }
    }
  }
  ${sanityRichImageFragment}
`
