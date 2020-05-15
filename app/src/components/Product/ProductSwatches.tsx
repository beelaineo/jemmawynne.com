import * as React from 'react'
import { useShopData } from '../../providers/ShopDataProvider'
import { Image } from '../../components/Image'
import { Heading } from '../../components/Text'
import { ShopifyProduct } from '../../types'
import { definitely } from '../../utils'
import {
  SwatchesWrapper,
  SwatchLabel,
  SwatchImageWrapper,
  SwatchWrapper,
} from './styled'

interface ProductSwatchesProps {
  product: ShopifyProduct
}

export const ProductSwatches = ({ product }: ProductSwatchesProps) => {
  const { getProductSwatchOptions } = useShopData()
  const swatchOptions = getProductSwatchOptions(product)
  if (!swatchOptions.length) return null
  const option = swatchOptions[0]
  if (!option) return null

  return (
    <SwatchesWrapper>
      {definitely(option.values).map((value) => (
        <SwatchWrapper key={value.label}>
          <SwatchImageWrapper>
            <Image image={value.image} ratio={1} sizes="20px" />
          </SwatchImageWrapper>
          <SwatchLabel>
            <Heading level={5} weight={2}>
              {value.label}
            </Heading>
          </SwatchLabel>
        </SwatchWrapper>
      ))}
    </SwatchesWrapper>
  )
}
