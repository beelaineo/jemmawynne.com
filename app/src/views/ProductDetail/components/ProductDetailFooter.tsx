import * as React from 'react'
import { NormalizeDiv } from '../styled'
import { Product } from '../../../types/generated'
import { P } from 'Components/Text'
import { Accordion } from '../../../Components/Accordion'
const { useState } = React

interface ProductDetailFooterProps {
  product: Product
}

export const ProductDetailFooter = ({ product }: ProductDetailFooterProps) => {
  return (
    <NormalizeDiv>
      <P>{product.description}</P>
    </NormalizeDiv>
  )
}
