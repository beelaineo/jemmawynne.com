import { MoneyV2 } from '../types'

export const formatMoney = ({ amount, currencyCode }: MoneyV2): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  })
    .format(amount)
    .replace(/\.00$/, '')
