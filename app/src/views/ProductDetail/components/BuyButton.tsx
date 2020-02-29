import * as React from 'react'
import { UseCheckoutValues } from 'use-shopify'
import { StorefrontApiProductVariant } from '../../../types'
import { ButtonPrimary } from '../styled'
import { Placeholder } from '../../../components/Placeholder'

interface Props extends Pick<UseCheckoutValues, 'addLineItem'> {
  currentVariant?: StorefrontApiProductVariant
  quantity?: number
}

export const BuyButton = ({ currentVariant, addLineItem, quantity }: Props) => {
  if (!currentVariant) return null
  const handleClick = () => {
    addLineItem({ variantId: currentVariant.id, quantity: quantity || 1 })
  }
  if (!currentVariant.availableForSale) {
    return <Placeholder>Out of stock</Placeholder>
  }
  return (
    <ButtonPrimary disabled={Boolean(!currentVariant)} onClick={handleClick}>
      add to cart
    </ButtonPrimary>
  )
}
