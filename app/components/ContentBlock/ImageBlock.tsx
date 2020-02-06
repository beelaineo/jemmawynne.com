import * as React from 'react'
import Link from 'next/Link'
import styled from 'styled-components'
import { ImageBlock as ImageBlockType } from '../../types'
import { Image } from '../Image'
import { RichText } from '../RichText'
import { getDocumentLinkUrl } from '../../utils'

const ImageBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

interface ImageBlockProps {
  content: ImageBlockType
}

export const ImageBlock = ({ content }: ImageBlockProps) => {
  const { link, backgroundImage, captionRaw } = content
  if (!backgroundImage) return null
  const linkTo =
    link && link.document ? getDocumentLinkUrl(link.document) : undefined

  const renderInner = () => (
    <ImageBlockWrapper>
      <Image image={backgroundImage} ratio={1} />
      <RichText body={captionRaw} />
    </ImageBlockWrapper>
  )
  return linkTo ? (
    <Link href={linkTo}>
      <a>{renderInner()}</a>
    </Link>
  ) : (
    renderInner()
  )
}
