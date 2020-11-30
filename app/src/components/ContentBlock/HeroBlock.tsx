import * as React from 'react'
import styled, { css, Box, DefaultTheme } from '@xstyled/styled-components'
import { Image } from '../Image'
import { Hero } from '../../types'
import { Heading } from '../Text'
import { CTA } from '../CTA'
import { RichText } from '../RichText'
import {
  getFlexJustification,
  getFlexAlignment,
  getTextAlignment,
  getColor,
} from '../../theme'
import {
  TextOuter,
  TextContainer,
  HeroImageWrapper,
  HeroWrapper,
} from './styled'

interface HeroTextProps {
  theme: DefaultTheme
  textPosition?: string | null
  textAlign?: string | null
  textColor?: string | null
  textPositionMobile?: string | null
  textColorMobile?: string | null
}

const HeroText = styled.div`
  ${({
    theme,
    textPosition,
    textAlign,
    textColor,
    textPositionMobile,
    textColorMobile,
  }: HeroTextProps) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 6;
    display: flex;
    justify-content: ${getFlexJustification(textPosition)};
    align-items: ${getFlexAlignment(textPosition)};
    text-align: ${textAlign || getTextAlignment(textPosition)};
    color: ${getColor(textColor) || 'currentColor'};

    ${theme.mediaQueries.mobile} {
      justify-content: ${getFlexJustification(textPositionMobile)};
      align-items: ${getFlexAlignment(textPositionMobile)};
      text-align: ${getTextAlignment(textPositionMobile)};
      color: ${getColor(textColorMobile) || 'currentColor'};
    }
  `}
`

interface HeroBlockProps {
  hero?: Hero | null
  landscape?: boolean
}

export const HeroBlock = ({ hero, landscape }: HeroBlockProps) => {
  if (!hero) return null
  const {
    textPosition,
    textColor,
    bodyRaw,
    image,
    textPositionMobile,
    textColorMobile,
    textAlign,
    mobileImage,
    cta,
    title,
  } = hero

  return (
    <HeroWrapper landscape={landscape}>
      <HeroImageWrapper>
        {image ? <Image fillContainer ratio={0.45} image={image} /> : null}
        {mobileImage ? (
          <Image fillContainer ratio={1.1} image={mobileImage || image} />
        ) : null}
      </HeroImageWrapper>
      <HeroText
        textAlign={textAlign}
        textPosition={textPosition}
        textColor={textColor}
        textPositionMobile={textPositionMobile}
        textColorMobile={textColorMobile}
      >
        <TextOuter>
          <TextContainer>
            {title ? (
              <Heading mb={5} family="sans" level={5}>
                {title}
              </Heading>
            ) : null}
            <RichText body={bodyRaw} />
            {cta ? (
              <Box mt={5}>
                <CTA level={2} cta={cta} />
              </Box>
            ) : null}
          </TextContainer>
        </TextOuter>
      </HeroText>
    </HeroWrapper>
  )
}
