import gql from 'graphql-tag'

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
    sourceData {
      description
      id
      images {
        ...SaneShopifySourceImagesFragment
      }
    }
  }
  ${saneShopifySourceImagesFragment}
`
