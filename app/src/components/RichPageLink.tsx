import * as React from 'react'
import { RichPageLink as RichPageLinkType } from '../types'
import { DocumentLink } from './DocumentLink'
import { RichText } from './RichText'
import { Image } from './Image'
import { Heading } from './Text'
import { getDocumentLinkImage } from '../utils/links'

interface RichPageLinkProps {
  link: RichPageLinkType
  label?: string
  level?: number
}

interface SubtitleProps {
  children: React.ReactNode
}

const Subtitle = (props: any) => <Heading level={5} fontWeight={2} {...props} />

export const RichPageLink = ({ link, label }: RichPageLinkProps) => {
  const { image: customImage, hoverImage, captionRaw } = link
  const image = customImage ?? getDocumentLinkImage(link.document)
  const linkTitle = label || link.title || link?.document?.title

  return (
    <DocumentLink document={link.document}>
      <Image hoverImage={hoverImage} image={image} ratio={1} />

      <Heading family="serif" mt={2} weight={2} textAlign="center" level={3}>
        {linkTitle}
      </Heading>
      {captionRaw && captionRaw.length ? (
        <RichText body={captionRaw} blockWrapper={Subtitle} />
      ) : null}
    </DocumentLink>
  )
}
