import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { IoMdClose } from 'react-icons/io'
import { useCheckout } from 'use-shopify'
import { Button } from '../../components/Button'
import { Heading } from '../../components/Text'
import { CartBottom, CartInner } from '../../components/Cart'
import { CheckoutProduct } from './CheckoutProduct'
import { definitely, formatMoney } from '../../utils'
import {
  TitleWrapper,
  CloseButton,
  LineItemsWrapper,
  SubtotalWrapper,
  EmptyWrapper,
} from './styled'
import { useMenu } from '../../providers/MenuProvider'

/**
 * Main Checkout view
 */

export const Checkout = () => {
  /* State */
  const { checkout, loading } = useCheckout()
  const { closeCart } = useMenu()

  const lineItems =
    checkout && checkout?.lineItems?.edges && checkout.lineItems.edges.length
      ? unwindEdges(checkout?.lineItems)[0]
      : []

  return (
    <>
      <CloseButton onClick={closeCart}>
        <IoMdClose />
      </CloseButton>
      <TitleWrapper />
      <CartInner>
        {lineItems.length === 0 ? (
          <EmptyWrapper>
            <Heading level={2} weight={2} mb={3}>
              Your cart is empty
            </Heading>
            <Button mt={4} level={1} onClick={closeCart}>
              Continue Shopping
            </Button>
          </EmptyWrapper>
        ) : (
          <>
            <Heading weight={2} level={2} mb={3}>
              Your Cart
            </Heading>
            <LineItemsWrapper>
              {definitely(lineItems).map((lineItem) => (
                <CheckoutProduct
                  key={lineItem.id || 'some-key'}
                  lineItem={lineItem}
                />
              ))}
            </LineItemsWrapper>
            {checkout && checkout?.paymentDueV2 ? (
              <>
                <SubtotalWrapper>
                  <Heading family="sans" level={6} weight={3}>
                    Subtotal
                  </Heading>
                  <Heading
                    family="serif"
                    level={4}
                    fontStyle="italic"
                    weight={2}
                  >
                    {formatMoney(checkout.paymentDueV2)}
                  </Heading>
                </SubtotalWrapper>

                <Heading my={0} level={6} textAlign="left">
                  Shipping and discount codes are added at checkout.
                </Heading>
              </>
            ) : null}
          </>
        )}
      </CartInner>
      {checkout &&
      checkout.paymentDueV2 &&
      checkout.webUrl &&
      lineItems.length ? (
        <CartBottom>
          <Button
            fontWeight={4}
            as="a"
            href={checkout.webUrl}
            disabled={loading}
          >
            Checkout
          </Button>
        </CartBottom>
      ) : null}
    </>
  )
}
