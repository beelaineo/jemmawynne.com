import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery } from 'urql'
import { PRODUCT_QUERY, ProductQueryResult } from './query'
import {
  Product,
  ProductInfoBlock,
  ShopifyProduct,
} from '../../types/generated'
import { useProductVariant, useCheckout } from 'use-shopify'
import { NotFound } from '../NotFound'
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
import { getInfoBlocksByType, getInfoBlocksByTag } from './utils'

interface Props {
  product: Product
  saneProduct?: ShopifyProduct
}

const ProductDetailMain = ({ product, saneProduct }: Props) => {
  /* get additional info blocks from Sanity */
  const { productInfoBlocks } = useShopData()
  const globalAccordions = productInfoBlocks
    ? [
        ...getInfoBlocksByType(product.productType, productInfoBlocks),
        ...getInfoBlocksByTag(product.tags, productInfoBlocks),
      ]
    : []

  const extraAccordions = (saneProduct && saneProduct.infoBlocks) || []
  const accordions = [...extraAccordions, ...globalAccordions]

  /* hook to manage quantity input */
  const {
    count: quantity,
    increment,
    decrement,
    setCount: setQuantity,
  } = useCounter(1, { min: 1 })
  /* get product variant utils */
  const { currentVariant, selectVariant } = useProductVariant(product)

  /* get checkout utils */
  const { addLineItem } = useCheckout()

  return (
    <Wrapper>
      <Column>
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
              setQuantity={setQuantity}
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
      <ProductRelated product={product} saneProduct={saneProduct} />
    </Wrapper>
  )
}

/**
 * View Wrapper
 */

interface MatchParams {
  handle: string
}

export const ProductDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  /* fetch the product data */
  const { handle } = match.params
  const variables = { handle }
  const [response] = useQuery<ProductQueryResult>({
    query: PRODUCT_QUERY,
    variables,
  })
  const product =
    (response && response.data && response.data.productByHandle) || undefined
  const saneProduct =
    (response && response.data && response.data.allShopifyProducts[0]) ||
    undefined
  if (response.fetching) return <p>Loading..</p>
  if (!product) return <NotFound />
  return <ProductDetailMain product={product} saneProduct={saneProduct} />
}
