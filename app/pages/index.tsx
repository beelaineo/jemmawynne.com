import * as React from 'react'
import gql from 'graphql-tag'
import { GetStaticProps } from 'next'
import {
  imageBlockFragment,
  textBlockFragment,
  carouselFragment,
  heroFragment,
  requestShopData,
  request,
} from '../src/graphql'
import { Homepage as HomepageType } from '../src/types'
import { Homepage as HomepageView } from '../src/views/Homepage'
import { NotFound } from '../src/views/NotFound'

interface HomepageResponse {
  Homepage: HomepageType
}

const homepageQuery = /*  GraphQL */ gql`
  query HomepageQuery {
    Homepage(id: "homepage") {
      __typename
      _id
      content {
        ... on ImageTextSection {
          _key
          __typename
          _type
          title
          subtitleRaw
          blocks {
            __typename
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

export const getStaticProps: GetStaticProps = async () => {
  const [response, shopData] = await Promise.all([
    request<HomepageResponse>(homepageQuery),
    requestShopData(),
  ])
  const homepage = response?.Homepage
  return {
    props: { shopData, homepage },
    unstable_revalidate: 60,
  }
}

export default Homepage
