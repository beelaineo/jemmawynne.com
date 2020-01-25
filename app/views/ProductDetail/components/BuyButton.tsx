import * as React from 'react'
import { UseCheckoutValues } from 'use-shopify'
import { ProductVariant } from '../../../types'
import { ButtonPrimary } from '../styled'
import { Placeholder } from '../../../components/Placeholder'

interface Props extends Pick<UseCheckoutValues, 'addLineItem'> {
  currentVariant?: Pick<ProductVariant, 'id' | 'availableForSale'>
  quantity?: number
}

export const BuyButton = ({ currentVariant, addLineItem, quantity }: Props) => {
  const handleClick = () => {
    addLineItem({ variantId: currentVariant.id, quantity: quantity || 1 })
  }
  if (!currentVariant.availableForSale)
    return <Placeholder>Out of stock</Placeholder>
  return (
    <ButtonPrimary disabled={Boolean(!currentVariant)} onClick={handleClick}>
      add to cart
    </ButtonPrimary>
  )
}
