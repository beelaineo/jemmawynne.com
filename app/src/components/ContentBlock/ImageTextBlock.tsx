import * as React from 'react'
import { Box } from '@xstyled/styled-components'
import { Cta, ImageTextBlock as ImageTextBlockType } from '../../types'
import { Image } from '../Image'
import { Heading } from '../Text'
import { RichText } from '../RichText'
import { CTA } from '../CTA'
import { TextWrapper, Wrapper, BackgroundImageWrapper } from './styled'
import { DocumentLink } from '../DocumentLink'

interface LinkWrapperProps {
  children: React.ReactNode
  cta?: Cta | null
}

const LinkWrapper = ({ children, cta }: LinkWrapperProps) => {
  if (!cta?.link?.document) return <>{children}</>
  return <DocumentLink document={cta.link.document}>{children}</DocumentLink>
}

interface ImageTextBlockProps {
  block: ImageTextBlockType
}

export const ImageTextBlock = ({ block }: ImageTextBlockProps) => {
  const {
    header,
    headerFont,
    bodyRaw,
    backgroundColor,
    textColor,
    textAlign,
    cta,
    backgroundImage,
    hoverImage,
  } = block

  return (
    <LinkWrapper cta={cta}>
      <Wrapper
        textAlign={textAlign}
        textColor={textColor}
        backgroundColor={backgroundColor}
      >
        {backgroundImage ? (
          <BackgroundImageWrapper>
            <Image image={backgroundImage} hoverImage={hoverImage} />
          </BackgroundImageWrapper>
        ) : null}

        {header || bodyRaw || cta ? (
          <TextWrapper>
            <div>
              {header ? (
                <Heading
                  level={5}
                  family={headerFont || 'sans'}
                  mb={{ xs: 0, lg: 5 }}
                >
                  {header}
                </Heading>
              ) : null}
              {bodyRaw ? <RichText body={bodyRaw} /> : null}
              {cta ? (
                <Box mt={{ lg: 5 }}>
                  <CTA level={2} cta={cta} />
                </Box>
              ) : null}
            </div>
          </TextWrapper>
        ) : null}
      </Wrapper>
    </LinkWrapper>
  )
}
