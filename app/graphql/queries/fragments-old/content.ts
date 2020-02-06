import gql from 'graphql-tag'
// import { sanityImageFragment } from './media'

// export const productInfoFragment = gql`
//   fragment ProductInfoFragment on ProductInfoBlock {
//     _key
//     _type
//     title
//     bodyRaw
//   }
// `
//
// export const saneShopifyCollectionFragmentWithoutProducts = gql`
//   fragment SaneShopifyCollectionFragmentWithoutProducts on ShopifyCollection {
//     _id
//     _type
//     _key
//     title
//     handle
//     shopifyId
//     sourceData {
//       description
//       id
//       image {
//         ...SaneShopifySourceImageFragment
//       }
//     }
//   }
//   ${saneShopifySourceImageFragment}
// `
//
// export const saneShopifyProductFragment = gql`
//   fragment SaneShopifyProductFragment on ShopifyProduct {
//     _id
//     _type
//     _key
//     title
//     handle
//     shopifyId
//     infoBlocks {
//       ...ProductInfoFragment
//     }
//     related {
//       _key
//       _type
//       title
//       collection {
//         _id
//         _type
//         _key
//         title
//         handle
//         shopifyId
//         products {
//           ...SaneShopifyProductFragmentWithoutRelated
//         }
//
//         sourceData {
//           description
//           id
//           image {
//             ...SaneShopifySourceImageFragment
//           }
//         }
//       }
//       items {
//         ...RichPageLinkFragment
//       }
//     }
//     sourceData {
//       handle
//       title
//       options {
//         name
//         values
//       }
//       availableForSale
//       productType
//       tags
//       priceRange {
//         minVariantPrice {
//           ...SaneMoneyV2Fragment
//         }
//         maxVariantPrice {
//           ...SaneMoneyV2Fragment
//         }
//       }
//       description
//       id
//       images {
//         ...SaneShopifySourceImagesFragment
//       }
//     }
//   }
//   ${saneMoneyV2Fragment}
//   ${productInfoFragment}
//   ${richPageLinkFragment}
//   ${saneShopifySourceImagesFragment}
//   ${saneShopifyProductFragmentWithoutRelated}
// `
//
// export const externalLinkFragment = gql`
//   fragment ExternalLinkFragment on ExternalLink {
//     _key
//     _type
//     url
//     newTab
//   }
// `
//
// export const heroFragment = gql`
//   fragment HeroFragment on Hero {
//     _key
//     _type
//     bodyRaw
//     textPosition
//     textPositionMobile
//     textAlign
//     cta {
//       ...CTAFragment
//     }
//     mobileImage {
//       ...SanityImageFragment
//     }
//     image {
//       ...SanityImageFragment
//     }
//   }
//   ${sanityImageFragment}
//   ${ctaFragment}
// `
