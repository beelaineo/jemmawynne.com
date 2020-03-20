import * as React from 'react'
import { useProductVariant, useCheckout } from 'use-shopify'
import { Box } from '@xstyled/styled-components'
import { ProductInfoBlock, ShopifyProduct } from '../../types'
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
      <Column center width="xWide">
        <ProductDetails>
          <ProductImagesWrapper>
            <ProductImages currentVariant={currentVariant} product={product} />
          </ProductImagesWrapper>
          <ProductInfoWrapper>
            <ProductDescription
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
            <Box mt={5}>
              <Column width="xSmall">
                <BuyButton
                  addLineItem={addLineItem}
                  currentVariant={currentVariant}
                  quantity={quantity}
                />
              </Column>
            </Box>
            <Box mt={5}>
              <Column width="medium">
                {accordions
                  ? accordions
                      .reduce<ProductInfoBlock[]>(
                        (acc, current) =>
                          current !== null ? [...acc, current] : acc,
                        [],
                      )
                      .map((accordion) =>
                        accordion && accordion._key ? (
                          <Accordion
                            key={accordion._key}
                            accordion={accordion}
                          />
                        ) : null,
                      )
                  : null}
              </Column>
            </Box>
          </ProductInfoWrapper>
        </ProductDetails>
      </Column>
      <ProductRelated product={product} />
    </Wrapper>
  )
}
