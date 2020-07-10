import * as React from 'react'
import { UseCheckoutValues } from 'use-shopify'
import { StorefrontApiProductVariant, MaybeAll } from '../../../types'
import { Button } from '../../../components/Button'
import { Placeholder } from '../../../components/Placeholder'
import { useMenu } from '../../../providers/MenuProvider'

const { useState } = React

interface Props extends Pick<UseCheckoutValues, 'addLineItem'> {
  currentVariant?: MaybeAll<
    Pick<StorefrontApiProductVariant, 'id' | 'availableForSale'>
  >
  quantity?: number
}

export const BuyButton = ({ currentVariant, addLineItem, quantity }: Props) => {
  const [loading, setLoading] = useState(false)
  const { openCart } = useMenu()
  if (!currentVariant) return null

  const handleClick = async () => {
    setLoading(true)
    if (!currentVariant.id) {
      throw new Error('The current variant was not provided with an id')
    }
    await addLineItem({ variantId: currentVariant.id, quantity: quantity || 1 })
    setLoading(false)
    openCart('Product added to cart')
  }
  return (
    <Button
      disabled={loading || Boolean(!currentVariant)}
      onClick={handleClick}
      fontWeight={4}
    >
      Add to cart
    </Button>
  )
}
