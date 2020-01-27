import { SaneMoney, StorefrontApiMoneyV2 } from '../types'

export const formatMoney = ({
  amount,
  currencyCode,
}: SaneMoney | StorefrontApiMoneyV2): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  })
    .format(parseFloat(amount))
    .replace(/\.00$/, '')
