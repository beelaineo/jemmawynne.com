import * as React from 'react'
import styled from '@xstyled/styled-components'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useCheckout } from 'use-shopify'
import { NormalizeDiv } from '../ProductDetail/styled'
import { Button } from '../../components/Button'
import { FlexContainer, FlexHalf } from '../../components/Layout/Flex'
import { Heading } from '../../components/Text'
import { CartBottom, CartInner } from '../../components/Cart'
import { CheckoutProduct } from './CheckoutProduct'
import { StorefrontApiCheckoutLineItem } from '../../types'
import { formatMoney } from '../../utils/currency'

/**
 * Main Checkout view
 */

const TitleWrapper = styled.div`
  border-bottom: 1px solid currentColor;
  padding: 3 2;
  background-color: body.2;
`

export const Checkout = () => {
  /* State */
  const { checkout, loading } = useCheckout()

  if (!checkout || checkout.lineItems.edges.length < 1) {
    return <NormalizeDiv>Your cart is empty</NormalizeDiv>
  }

  const [lineItems] = unwindEdges<StorefrontApiCheckoutLineItem>(
    checkout.lineItems,
  )

  return (
    <>
      <TitleWrapper>
        <Heading level={2} textAlign="center" my={0}>
          Your cart
        </Heading>
      </TitleWrapper>
      <CartInner>
        {lineItems.map((lineItem) => (
          <CheckoutProduct key={lineItem.id} lineItem={lineItem} />
        ))}
      </CartInner>

      <CartBottom>
        <Heading family="sans" textAlign="center" level={5} weight={2}>
          Subtotal: {formatMoney(checkout.paymentDueV2)}
        </Heading>
        <Button as="a" href={checkout.webUrl} disabled={loading}>
          Checkout
        </Button>

        <Heading my={3} level={5} textAlign="center">
          Shipping and discount codes are added at checkout.
        </Heading>
      </CartBottom>
    </>
  )
}
