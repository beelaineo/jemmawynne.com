import gql from 'graphql-tag'
import {
  saneShopifyCollectionFragment,
  saneShopifyProductFragment,
} from './saneShopify'
import { sanityImageFragment } from './media'

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
      ...SanityImageFragment
    }
    image {
      ...SanityImageFragment
    }
  }
  ${sanityImageFragment}
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
      ...RichPageLinkFragment
    }
  }
  ${saneShopifyCollectionFragment}
  ${richPageLinkFragment}
`
