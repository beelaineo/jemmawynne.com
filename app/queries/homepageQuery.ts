import {
  imageBlockFragment,
  textBlockFragment,
  carouselFragment,
  heroFragment,
} from './fragments'
import gql from 'graphql-tag'
import { Homepage } from '../types'

export interface HomepageResponse {
  Homepage: Homepage
}

export const homepageQuery = /*  GraphQL */ gql`
  query HomepageQuery {
    Homepage(id: "homepage") {
      _id
      content {
        ... on ImageTextSection {
          _key
          _type
          title
          subtitleRaw
          blocks {
            ... on TextBlock {
              ...TextBlockFragment
            }
            ... on ImageBlock {
              ...ImageBlockFragment
            }
          }
        }
        ... on Hero {
          ...HeroFragment
        }
        ... on Carousel {
          ...CarouselFragment
        }
      }
    }
  }
  ${imageBlockFragment}
  ${textBlockFragment}
  ${carouselFragment}
  ${heroFragment}
`
