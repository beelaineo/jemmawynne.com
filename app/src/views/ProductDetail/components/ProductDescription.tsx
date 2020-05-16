import * as React from 'react'
import { Box } from '@xstyled/styled-components'
import { ShopifyProduct, ShopifySourceProductVariant } from '../../../types'
import { Heading } from '../../../components/Text'
import { HtmlContent } from '../../../components/RichText'
import { formatMoney } from '../../../utils'
import { DescriptionWrapper } from '../styled'

interface ProductDescriptionProps {
  product: ShopifyProduct
  currentVariant: ShopifySourceProductVariant
}

export const ProductDescription = ({
  product,
  currentVariant,
}: ProductDescriptionProps) => {
  return (
    <DescriptionWrapper>
      <Heading level={1} mb={1} weight={1}>
        {product.title}
      </Heading>
      {currentVariant.priceV2 ? (
        <Heading level={1} weight={1} fontStyle="italic" color="body.5">
          {formatMoney(currentVariant.priceV2)}
        </Heading>
      ) : null}

      <Box my={6}>
        <HtmlContent html={product?.sourceData?.descriptionHtml} />
      </Box>
    </DescriptionWrapper>
  )
}
