import * as React from 'react'
import styled, { css } from 'styled-components'
import { Link as RrLink } from 'react-router-dom'
import { RichPageLink as RichPageLinkType } from '../types/generated'
import { DocumentLink } from './DocumentLink'
import { RichText } from './RichText'
import { Image } from './Image'
import { Header5 } from './Text'
import { getDocumentLinkUrl, getDocumentLinkLabel } from '../utils/links'

interface LinkProps {
  link: RichPageLinkType
  label?: string
}

const linkStyles = {
  textDecoration: 'none',
  color: 'inherit',
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
  const { image, hoverImage, captionRaw } = link
  const title = label || link.title || link.document.title
  console.log(link)
  return (
    <DocumentLink document={link.document}>
      <Image image={image} ratio={1} />
      <TextWrapper>
        <Header5>{title}</Header5>
        {captionRaw && captionRaw.length ? (
          <RichText body={captionRaw} blockWrapper={Subtitle} />
        ) : null}
      </TextWrapper>
    </DocumentLink>
  )
}
