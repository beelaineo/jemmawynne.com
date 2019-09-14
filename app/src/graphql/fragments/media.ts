import gql from 'graphql-tag'

export const imageFragment = gql`
  fragment ImageFragment on Image {
    id
    altText
    originalSrc
  }
`

export const sanityImageFragment = gql`
  fragment SanityImageFragment on ImageWithAltText {
    _key
    altText
    asset {
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
    hotspot {
      x
      y
      height
      width
    }
  }
`
