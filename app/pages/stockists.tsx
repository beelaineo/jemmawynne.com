import * as React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { NotFound, Stockists } from '../src/views'
import { Stockists as StockistsType } from '../src/types'
import { heroFragment } from '../src/graphql'

interface StockistsResponse {
  stockists: StockistsType
}

const stockistsQuery = gql`
  query StockistsQuery {
    Stockists(id: "stockists") {
      _id
      _type
      title
      us {
        ...StockistFragment
      }
      international {
        ...StockistFragment
      }
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
`

interface StockistsProps {
  stockists: StockistsType
}

const StockistsPage = ({ stockists }: StockistsProps) => {
  if (!stockists) return <NotFound />
  return <Stockists stockists={stockists} />
}

StockistsPage.getInitialProps = async (ctx: any) => {
  const { apolloClient } = ctx

  const response = await apolloClient.query({
    query: stockistsQuery,
  })

  const stockists = response?.data?.Stockists

  return { stockists }
}

export default StockistsPage
