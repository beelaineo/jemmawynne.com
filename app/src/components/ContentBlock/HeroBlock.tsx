import * as React from 'react'
import styled, { css, DefaultTheme } from 'styled-components'
import { Image, ImageWrapper } from '../Image'
import { Hero } from '../../types'
import { CTA } from '../CTA'
import { RichText } from '../RichText'

interface HeroBackground {
  theme: DefaultTheme
}

const HeroWrapper = styled.div`
  ${({ theme }: HeroBackground) => css`
    position: relative;
    z-index: 0;
  `}
`

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
    justify-content: ${theme.utils.getFlexJustification(textPosition)};
    align-items: ${theme.utils.getFlexAlignment(textPosition)};
    text-align: ${textAlign || theme.utils.getTextAlignment(textPosition)};
    color: ${theme.utils.getColor(textColor, theme)};

    .text-container {
      max-width: 400px;
      display: flex;
      flex-direction: column;
    }

    ${theme.mediaQueries.mobile} {
      justify-content: ${theme.utils.getFlexJustification(textPositionMobile)};
      align-items: ${theme.utils.getFlexAlignment(textPositionMobile)};
      text-align: ${theme.utils.getTextAlignment(textPositionMobile)};
      color: ${theme.utils.getColor(textColorMobile, theme)};
    }
  `}
`

const HeroImageWrapper = styled.div`
  ${({ theme }) => css`
    & > div:nth-of-type(2) {
      display: none;
    }

    ${theme.mediaQueries.mobile} {
      & > div:nth-of-type(1) {
        display: none;
      }
      & > div:last-child {
        display: block;
      }
    }
  `}
`

interface HeroBlockProps {
  hero: Hero
}

export const HeroBlock = ({ hero }: HeroBlockProps) => {
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
  } = hero

  return (
    <HeroWrapper>
      <HeroImageWrapper>
        {image ? <Image ratio={0.45} image={image} /> : null}
        {mobileImage ? (
          <Image ratio={1.1} image={mobileImage || image} />
        ) : null}
      </HeroImageWrapper>
      <HeroText
        textAlign={textAlign}
        textPosition={textPosition}
        textColor={textColor}
        textPositionMobile={textPositionMobile}
        textColorMobile={textColorMobile}
      >
        <div className="text-container">
          <RichText body={bodyRaw} />

          {cta ? <CTA cta={cta} /> : null}
        </div>
      </HeroText>
    </HeroWrapper>
  )
}
