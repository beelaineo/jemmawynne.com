import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useCheckout } from 'use-shopify'
import { NormalizeDiv, Button } from '../ProductDetail/styled'
import { FlexContainer, FlexHalf } from '../../components/Layout/Flex'
import { Loading } from '../Navigation/styled'
import { Heading } from '../../components/Text'
import { CartBottom, CartInner } from '../../components/Cart'
import { CheckoutProduct } from './CheckoutProduct'

/**
 * Main Checkout view
 */

export const Checkout = () => {
  /* State */
  const { checkout, loading } = useCheckout()

  if (!checkout || checkout.lineItems.edges.length < 1) {
    return <NormalizeDiv>Your cart is empty</NormalizeDiv>
  }

  const [lineItems] = unwindEdges(checkout.lineItems)

  return (
    <NormalizeDiv>
      <Heading level={3} color="grays.0" textAlign="center">
        Your cart
      </Heading>
      <CartInner>
        {lineItems.map((lineItem) => (
          // @ts-ignore
          <CheckoutProduct key={lineItem.id} lineItem={lineItem} />
        ))}
      </CartInner>

      <CartBottom>
        <Loading isLoading={loading}>
          <FlexContainer width="100%">
            <FlexHalf>
              <Heading
                level={5}
                textTransform="uppercase"
                weight={2}
                color="grays.3"
              >
                Subtotal:
              </Heading>
            </FlexHalf>
            <FlexHalf>
              <Heading
                level={5}
                textAlign="right"
                textTransform="uppercase"
                weight={2}
                color="grays.0"
              >
                ${checkout.paymentDueV2.amount}
              </Heading>
            </FlexHalf>
          </FlexContainer>
        </Loading>
        <NormalizeDiv>
          <Button
            as="a"
            href={checkout.webUrl}
            color="grays.9"
            isDisabled={loading}
          >
            Checkout
          </Button>

          <Heading level={6} textAlign="center">
            Shipping and discount codes are added at checkout.
          </Heading>
        </NormalizeDiv>
      </CartBottom>
    </NormalizeDiv>
  )
}
