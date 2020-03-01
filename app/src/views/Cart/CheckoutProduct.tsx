import * as React from 'react'
import { useCheckout } from 'use-shopify'
import { StorefrontApiCheckoutLineItem } from '../../types'

import { formatMoney, getVariantImage } from '../../utils'
import { FlexContainer, FlexThree, FlexSix } from '../../components/Layout/Flex'
import { QuantitySelectorCart } from '../ProductDetail/styled'
import { QuantityInput } from '../../components/QuantityInput'
import { Image } from '../../components/Image'
import { Heading } from '../../components/Text'
import { IoMdClose } from 'react-icons/io'
import { Wrapper, RemoveCart } from './styled'

const { useState } = React

interface CheckoutProductProps {
  lineItem: StorefrontApiCheckoutLineItem
}

export const CheckoutProduct = ({ lineItem }: CheckoutProductProps) => {
  const { updateLineItem } = useCheckout()
  const { title, variant, quantity } = lineItem
  if (!variant) return null
  const { image } = variant

  const setQuantity = (newQuantity: number) =>
    updateLineItem({ id: lineItem.id, quantity: newQuantity })

  return (
    <Wrapper>
      <div>{image ? <Image image={image} /> : null}</div>
      <div>
        <Heading level={4} weight={2}>
          {title}
        </Heading>
        {variant.selectedOptions.map((option) => (
          <Heading level={4} color="body.7" weight={2}>
            {option.name}: {option.value}
          </Heading>
        ))}
        <Heading level={5} weight={5}>
          {formatMoney(variant.priceV2)}
        </Heading>
        <QuantitySelectorCart>
          <Heading family="serif" level={5} color="body.7" weight={2}>
            Quantity: {'     '}
            <button type="button" onClick={() => setQuantity(quantity - 1)}>
              &#8722;
            </button>
            {quantity}
            <button type="button" onClick={() => setQuantity(quantity + 1)}>
              &#43;
            </button>
          </Heading>
        </QuantitySelectorCart>

        <RemoveCart onClick={() => setQuantity(0)}>
          <Heading level={5} color="body.6">
            Remove from cart
          </Heading>
        </RemoveCart>
      </div>
    </Wrapper>
  )
}
