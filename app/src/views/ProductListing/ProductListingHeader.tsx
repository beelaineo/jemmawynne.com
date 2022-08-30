import * as React from 'react'
import { ShopifyCollection } from '../../types'
import { Span, Heading } from '../../components/Text'
import { HeaderWrapper } from './styled'
import { HeroBlock } from '../../components/ContentBlock'
import { isValidHero } from '../../utils'
import { x } from '@xstyled/styled-components'

interface ProductListingHeaderProps {
  collection: ShopifyCollection
  menuDisabled?: boolean | null
}

export const ProductListingHeader = ({
  collection,
  menuDisabled,
}: ProductListingHeaderProps) => {
  if (!collection.sourceData) return null
  const { image, title, description } = collection.sourceData
  const { hero } = collection
  const textAlign = menuDisabled
    ? 'center'
    : image && description
    ? 'left'
    : 'left'
  return (
    <>
      {isValidHero(hero) ? <HeroBlock hero={hero} landscape /> : null}
      <HeaderWrapper textAlign={textAlign}>
        <Heading level={1} weight={2}>
          Shop: <x.span fontStyle="italic">{title}</x.span>
        </Heading>
      </HeaderWrapper>
    </>
  )
}
