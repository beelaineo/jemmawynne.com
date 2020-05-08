import * as React from 'react'
import { useCheckout } from 'use-shopify'
import { StorefrontApiCheckoutLineItem } from '../../types'
import { formatMoney } from '../../utils'
import { QuantitySelectorCart } from '../ProductDetail/styled'
import { Image } from '../../components/Image'
import { Heading } from '../../components/Text'
import { Wrapper } from './styled'

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
          <Heading key={option.name} level={4} color="body.7" weight={2}>
            {option.name}: {option.value}
          </Heading>
        ))}
        <Heading level={5} weight={5}>
          {formatMoney(variant.priceV2)}
        </Heading>
        <QuantitySelectorCart>
          <Heading family="serif" level={5} color="body.7" weight={2}>
            <button type="button" onClick={() => setQuantity(quantity - 1)}>
              &#8722;
            </button>
            {quantity}
            <button type="button" onClick={() => setQuantity(quantity + 1)}>
              &#43;
            </button>
          </Heading>
        </QuantitySelectorCart>
      </div>
    </Wrapper>
  )
}
