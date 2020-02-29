import * as React from 'react'
import styled, { css } from 'styled-components'
import { RichPageLink as RichPageLinkType } from '../types'
import { DocumentLink } from './DocumentLink'
import { RichText } from './RichText'
import { Image } from './Image'
import { Header5 } from './Text'
import { getDocumentLinkImage } from '../utils/links'

interface LinkProps {
  link: RichPageLinkType
  label?: string
}

const TextWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.layout.spacing.half};
    text-align: center;
  `}
`

const Subtitle = styled(Header5)`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.light};
  `}
`

export const RichPageLink = ({ link, label }: LinkProps) => {
  const { image: customImage, hoverImage, captionRaw } = link
  const image = customImage ?? getDocumentLinkImage(link.document)
  const linkTitle = label || link.title || link?.document?.title

  return (
    <DocumentLink document={link.document}>
      <Image hoverImage={hoverImage} image={image} ratio={1} />
      <TextWrapper>
        <Header5>{linkTitle}</Header5>
        {captionRaw && captionRaw.length ? (
          <RichText body={captionRaw} blockWrapper={Subtitle} />
        ) : null}
      </TextWrapper>
    </DocumentLink>
  )
}
