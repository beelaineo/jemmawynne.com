import * as React from 'react'
import gql from 'graphql-tag'
import { NotFound, Stockists } from '../src/views'
import { Stockists as StockistsType } from '../src/types'
import { PageContext, catchErrors } from './_app'

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

StockistsPage.getInitialProps = catchErrors(async (ctx: PageContext) => {
  const { apolloClient } = ctx
  const response = await apolloClient.query({ query: stockistsQuery })

  const stockists = response?.data?.Stockists
  return { stockists }
})

export default StockistsPage
