import gql from 'graphql-tag'

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
  fragment SanityImageFragment on ImageWithAltText {
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

export const backgroundImageFragment = gql`
  fragment BackgroundImageFragment on BackgroundImage {
    asset {
      ...SanityImageAssetFragment
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
  }
  ${sanityImageAssetFragment}
`
