import * as React from 'react'
import { Box } from '@xstyled/styled-components'
import { CollectionGrid as CollectionGridType } from '../../types'
import { definitely } from '../../utils'
import { Heading } from '../Text'
import { ItemGrid } from '../ItemGrid'
import { SectionWrapper } from './Shared'
import { CTA } from '../CTA'

interface CollectionGridBlockProps {
  content?: CollectionGridType
}

export const CollectionGridBlock: React.FC<CollectionGridBlockProps> = ({
  content,
}) => {
  if (!content) return null
  const { collection, customTitle, customCTALabel } = content
  if (!collection?.products) return null
  const collectionCta = {
    __typename: 'Cta' as const,
    label: customCTALabel || 'Discover More',
    link: {
      __typename: 'InternalLink' as const,
      document: collection,
    },
  }
  const title = customTitle || collection.title
  return (
    <SectionWrapper>
      <Heading textAlign="center" mb={3} family="sans" level={4}>
        {title}
      </Heading>
      <Box maxWidth="xWide" mx="auto">
        <ItemGrid items={definitely(collection.products).slice(0, 12)} />
      </Box>
      <Box display="flex" justifyContent="center" mt={9}>
        <CTA level={1} cta={collectionCta} />
      </Box>
    </SectionWrapper>
  )
}
