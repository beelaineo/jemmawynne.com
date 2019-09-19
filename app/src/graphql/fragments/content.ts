import gql from 'graphql-tag'
import { saneShopifyCollectionFragment } from './saneShopify'
import { backgroundImageFragment } from './media'

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

export const pageLinkFragment = gql`
  fragment PageLinkFragment on PageLink {
    _key
    _type
    title
    captionRaw
    image {
      ...BackgroundImageFragment
    }
    hoverImage {
      ...BackgroundImageFragment
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
  ${backgroundImageFragment}
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
      ...BackgroundImageFragment
    }
    hoverImage {
      ...BackgroundImageFragment
    }
    captionRaw
    cta {
      ...CTAFragment
    }
  }
  ${backgroundImageFragment}
  ${ctaFragment}
`

export const textBlockFragment = gql`
  fragment TextBlockFragment on TextBlock {
    _key
    _type
    header
    bodyRaw
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
    mobileImage {
      ...BackgroundImageFragment
    }
    image {
      ...BackgroundImageFragment
    }
  }
  ${backgroundImageFragment}
`

export const productInfoFragment = gql`
  fragment ProductInfoFragment on ProductInfoBlock {
    _key
    _type
    title
    bodyRaw
  }
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
      ...PageLinkFragment
    }
  }
  ${saneShopifyCollectionFragment}
  ${pageLinkFragment}
`
