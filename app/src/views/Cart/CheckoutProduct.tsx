import * as React from 'react'
import { useCheckout } from 'use-shopify'
import { CheckoutLineItem } from '../../types'
import { formatMoney, getVariantImage } from '../../utils'
import { FlexContainer, FlexThree, FlexSix } from '../../components/Layout/Flex'
import { QuantitySelectorCart } from '../ProductDetail/styled'
import { QuantityInput } from 'Components/QuantityInput'
import { Header5 } from 'Components/Text'
import { IoMdClose } from 'react-icons/io'
import { RemoveCart } from './styled'

const { useState } = React

interface CheckoutProductProps {
  lineItem: CheckoutLineItem
}

export const CheckoutProduct = ({ lineItem }: CheckoutProductProps) => {
  const { updateLineItem } = useCheckout()
  const { title, variant, quantity } = lineItem

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

  console.log(variant)

  return (
    <FlexContainer
      key={variant.id}
      margin="small"
      onMouseOver={updateHover}
      onMouseOut={removeHover}
    >
      <FlexThree>{image ? <img src={image.originalSrc} /> : null}</FlexThree>
      <FlexSix marginVertical="0">
        <Header5 weight="light" color="grays.0">
          {title}
        </Header5>
        <Header5 weight="light" color="grays.1">
          {variant.title}
        </Header5>
        <div>
          <FlexSix margin="small">
            <Header5 weight="strong" color="grays.0">
              {formatMoney(variant.priceV2)}
            </Header5>
          </FlexSix>
          <FlexSix margin="small">
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
