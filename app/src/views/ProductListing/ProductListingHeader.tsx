import * as React from 'react'
import { ShopifyCollection } from '../../types'
import { Heading } from '../../components/Text'
import { Image } from '../../components/Image'
import { PLPHeader, PLPHeaderInner, PLPText, PLPImage } from './styled'
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
    <PLPHeader>
      <PLPHeaderInner>
        <PLPText>
          <Heading textAlign={textAlign} level={2}>
            {title}
          </Heading>
          <Heading textAlign={textAlign} level={4} family="serif">
            {description}
          </Heading>
        </PLPText>
        {image ? (
          <PLPImage>
            <Image image={image} ratio={1} />
          </PLPImage>
        ) : null}
      </PLPHeaderInner>
    </PLPHeader>
  )
}
