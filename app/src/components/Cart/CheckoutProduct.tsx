import * as React from 'react'
import { Box } from '@xstyled/styled-components'
import { useCheckout, CheckoutLineItem } from 'use-shopify'
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

const { useState } = React

interface CheckoutProductProps {
  lineItem: StorefrontApiCheckoutLineItem | CheckoutLineItem
}

export const CheckoutProduct = ({ lineItem }: CheckoutProductProps) => {
  const [updating, setUpdating] = useState(false)
  const { updateLineItem } = useCheckout()
  const { title, variant, quantity } = lineItem
  if (!variant) return null
  const { image } = variant

  const setQuantity = (newQuantity: number) => async () => {
    setUpdating(true)
    await updateLineItem({ id: lineItem.id, quantity: newQuantity })
    setUpdating(false)
  }

  return (
    <Wrapper updating={updating}>
      {image ? <Image image={image} /> : <div />}
      <div>
        <Heading level={3} fontSize="18px" weight={2}>
          {title}
        </Heading>
        <Box my={3}>
          {definitely(variant.selectedOptions).map((option) =>
            option.value !== 'Default Title' ? (
              <Heading
                key={option.name}
                level={7}
                color="body.5"
                family="sans"
                weight={3}
              >
                {option.name}:{' '}
                <Box as="span" color="body.7">
                  {option.value}
                </Box>
              </Heading>
            ) : null,
          )}
        </Box>
        <Heading level={5} weight={5} fontStyle="italic">
          {formatMoney(variant.priceV2)}
        </Heading>
        <QuantitySelectorCart>
          <Heading family="sans" level={6} color="body.7" weight={3}>
            <QuantityButton type="button" onClick={setQuantity(quantity - 1)}>
              &#8722;
            </QuantityButton>
            {quantity}
            <QuantityButton type="button" onClick={setQuantity(quantity + 1)}>
              &#43;
            </QuantityButton>
          </Heading>
          <RemoveButtonWrapper>
            <Button level={4} my={0} fontWeight={3} onClick={setQuantity(0)}>
              Remove
            </Button>
          </RemoveButtonWrapper>
        </QuantitySelectorCart>
      </div>
    </Wrapper>
  )
}
