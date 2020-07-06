import * as React from 'react'
import { ShopifyProduct } from '../../types'
import { useShopData } from '../../providers/ShopDataProvider'
import { Heading } from '../../components/Text'
import { TagBadge, TagBadgeWrapper } from './styled'

interface TagBadgesProps {
  product: ShopifyProduct
}

export const TagBadges = ({ product }: TagBadgesProps) => {
  const { getTagBadges } = useShopData()
  const tagBadges = getTagBadges(product)

  if (!tagBadges.length) return <div />
  return (
    <TagBadgeWrapper>
      {tagBadges.map((match) => (
        <TagBadge key={match.tag || 'some-key'}>
          <Heading my={0} family="sans" weight={2} level={6}>
            {match.label || match.tag}
          </Heading>
        </TagBadge>
      ))}
    </TagBadgeWrapper>
  )
}
