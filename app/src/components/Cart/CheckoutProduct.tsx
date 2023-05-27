import * as React from 'react'
import { x } from '@xstyled/styled-components'
import { CheckoutLineItem as CheckoutLineItemType } from '../../providers/ShopifyProvider/types'
import { useShopify, useAnalytics } from '../../providers'
import { StorefrontApiCheckoutLineItem } from '../../types'
import { formatMoney } from '../../utils'
import { Image } from '../../components/Image'
import { Heading } from '../../components/Text'
import {
  QuantitySelectorCart,
  QuantityButton,
  RemoveButtonWrapper,
  Wrapper,
} from './styled'
import { definitely } from '../../utils'
import { Button } from '../../components/Button'

const { useState, useEffect } = React

interface CheckoutProductProps {
  lineItem: StorefrontApiCheckoutLineItem | CheckoutLineItemType
}

export const CheckoutProduct = ({ lineItem }: CheckoutProductProps) => {
  const { sendRemoveFromCart } = useAnalytics()
  const [updating, setUpdating] = useState(false)
  const { updateLineItem } = useShopify()
  const { title, variant, quantity } = lineItem
  if (!variant) return null
  const { image } = variant

  const setQuantity = (newQuantity: number) => async () => {
    setUpdating(true)
    await updateLineItem({ id: lineItem.id, quantity: newQuantity })
    if (newQuantity === 0) {
      // @ts-ignore
      sendRemoveFromCart({ product: lineItem, variant, quantity: 0 })
    }
    setUpdating(false)
  }

  return (
    <Wrapper updating={updating}>
      {image ? <Image image={image} /> : <div />}
      <div>
        <Heading level={3} my={0} fontSize="18px" weight={2}>
          {title}
        </Heading>
        <x.div my={3}>
          {definitely(variant.selectedOptions).map((option) =>
            option.value !== 'Default Title' ? (
              <Heading
                key={option.name}
                level={7}
                // @ts-ignore
                color="body.5"
                family="sans"
                weight={3}
              >
                {option.name}:{' '}
                <x.span
                  // @ts-ignore
                  color="body.7"
                >
                  {option.value}
                </x.span>
              </Heading>
            ) : null,
          )}
        </x.div>
        <Heading level={5} weight={2} fontStyle="italic">
          {formatMoney(variant.priceV2)}
        </Heading>
        <QuantitySelectorCart>
          <Heading
            family="sans"
            level={6}
            // @ts-ignore
            color="body.7"
            weight={3}
          >
            <QuantityButton type="button" onClick={setQuantity(quantity - 1)}>
              &#8722;
            </QuantityButton>
            {quantity}
            <QuantityButton type="button" onClick={setQuantity(quantity + 1)}>
              &#43;
            </QuantityButton>
          </Heading>
          <RemoveButtonWrapper>
            <Button
              fontSize="9px"
              level={4}
              my={0}
              fontWeight={4}
              onClick={setQuantity(0)}
            >
              Remove
            </Button>
          </RemoveButtonWrapper>
        </QuantitySelectorCart>
      </div>
    </Wrapper>
  )
}
