import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useCheckout } from 'use-shopify'
import {
  NormalizeDiv,
  Button,
  QuantitySelectorCart,
} from '../ProductDetail/styled'
import { QuantityInput } from 'Components/QuantityInput'
import {
  FlexContainer,
  FlexHalf,
  FlexThree,
  FlexSix,
} from '../../components/Layout/Flex'
import { Loading } from '../Navigation/styled'
import { Header6, Header5, Header3 } from 'Components/Text'
import { CartBottom, CartInner } from 'Components/Cart'
import { increment } from '../../../../migrate/src/put/limit'
import { CheckoutProduct } from './CheckoutProduct'

const { useState } = React

/**
 * Main Checkout view
 */

export const Checkout = () => {
  /* State */
  const { checkout, loading } = useCheckout()

  if (!checkout || checkout.lineItems.edges.length < 1) {
    return <NormalizeDiv top="0">Your cart is empty</NormalizeDiv>
  }

  const [lineItems] = unwindEdges(checkout.lineItems)

  return (
    <NormalizeDiv top="0">
      <Header3 color="grays.0" align="center">
        Your cart
      </Header3>
      <CartInner>
        {lineItems.map((lineItem) => (
          <CheckoutProduct key={lineItem.id} lineItem={lineItem} />
        ))}
      </CartInner>

      <CartBottom>
        <Loading isLoading={loading}>
          <FlexContainer width="100%">
            <FlexHalf>
              <Header5 transform="uppercase" weight="light" color="grays.3">
                Subtotal:
              </Header5>
            </FlexHalf>
            <FlexHalf>
              <Header5
                align="right"
                transform="uppercase"
                weight="light"
                color="grays.0"
              >
                ${checkout.paymentDueV2.amount}
              </Header5>
            </FlexHalf>
          </FlexContainer>
        </Loading>
        <NormalizeDiv align="center">
          <Button
            as="a"
            href={checkout.webUrl}
            background="grays.0"
            color="grays.9"
            weight="semi"
            width="100%"
            disabled={loading}
          >
            Checkout
          </Button>

          <Header6 align="center">
            Shipping and discount codes are added at checkout.
          </Header6>
        </NormalizeDiv>
      </CartBottom>
    </NormalizeDiv>
  )
}
