import * as React from 'react'
import { ProductInfoBlock, ShopifyProduct } from '../../types'
import { useProductVariant, useCheckout } from 'use-shopify'
import { Column } from '../../components/Layout'
import {
  ProductVariantSelector,
  BuyButton,
  ProductImages,
  ProductDescription,
  ProductRelated,
} from './components'
import { useShopData } from '../../providers/ShopDataProvider'
import { useCounter } from '../../utils/hooks'
import {
  Wrapper,
  ProductDetails,
  ProductInfoWrapper,
  ProductImagesWrapper,
  NormalizeDiv,
} from './styled'
import { Accordion } from '../../components/Accordion'

interface Props {
  product: ShopifyProduct
}

export const ProductDetail = ({ product }: Props) => {
  /* get additional info blocks from Sanity */
  const { getProductInfoBlocks } = useShopData()
  const { sourceData } = product
  if (!sourceData) return null
  const globalAccordions = getProductInfoBlocks(product)

  const extraAccordions = (product && product.infoBlocks) || []
  const accordions = [...extraAccordions, ...globalAccordions]

  /* hook to manage quantity input */
  const { count: quantity, increment, decrement } = useCounter(1, { min: 1 })
  /* get product variant utils */
  const { currentVariant, selectVariant } = useProductVariant(
    // @ts-ignore
    product.sourceData,
  )

  /* get checkout utils */
  const { addLineItem } = useCheckout()

  if (!currentVariant) return null

  return (
    <Wrapper>
      <Column>
        <ProductDetails>
          <ProductImagesWrapper>
            {/*
          //  @ts-ignore */}
            <ProductImages currentVariant={currentVariant} product={product} />
          </ProductImagesWrapper>
          <ProductInfoWrapper>
            <ProductDescription
              // @ts-ignore
              currentVariant={currentVariant}
              product={product}
            />
            <ProductVariantSelector
              quantity={quantity}
              increment={increment}
              decrement={decrement}
              product={product}
              currentVariant={currentVariant}
              selectVariant={selectVariant}
            />
            <NormalizeDiv>
              <BuyButton
                addLineItem={addLineItem}
                // @ts-ignore
                currentVariant={currentVariant}
                quantity={quantity}
              />
              {accordions
                ? accordions
                    .reduce<ProductInfoBlock[]>(
                      (acc, current) =>
                        current !== null ? [...acc, current] : acc,
                      [],
                    )
                    .map(({ _key, title, bodyRaw }) => (
                      // @ts-ignore
                      <Accordion key={_key} label={title} content={bodyRaw} />
                    ))
                : null}
            </NormalizeDiv>
          </ProductInfoWrapper>
        </ProductDetails>
      </Column>
      <ProductRelated product={product} />
    </Wrapper>
  )
}
