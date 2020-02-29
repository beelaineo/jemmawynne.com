import * as React from 'react'
import { NormalizeDiv } from '../styled'
import { ShopifyProduct, ShopifySourceProductVariant } from '../../../types'
import { Heading } from '../../../components/Text'
import { HtmlContent } from '../../../components/RichText'
import { formatMoney } from '../../../utils'

interface ProductDescriptionProps {
  product: ShopifyProduct
  currentVariant: ShopifySourceProductVariant
}

export const ProductDescription = ({
  product,
  currentVariant,
}: ProductDescriptionProps) => {
  return (
    <>
      <NormalizeDiv>
        <Heading level={2} weight={1}>
          {product.title}
        </Heading>
        {currentVariant.priceV2 ? (
          <Heading level={3} weight={4}>
            {formatMoney(currentVariant.priceV2)}
          </Heading>
        ) : null}
      </NormalizeDiv>
      <NormalizeDiv>
        <HtmlContent content={product?.sourceData?.descriptionHtml} />
      </NormalizeDiv>
    </>
  )
}
