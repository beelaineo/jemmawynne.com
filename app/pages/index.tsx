import * as React from 'react'
import gql from 'graphql-tag'
import { GetStaticProps } from 'next'
import {
  imageTextBlockFragment,
  carouselFragment,
  heroFragment,
  requestShopData,
  request,
} from '../src/graphql'
import { Homepage as HomepageType } from '../src/types'
import { Homepage as HomepageView } from '../src/views/Homepage'
import { NotFound } from '../src/views/NotFound'
import { Sentry } from '../src/services/sentry'

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
            ...ImageTextBlockFragment
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
  ${carouselFragment}
  ${imageTextBlockFragment}
  ${heroFragment}
`

interface HomepageProps {
  homepage?: HomepageType
}

export const Homepage = ({ homepage }: HomepageProps) => {
  try {
    if (!homepage) return <NotFound />
    return <HomepageView homepage={homepage} />
  } catch (e) {
    Sentry.captureException(e)
    return <NotFound />
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const [response, shopData] = await Promise.all([
    request<HomepageResponse>(homepageQuery),
    requestShopData(),
  ])
  const homepage = response?.Homepage
  return {
    props: { shopData, homepage },
    revalidate: 60,
  }
}

export default Homepage
