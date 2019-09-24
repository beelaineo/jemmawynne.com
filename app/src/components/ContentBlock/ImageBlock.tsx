import * as React from 'react'
import { Link } from 'react-router-dom'
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
  console.log(content)
  const linkTo =
    link && link.document ? getDocumentLinkUrl(link.document) : undefined
  return (
    // @ts-ignore
    <ImageBlockWrapper as={linkTo ? Link : undefined} to={linkTo}>
      <Image image={backgroundImage} ratio={1} />
      <RichText body={captionRaw} />
    </ImageBlockWrapper>
  )
}
