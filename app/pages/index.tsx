import * as React from 'react'
import gql from 'graphql-tag'
import {
  imageBlockFragment,
  textBlockFragment,
  carouselFragment,
  heroFragment,
} from '../src/graphql'
import { Homepage as HomepageType } from '../src/types'
import { Homepage as HomepageView } from '../src/views/Homepage'
import { NotFound } from '../src/views/NotFound'
import { catchErrors, PageContext } from './_app'

interface HomepageResponse {
  Homepage: HomepageType
}

const homepageQuery = /*  GraphQL */ gql`
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
  ${textBlockFragment}
  ${imageBlockFragment}
  ${carouselFragment}
  ${heroFragment}
`

interface HomepageProps {
  homepage?: HomepageType
}

export const Homepage = ({ homepage }: HomepageProps) => {
  if (!homepage) return <NotFound />

  return <HomepageView homepage={homepage} />
}

Homepage.getInitialProps = catchErrors(async (ctx: PageContext) => {
  const { apolloClient } = ctx
  const response = await apolloClient.query({ query: homepageQuery })

  const homepage = response?.data?.Homepage

  return { homepage }
})

export default Homepage
