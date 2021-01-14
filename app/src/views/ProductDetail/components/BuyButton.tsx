import * as React from 'react'
import { UseCheckoutValues } from 'use-shopify'
import {
  ShopifyProduct,
  StorefrontApiProductVariant,
  MaybeAll,
} from '../../../types'
import { Button } from '../../../components/Button'
import { Heading } from '../../../components/Text'
import { useMenu } from '../../../providers/MenuProvider'
import { productIsInquiryOnly, buildMailTo } from '../../../utils'

const { useState } = React

interface Props extends Pick<UseCheckoutValues, 'addLineItem'> {
  product: ShopifyProduct
  currentVariant?: MaybeAll<
    Pick<
      StorefrontApiProductVariant,
      'id' | 'availableForSale' | 'currentlyNotInStock'
    >
  >
  quantity?: number
}

export const BuyButton = ({
  product,
  currentVariant,
  addLineItem,
  quantity,
}: Props) => {
  const [loading, setLoading] = useState(false)
  const { openCart } = useMenu()
  const inquiryOnly = productIsInquiryOnly(product)
  const soldOut =
    inquiryOnly !== true && currentVariant?.availableForSale === false
  const madeToOrder =
    product?.sourceData?.tags?.includes('made to order') ||
    currentVariant?.currentlyNotInStock === true
  if (!currentVariant) return null

  const inquireMailTo = buildMailTo({
    to: 'concierge@jemmawynne.com',
    subject: `Inquiry about ${product.title}`,
    body: `Hello,\n\nI am interested in ${product.title}.\n\nhttps://www.jemmawynne.com/products/${product.handle}`,
  })

  const handleClick = async () => {
    if (inquiryOnly) {
      window.open(inquireMailTo, '_blank')
      return
    }
    setLoading(true)
    if (!currentVariant.id) {
      throw new Error('The current variant was not provided with an id')
    }
    await addLineItem({ variantId: currentVariant.id, quantity: quantity || 1 })
    setLoading(false)
    openCart('Product added to cart')
  }

  const buttonLabel = inquiryOnly
    ? 'Inquire'
    : soldOut
    ? 'Sold out'
    : 'Add to cart'
  return (
    <>
      <Button
        disabled={loading || Boolean(!currentVariant) || soldOut}
        onClick={handleClick}
        fontWeight={4}
      >
        {buttonLabel}
      </Button>
      {madeToOrder ? (
        <Heading level={5} color="body.7">
          Made to Order. All of our jewelry is handmade in NYC. Please allow
          approximately 6 weeks.
        </Heading>
      ) : null}
    </>
  )
}
