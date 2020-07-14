import * as React from 'react'
import { ShopifyCollection } from '../../types'
import { Heading } from '../../components/Text'
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
  if (!collection.sourceData) return null
  const { image, title, description } = collection.sourceData
  const { hero } = collection
  const textAlign = menuDisabled
    ? 'center'
    : image && description
    ? 'left'
    : 'left'
  return isValidHero(hero) ? (
    <HeroBlock hero={hero} />
  ) : (
    <HeaderWrapper>
      <Heading textAlign={textAlign} level={2} weight={2} fontStyle="italic">
        {title}
      </Heading>
    </HeaderWrapper>
  )
}
