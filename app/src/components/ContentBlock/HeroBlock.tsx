import * as React from 'react'
import { x } from '@xstyled/styled-components'
import { Image, HeroImage } from '../Image'
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
  heroStyle?: string
  view?: string
}

const HeroContent = ({ content, heroStyle, view }: HeroContentProps) => {
  if (!content) return null
  const {
    align,
    textPosition,
    textPositionMobile,
    textColor,
    textColorMobile,
    title,
    bodyRaw,
    body,
    cta,
  } = content
  return (
    <HeroText
      textAlign={align}
      textPosition={textPosition}
      textPositionMobile={textPositionMobile}
      textColor={textColor}
      textColorMobile={textColorMobile}
      heroStyle={heroStyle}
      view={view}
    >
      <TextOuter id={view}>
        <TextContainer>
          {title ? (
            <Heading mb={3} family="sans" level={6}>
              {title}
            </Heading>
          ) : null}
          <RichText body={bodyRaw || body} />
          {cta ? (
            <x.div mt={5}>
              <CTA level={2} cta={cta} />
            </x.div>
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
    image,
    image_secondary,
    mobileImage,
    mobileImage_secondary,
    fullHeight,
    contentLayout,
  } = hero
  const heroStyle = hero?.heroStyle || 'default'
  return (
    <HeroWrapper
      fullHeight={fullHeight}
      announcementOpen={announcementOpen}
      landscape={landscape}
      heroStyle={heroStyle}
    >
      <HeroImageWrapper heroStyle={heroStyle} id="imagewrapper">
        {image &&
        image_secondary &&
        (heroStyle == 'one-two' || heroStyle == 'two-one') ? (
          <x.div
            position={'relative'}
            display="grid"
            gridTemplateColumns={{
              _: '1fr',
              sm: heroStyle == 'one-two' ? '1fr 2fr' : '2fr 1fr',
            }}
            gridTemplateRows={{ _: '4fr 1fr', sm: 'unset' }}
            h="100%"
          >
            <HeroImage ratio={0.45} image={image} />
            <HeroImage ratio={0.45} image={image_secondary} />
            {heroStyle == 'one-two' || heroStyle == 'two-one'
              ? definitely(content).map((cb) => (
                  <HeroContent
                    key={cb._key || 'some-key'}
                    content={cb}
                    heroStyle={heroStyle}
                    view={'flexMobile'}
                  />
                ))
              : null}
          </x.div>
        ) : (
          <Image
            displayCaption={false}
            fillContainer
            ratio={0.45}
            image={image}
          />
        )}
        {mobileImage ? (
          <Image
            displayCaption={false}
            fillContainer
            ratio={1.1}
            image={mobileImage || image}
          />
        ) : null}
      </HeroImageWrapper>
      <HeroContentWrapper layout={contentLayout} heroStyle={heroStyle}>
        {definitely(content).map((cb) => (
          <HeroContent
            key={cb._key || 'some-key'}
            content={cb}
            heroStyle={heroStyle}
          />
        ))}
      </HeroContentWrapper>
    </HeroWrapper>
  )
}
