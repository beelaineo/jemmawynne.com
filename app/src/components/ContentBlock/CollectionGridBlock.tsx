import * as React from 'react'
import { CollectionGrid as CollectionGridType } from '../../types'
import { definitely } from '../../utils'
import { Heading } from '../Text'
import { DocumentLink } from '../DocumentLink'
import { ItemGrid } from '../ItemGrid'
import { SectionWrapper } from './Shared'

interface CollectionGridBlockProps {
  content?: CollectionGridType
}

export const CollectionGridBlock: React.FC<CollectionGridBlockProps> = ({
  content,
}) => {
  if (!content) return null
  const { collection } = content
  if (!collection?.products) return null
  return (
    <SectionWrapper>
      <Heading textAlign="center" mb={3} family="sans" level={4}>
        {collection.title}
      </Heading>
      <ItemGrid items={definitely(collection.products).slice(0, 12)} />
      <Heading textAlign="center" mt={5} family="sans" level={5}>
        <DocumentLink document={collection}>Shop the collection</DocumentLink>
      </Heading>
    </SectionWrapper>
  )
}
