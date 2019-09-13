import { sanityImageFragment } from './media'

export const linkFragment = /* GraphQL */ `
  fragment LinkFragment on PageLink {
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

export const textBlockFragment = /* GraphQL */ `
  fragment TextBlockFragment on TextBlock {
    _key
    _type
    title
    bodyRaw
    cta {
      label
      link {
        ...LinkFragment
      }
    }
  }
  ${linkFragment}
`

export const imageBlockFragment = /* GraphQL */ `
  fragment ImageBlockFragment on ImageBlock {
    _key
    _type
    title
    caption
    link {
      ...LinkFragment
    }
    images {
      ...SanityImageFragment
    }
  }
  ${linkFragment}
  ${sanityImageFragment}
`

export const contentSectionFragment = /* GraphQL */ `
  fragment ContentSectionFragment on ContentSection {
    _key
    _type
    layout
    backgroundColor
    textColor
    textAlign
    alignItems
    items {
      ... on ImageBlock {
        ...ImageBlockFragment
      }
      ... on TextBlock {
        ...TextBlockFragment
      }
    }
    backgroundImage {
      ...SanityImageFragment
    }
  }
  ${imageBlockFragment}
  ${textBlockFragment}
`

export const productInfoFragment = /* GraphQL */ `
  fragment ProductInfoFragment on ProductInfoBlock {
    _key
    _type
    title
    bodyRaw
  }
`
