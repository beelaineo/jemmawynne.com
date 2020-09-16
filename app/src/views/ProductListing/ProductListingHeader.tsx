import * as React from 'react'
import { ShopifyCollection } from '../../types'
import { Span, Heading } from '../../components/Text'
import { HeaderWrapper } from './styled'
import { HeroBlock } from '../../components/ContentBlock'
import { isValidHero } from '../../utils'

interface ProductListingHeaderProps {
  collection: ShopifyCollection
  menuDisabled?: boolean | null
}

export const ProductListingHeader = ({
  collection,
  menuDisabled,
}: ProductListingHeaderProps) => {
  console.log({ collection, menuDisabled })

  if (!collection.sourceData) return null
  const { image, title, description } = collection.sourceData
  const { hero } = collection
  const textAlign = menuDisabled
    ? 'center'
    : image && description
    ? 'left'
    : 'left'
  console.log({ hero, valid: isValidHero(hero) })
  return isValidHero(hero) ? (
    <HeroBlock hero={hero} landscape />
  ) : (
    <HeaderWrapper textAlign={{ xs: 'center', lg: textAlign }}>
      <Heading level={1} weight={2}>
        Shop: <Span fontStyle="italic">{title}</Span>
      </Heading>
    </HeaderWrapper>
  )
}
