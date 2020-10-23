import * as React from 'react'
import gql from 'graphql-tag'
import { GetStaticProps } from 'next'
import { NotFound, Stockists } from '../src/views'
import { Stockists as StockistsType } from '../src/types'
import {
  imageTextBlockFragment,
  carouselFragment,
  heroFragment,
  request,
  requestShopData,
} from '../src/graphql'

interface StockistsResponse {
  Stockists: StockistsType
}

const stockistsQuery = gql`
  query StockistsQuery {
    Stockists(id: "stockists") {
      _id
      _type
      title
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
      showUs
      us {
        ...StockistFragment
      }
      showIntl
      international {
        ...StockistFragment
      }
      showOnline
      online {
        ...StockistFragment
      }
    }
  }
  fragment StockistFragment on Stockist {
    _key
    _type
    name
    location
    website
    phone
  }
  ${carouselFragment}
  ${imageTextBlockFragment}
  ${heroFragment}
`

interface StockistsProps {
  stockists: StockistsType
}

const StockistsPage = ({ stockists }: StockistsProps) => {
  if (!stockists) return <NotFound />
  return <Stockists stockists={stockists} />
}

export const getStaticProps: GetStaticProps = async () => {
  const [shopData, response] = await Promise.all([
    requestShopData(),
    request<StockistsResponse>(stockistsQuery),
  ])

  const stockists = response?.Stockists

  return {
    props: {
      shopData,
      stockists,
    },
    revalidate: 60,
  }
}

export default StockistsPage
