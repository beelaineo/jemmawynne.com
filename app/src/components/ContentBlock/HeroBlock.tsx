import * as React from 'react'
import { Box } from '@xstyled/styled-components'
import { Image } from '../Image'
import { Hero, HeroContent as HeroContentType } from '../../types'
import { Heading } from '../Text'
import { CTA } from '../CTA'
import { useAnnouncement } from '../../providers/AnnouncementProvider'
import { definitely } from '../../utils'
import { RichText } from '../RichText'
import {
  TextOuter,
  TextContainer,
  HeroImageWrapper,
  HeroWrapper,
  HeroContentWrapper,
  HeroText,
} from './styled'

interface HeroContentProps {
  content?: HeroContentType | null
}

const HeroContent = ({ content }: HeroContentProps) => {
  if (!content) return null
  const {
    align,
    textPosition,
    textPositionMobile,
    title,
    bodyRaw,
    body,
    cta,
  } = content
  console.log({ content })
  return (
    <HeroText
      textAlign={align}
      textPosition={textPosition}
      textPositionMobile={textPositionMobile}
    >
      <TextOuter>
        <TextContainer>
          {title ? (
            <Heading mb={5} family="sans" level={5}>
              {title}
            </Heading>
          ) : null}
          <RichText body={bodyRaw || body} />
          {cta ? (
            <Box mt={5}>
              <CTA level={2} cta={cta} />
            </Box>
          ) : null}
        </TextContainer>
      </TextOuter>
    </HeroText>
  )
}

interface HeroBlockProps {
  hero?: Hero | null
  landscape?: boolean
}

export const HeroBlock = ({ hero, landscape }: HeroBlockProps) => {
  if (!hero) return null
  const { open: announcementOpen } = useAnnouncement()
  const {
    content,
    textColor,
    image,
    textColorMobile,
    mobileImage,
    fullHeight,
    contentLayout,
  } = hero

  return (
    <HeroWrapper
      fullHeight={fullHeight}
      announcementOpen={announcementOpen}
      landscape={landscape}
    >
      <HeroImageWrapper>
        {image ? <Image fillContainer ratio={0.45} image={image} /> : null}
        {mobileImage ? (
          <Image fillContainer ratio={1.1} image={mobileImage || image} />
        ) : null}
      </HeroImageWrapper>
      <HeroContentWrapper
        textColor={textColor}
        textColorMobile={textColorMobile}
        layout={contentLayout}
      >
        {definitely(content).map((cb) => (
          <HeroContent key={cb._key || 'some-key'} content={cb} />
        ))}
      </HeroContentWrapper>
    </HeroWrapper>
  )
}
