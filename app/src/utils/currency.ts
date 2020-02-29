import { ShopifyMoneyV2, StorefrontApiMoneyV2 } from '../types'

export const formatMoney = ({
  amount,
  currencyCode,
}: ShopifyMoneyV2 | StorefrontApiMoneyV2): string => {
  if (!amount) throw new Error('You must supply an amount')
  if (!currencyCode) throw new Error('You must supply a currencyCode')
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  })
    .format(parseFloat(amount))
    .replace(/\.00$/, '')
}
