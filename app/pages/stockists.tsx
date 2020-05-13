import * as React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { NotFound, Stockists } from '../src/views'
import { Stockists as StockistsType } from '../src/types'

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

const StockistsPage = () => {
  const response = useQuery(stockistsQuery)
  const { loading, data } = response
  if (loading) return null
  const stockists = data.Stockists
  if (!stockists) return <NotFound />
  return <Stockists stockists={stockists} />
}

export default StockistsPage