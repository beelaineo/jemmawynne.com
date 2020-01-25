import * as React from 'react'
import { ImageBlock as ImageBlockType } from '../../types/generated'
import { Figure } from '../Figure'
import { getPageLinkUrl, getPageLinkLabel } from '../../utils/links'

export interface ImageBlockProps {
  block: ImageBlockType
}

export const ImageBlock = ({ block, justify }: ImageBlockProps) => {
  if (!block.images || !block.images.length) return null

  const caption = block.caption || getPageLinkLabel(block.link)
  const linkTo = block.link ? getPageLinkUrl(block.link) : undefined

  return (
    <Figure
      image={block.images[0]}
      linkTo={linkTo}
      caption={caption}
      justify={justify}
    />
  )
}
