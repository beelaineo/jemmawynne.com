import * as React from 'react'
import { useProductVariant, useCheckout } from 'use-shopify'
import { unwindEdges } from '@good-idea/unwind-edges'
import { Box } from '@xstyled/styled-components'
import { useRouter } from 'next/router'
import { Heading } from '../../components/Text'
import { ProductInfoBlock, ShopifyProduct } from '../../types'
import { Column } from '../../components/Layout'
import { Button } from '../../components/Button'
import {
  ProductVariantSelector,
  BuyButton,
  ProductImages,
  ProductDescription,
  ProductRelated,
} from './components'
import { useShopData } from '../../providers/ShopDataProvider'
import { useCounter, buildMailTo, getUrlParameter } from '../../utils'
import { Accordion } from '../../components/Accordion'
import {
  Wrapper,
  ProductDetails,
  ProductInfoWrapper,
  ProductImagesWrapper,
} from './styled'
import { HintModal } from './HintModal'

const { useState } = React

interface Props {
  product: ShopifyProduct
}

export const ProductDetail = ({ product }: Props) => {
  /* get additional info blocks from Sanity */
  const { asPath } = useRouter()
  const { getProductInfoBlocks } = useShopData()
  const { sourceData } = product
  const [hintModalOpen, setHintModalOpen] = useState(false)
  const openHintModal = () => setHintModalOpen(true)
  const closeHintModal = () => setHintModalOpen(false)
  if (!sourceData) return null
  const globalAccordions = getProductInfoBlocks(product)

  const extraAccordions = (product && product.infoBlocks) || []
  const accordions = [...extraAccordions, ...globalAccordions]

  /* hook to manage quantity input */
  const { count: quantity, increment, decrement } = useCounter(1, { min: 1 })
  /* get product variant utils */
  if (!product.sourceData) return null

  const initialVariantTitle = getUrlParameter('v', asPath)
  const initialVariant = initialVariantTitle.length
    ? unwindEdges(product?.sourceData?.variants)[0].find(
        (v) => v && v.title === initialVariantTitle,
      )?.id ?? undefined
    : undefined
  const {
    currentVariant,
    selectVariant,
  } = useProductVariant(product.sourceData, { initialVariant })

  /* get checkout utils */
  const { addLineItem } = useCheckout()

  if (!currentVariant) return null

  const inquireMailTo = buildMailTo({
    to: 'concierge@jemmawynne.com',
    subject: `Inquiry about ${product.title}`,
    body: `Hello,\n\nI have some questions about your ${product.title}.\n\nhttps://www.jemmawynne.com/products/${product.handle}`,
  })

  return (
    <Wrapper>
      <Column maxWidth="xWide">
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
              <Column maxWidth="small">
                <BuyButton
                  addLineItem={addLineItem}
                  currentVariant={currentVariant}
                  quantity={quantity}
                />
              </Column>
            </Box>
            <Box mt={5}>
              <Button level={3} onClick={openHintModal}>
                Drop a hint
              </Button>
              <Heading
                level={6}
                family="sans"
                textTransform="uppercase"
                color="body.5"
              >
                <a
                  href={inquireMailTo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inquire
                </a>
              </Heading>
            </Box>
            <Box mt={4} pt={2} borderTop="1px solid">
              <Column maxWidth="medium">
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
      <HintModal
        product={product}
        currentVariant={currentVariant}
        open={hintModalOpen}
        closeModal={closeHintModal}
      />
    </Wrapper>
  )
}
