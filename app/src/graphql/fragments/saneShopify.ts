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
