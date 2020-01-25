import * as React from 'react'
import { ContentSection } from '../../types'
import { Wrapper } from './styled'
import { ImageBlock } from './ImageBlock'
import { TextBlock } from './TextBlock'
import { renderContentBlock } from './renderContentBlock'

interface NormalSectionProps {
  section: ContentSection
}

export const NormalSection = ({ section }: NormalSectionProps) => {
  const { items } = section
  return (
    <React.Fragment>
      {items ? items.map(renderContentBlock) : null}
    </React.Fragment>
  )
}
