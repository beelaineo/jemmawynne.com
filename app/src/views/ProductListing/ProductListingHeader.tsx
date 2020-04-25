import * as React from 'react'
import { ShopifyCollection } from '../../types'
import { Heading } from '../../components/Text'
import { HeaderWrapper } from './styled'
import { HeroBlock } from '../../components/ContentBlock'

interface ProductListingHeaderProps {
  collection: ShopifyCollection
}

export const PLD = ({ collection }: ProductListingHeaderProps) => (
  <>{collection.title}</>
)

export const ProductListingHeader = ({
  collection,
}: ProductListingHeaderProps) => {
  if (!collection.sourceData) return null
  const { image, title, description } = collection.sourceData
  const { hero } = collection
  const textAlign = image && description ? 'left' : 'center'
  return hero ? (
    <HeroBlock hero={hero} />
  ) : (
    <HeaderWrapper>
      <Heading textAlign={textAlign} level={2}>
        {title}
      </Heading>
    </HeaderWrapper>
  )
}
