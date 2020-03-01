import * as React from 'react'
import { UseCheckoutValues } from 'use-shopify'
import { StorefrontApiProductVariant } from '../../../types'
import { Button } from '../../../components/Button'
import { Placeholder } from '../../../components/Placeholder'

const { useState } = React

interface Props extends Pick<UseCheckoutValues, 'addLineItem'> {
  currentVariant?: StorefrontApiProductVariant
  quantity?: number
}

export const BuyButton = ({ currentVariant, addLineItem, quantity }: Props) => {
  const [loading, setLoading] = useState(false)
  if (!currentVariant) return null

  const handleClick = async () => {
    setLoading(true)
    await addLineItem({ variantId: currentVariant.id, quantity: quantity || 1 })
    setLoading(false)
  }
  if (!currentVariant.availableForSale) {
    return <Placeholder>Out of stock</Placeholder>
  }
  return (
    <Button
      disabled={loading || Boolean(!currentVariant)}
      onClick={handleClick}
    >
      add to cart
    </Button>
  )
}
