export const imageFragment = /* GraphQL */ `
  fragment ImageFragment on Image {
    id
    altText
    originalSrc
  }
`

export const sanityImageFragment = /* GraphQL */ `
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
