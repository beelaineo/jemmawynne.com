interface Money {
  amount?: number | string | null
  currencyCode?: string | null
}
export const formatMoney = ({ amount, currencyCode }: Money): string => {
  if (!amount) throw new Error('You must supply an amount')
  if (!currencyCode) throw new Error('You must supply a currencyCode')
  const amt = typeof amount === 'string' ? parseFloat(amount) : amount
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  })
    .format(amt)
    .replace(/\.00$/, '')
}
