import gql from 'graphql-tag'

export const moneyV2Fragment = gql`
  fragment MoneyV2Fragment on MoneyV2 {
    currencyCode
    amount
  }
`
