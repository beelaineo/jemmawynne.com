import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { IoMdClose } from 'react-icons/io'
import { useCheckout } from 'use-shopify'
import { Button } from '../../components/Button'
import { Heading } from '../../components/Text'
import { CartBottom, CartInner } from '../../components/Cart'
import { CheckoutProduct } from './CheckoutProduct'
import { StorefrontApiCheckoutLineItem } from '../../types'
import { definitely, formatMoney } from '../../utils'
import { TitleWrapper, CloseButton, CartMessage } from './styled'
import { useMenu } from '../../providers/MenuProvider'

/**
 * Main Checkout view
 */

export const Checkout = () => {
  /* State */
  const { checkout, loading } = useCheckout()
  const { closeCart, cartMessage } = useMenu()

  const lineItems =
    checkout && checkout?.lineItems?.edges && checkout.lineItems.edges.length
      ? //
        // @ts-ignore
        unwindEdges<StorefrontApiCheckoutLineItem>(checkout.lineItems)[0]
      : []

  return (
    <>
      <CloseButton onClick={closeCart}>
        <IoMdClose />
      </CloseButton>
      <TitleWrapper>
        <Heading level={2} textAlign="center" my={0}>
          Your Cart
        </Heading>
      </TitleWrapper>
      <CartInner>
        {cartMessage ? (
          <CartMessage>
            <span>
              <Heading level={5}>{cartMessage}</Heading>
            </span>
            <Button level={3} onClick={closeCart}>
              Continue Shopping
            </Button>
          </CartMessage>
        ) : null}
        {lineItems.length ? (
          definitely(lineItems).map((lineItem) => (
            <CheckoutProduct
              // @ts-ignore
              key={lineItem.id || 'some-key'}
              // @ts-ignore
              lineItem={lineItem}
            />
          ))
        ) : (
          <Heading textAlign="center" color="body.5" level={3}>
            Your cart is empty
          </Heading>
        )}
      </CartInner>

      {checkout &&
      checkout.paymentDueV2 &&
      checkout.webUrl &&
      lineItems.length ? (
        <CartBottom>
          <Heading family="serif" textAlign="center" level={5} weight={2}>
            {/* 
            // @ts-ignore */}
            Subtotal: {formatMoney(checkout.paymentDueV2)}
          </Heading>
          <Button as="a" href={checkout.webUrl} disabled={loading}>
            Checkout
          </Button>

          <Heading my={3} level={5} textAlign="center">
            Shipping and discount codes are added at checkout.
          </Heading>
        </CartBottom>
      ) : null}
    </>
  )
}
