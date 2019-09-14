import * as React from 'react'
import { NormalizeDiv } from '../styled'
import { Product, ProductVariant } from '../../../types/generated'
import { Header2, Header4 } from '../../../components/Text'
import { Accordion } from '../../../components/Accordion'
import { HtmlContent } from '../../../components/RichText'
import { formatMoney } from '../../../utils'
const { useState } = React

interface ProductDescriptionProps {
  product: Product
  currentVariant: ProductVariant
}

export const ProductDescription = ({
  product,
  currentVariant,
}: ProductDescriptionProps) => {
  return (
    <>
      <NormalizeDiv>
        <Header2 weight="xlight" color="grays.0">
          {product.title}
        </Header2>
        <Header4 weight="strong" color="grays.0">
          {formatMoney(currentVariant.priceV2)}
        </Header4>
      </NormalizeDiv>
      <NormalizeDiv>
        <HtmlContent content={product.descriptionHtml} />
      </NormalizeDiv>
    </>
  )
}
