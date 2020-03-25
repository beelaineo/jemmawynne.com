import * as React from 'react'
import { Box } from '@xstyled/styled-components'
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

      <Box mt={5}>
        <Heading
          family="sans"
          mt={3}
          letterSpacing="0.06em"
          weight={2}
          textAlign="center"
          level={6}
          textTransform="uppercase"
        >
          {linkTitle}
        </Heading>
        {captionRaw && captionRaw.length ? (
          <RichText body={captionRaw} blockWrapper={Subtitle} />
        ) : null}
      </Box>
    </DocumentLink>
  )
}
