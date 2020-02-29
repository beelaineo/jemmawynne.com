import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { RichPageLink as RichPageLinkType } from '../types'
import { DocumentLink } from './DocumentLink'
import { RichText } from './RichText'
import { Image } from './Image'
import { Heading } from './Text'
import { getDocumentLinkImage } from '../utils/links'

interface LinkProps {
  link: RichPageLinkType
  label?: string
}

const TextWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 3;
    text-align: center;
  `}
`

interface SubtitleProps {
  children: React.ReactNode
}
const Subtitle = (props: any) => <Heading level={5} fontWeight={2} {...props} />

export const RichPageLink = ({ link, label }: LinkProps) => {
  const { image: customImage, hoverImage, captionRaw } = link
  const image = customImage ?? getDocumentLinkImage(link.document)
  const linkTitle = label || link.title || link?.document?.title

  return (
    <DocumentLink document={link.document}>
      <Image hoverImage={hoverImage} image={image} ratio={1} />
      <TextWrapper>
        <Heading level={5}>{linkTitle}</Heading>
        {captionRaw && captionRaw.length ? (
          <RichText body={captionRaw} blockWrapper={Subtitle} />
        ) : null}
      </TextWrapper>
    </DocumentLink>
  )
}
