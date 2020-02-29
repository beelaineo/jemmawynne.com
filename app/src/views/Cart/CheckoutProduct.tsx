import * as React from 'react'
import { useCheckout } from 'use-shopify'
import { StorefrontApiCheckoutLineItem } from '../../types'
import { formatMoney, getVariantImage } from '../../utils'
import { FlexContainer, FlexThree, FlexSix } from '../../components/Layout/Flex'
import { QuantitySelectorCart } from '../ProductDetail/styled'
import { QuantityInput } from '../../components/QuantityInput'
import { Heading } from '../../components/Text'
import { IoMdClose } from 'react-icons/io'
import { RemoveCart } from './styled'

const { useState } = React

interface CheckoutProductProps {
  lineItem: StorefrontApiCheckoutLineItem
}

export const CheckoutProduct = ({ lineItem }: CheckoutProductProps) => {
  const { updateLineItem } = useCheckout()
  const { title, variant, quantity } = lineItem
  if (!variant) return

  const image = getVariantImage(variant)

  const [hovered, setHover] = useState('invisible')

  const setQuantity = (newQuantity: number) =>
    updateLineItem({ id: lineItem.id, quantity: newQuantity })

  /* Handlers */
  const updateHover = () => {
    setHover('visible')
  }
  const removeHover = () => {
    setHover('invisible')
  }

  return (
    <FlexContainer
      key={variant.id}
      margin="small"
      onMouseOver={updateHover}
      onMouseOut={removeHover}
    >
      <FlexThree>{image ? <img src={image} /> : null}</FlexThree>
      <FlexSix>
        <Heading level={5} weight={2} color="grays.0">
          {title}
        </Heading>
        <Heading level={5} weight={2} color="grays.1">
          {variant.title}
        </Heading>
        <div>
          <FlexSix>
            <Heading level={5} weight={5} color="grays.0">
              {formatMoney(variant.priceV2)}
            </Heading>
          </FlexSix>
          <FlexSix>
            <QuantitySelectorCart className={hovered} width="40px">
              Quantity: {'     '}
              <button type="button" onClick={() => setQuantity(quantity - 1)}>
                <span>&#8722;</span>
              </button>
              <QuantityInput quantity={quantity} setQuantity={setQuantity} />
              <button type="button" onClick={() => setQuantity(quantity + 1)}>
                <span>&#43;</span>
              </button>
            </QuantitySelectorCart>
          </FlexSix>
        </div>
      </FlexSix>
      <RemoveCart onClick={() => setQuantity(0)}>
        <IoMdClose className={hovered} />
      </RemoveCart>
    </FlexContainer>
  )
}
