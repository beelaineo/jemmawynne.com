import * as React from 'react'
import Link from 'next/link'
import styled, { Box } from '@xstyled/styled-components'
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
      <Box mt={2}>
        <RichText body={captionRaw} />
      </Box>
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
