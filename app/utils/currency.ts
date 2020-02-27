import { ShopifyMoneyV2, StorefrontApiMoneyV2 } from '../types'

export const formatMoney = ({
  amount,
  currencyCode,
}: ShopifyMoneyV2 | StorefrontApiMoneyV2): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  })
    .format(parseFloat(amount))
    .replace(/\.00$/, '')
