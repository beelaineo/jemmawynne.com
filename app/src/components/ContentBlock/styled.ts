import styled, { css } from '@xstyled/styled-components'
import {
  getColor,
  getFlexAlignment,
  getFlexJustification,
  getTextAlignment,
} from '../../theme/utils'
import { ImageWrapper } from '../Image/styled'

interface TextWrapperProps {
  withBackgroundImage: boolean
}

export const TextWrapper = styled.div<TextWrapperProps>`
  ${({ theme, withBackgroundImage }) => css`
    position: ${withBackgroundImage ? 'absolute' : 'relative'};
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    div {
      margin: 0 auto;
      max-width: 320px;
    }

    ${theme.mediaQueries.tablet} {
      position: relative;
      padding: 6 3;
      min-height: ${withBackgroundImage ? 'auto' : '650px'};

      div {
        max-width: 480px;
      }
    }

    ${theme.mediaQueries.mobile} {
      padding: 48px;
      min-height: ${withBackgroundImage ? 'auto' : '460px'};
    }
  `}
`

interface HeroWrapperProps {
  landscape?: boolean
  announcementOpen?: boolean
  fullHeight?: boolean | null
}

export const HeroWrapper = styled.div<HeroWrapperProps>`
  ${({ landscape, theme, announcementOpen, fullHeight }) => css`
    position: relative;
    z-index: 0;
    width: 100%;
    transition: 0.3s;
    height: ${landscape
      ? '25vw'
      : fullHeight
      ? announcementOpen
        ? `calc(100vh - ${theme.navHeight} - ${theme.announcementHeight})`
        : `calc(100vh - ${theme.navHeight})`
      : '450px'};

    ${theme.mediaQueries.tablet} {
      height: 37vw;
    }
    ${theme.mediaQueries.mobile} {
      height: 280px;
    }
  `}
`

interface HeroTextProps {
  textPosition?: string | null
  textAlign?: string | null
  textPositionMobile?: string | null
  textColor?: string | null
  textColorMobile?: string | null
}

export const HeroText = styled.div<HeroTextProps>`
  ${({
    theme,
    textPosition,
    textAlign,
    textPositionMobile,
    textColor,
    textColorMobile,
  }) => css`
    padding: 6;
    display: flex;
    flex-grow: 1;
    justify-content: ${getFlexJustification(textPosition)};
    align-items: ${getFlexAlignment(textPosition)};
    text-align: ${textAlign || getTextAlignment(textPosition)};
    color: ${getColor(textColor)};

    h1 {
      font-size: 90px;
      margin-bottom: 0.3em;
    }

    ${theme.mediaQueries.tablet} {
      h1 {
        font-size: 90px;
      }
    }

    ${theme.mediaQueries.mobile} {
      color: ${getColor(textColorMobile)};
      justify-content: ${getFlexJustification(textPositionMobile)};
      align-items: ${getFlexAlignment(textPositionMobile)};
      text-align: ${getTextAlignment(textPositionMobile)};
      h1 {
        font-size: 45px;
      }
    }
  `}
`

interface HeroContentWrapperProps {
  layout?: string | null
}

export const HeroContentWrapper = styled.div<HeroContentWrapperProps>`
  ${({ layout, theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: ${layout === 'vertical' ? 'column' : 'row'};

    ${theme.mediaQueries.tablet} {
      flex-direction: 'column';
    }
  `}
`

export const TextOuter = styled.div`
  ${({ theme }) => css`
    ${theme.mediaQueries.mobile} {
      min-width: initial;
    }
  `}
`

export const TextContainer = styled.div`
  ${({ theme }) => css`
    max-width: 350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    line-height: 1.2;
    ${theme.mediaQueries.mobile} {
      max-width: calc(100vw - (${theme.space[2]}px * 2));
    }
  `}
`

export const HeroImageWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

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

interface WrapperProps {
  textColor?: string | null
  backgroundColor?: string | null
  textAlign?: string | null
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, textAlign, textColor, backgroundColor }) => css`
    position: relative;
    background-color: ${getColor(backgroundColor) || 'transparent'};
    color: ${getColor(textColor) || 'body.9'};
    text-align: ${getTextAlignment(textAlign, 'center') || 'center'};

    ${theme.mediaQueries.aboveTablet} {
      height: 100%;
      & ${TextWrapper}:nth-child(2) {
        opacity: 0;
        transition: 0.2s;
        background-color: rgba(255, 255, 255, 0.6);
      }

      &:hover ${TextWrapper}:nth-child(2) {
        opacity: 1;
      }
    }
    ${theme.mediaQueries.tablet} {
      width: 100%;
      height: auto;
      margin-bottom: 3;
    }
  `}
`

export const RichTextWrapper = styled.div`
  h1,
  h2,
  h3 {
    font-weight: 2;
  }
`

export const BackgroundImagePadding = styled.div`
  ${({ theme }) => css`
    display: none;

    ${theme.mediaQueries.tablet} {
      display: block;
      width: 100%;
      padding-bottom: 140%;
    }
  `}
`

export const BackgroundImageWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.2s;
    overflow: hidden;

    ${ImageWrapper},
    picture,
      img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    ${theme.mediaQueries.tablet} {
      position: relative;

      &:after {
        content: '';
        width: 100%;
        padding-bottom: 100%;
      }
      max-height: 650px;
    }

    ${theme.mediaQueries.mobile} {
      max-height: 460px;
    }
  `}
`

interface PageBlockWrapperProps {
  padTop?: boolean
  isAlone?: boolean
  shiftContentDown?: boolean
}

export const PageBlockWrapper = styled.div<PageBlockWrapperProps>`
  ${({ theme, shiftContentDown, padTop, isAlone }) => css`
    position: relative;
    padding: 0 6;
    padding-top: ${isAlone ? '100px' : padTop ? '150px' : 9};
    padding-bottom: ${isAlone ? '100px' : 9};
    margin-bottom: ${shiftContentDown ? '-130px' : '0'};
    ${theme.mediaQueries.tablet} {
      padding-top: ${isAlone ? '100px' : padTop ? '100px' : 6};
      padding-bottom: ${isAlone ? '100px' : 6};
    }
  `}
`

interface PageBlockBackgroundProps {
  backgroundColor?: string | null
  shiftBackgroundColorDown?: boolean
}

export const PageBlockBackground = styled.div<PageBlockBackgroundProps>`
  ${({ shiftBackgroundColorDown, theme, backgroundColor }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${shiftBackgroundColorDown ? 'calc(100% + 60px)' : '100%'};
    z-index: -1;
    background-color: ${getColor(backgroundColor) || 'body.0'};
    transform: ${shiftBackgroundColorDown ? 'translateY(110px)' : 'none'};

    ${theme.mediaQueries.tablet} {
      transform: none;
    }
  `}
`

interface PageBlockInnerProps {
  alignment?: string | null
}

export const PageBlockInner = styled.div<PageBlockInnerProps>`
  ${({ alignment, theme }) => css`
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    justify-content: ${getFlexJustification(alignment)};
    align-items: ${getFlexAlignment(alignment)};
    text-align: ${getTextAlignment(alignment)};

    & > * {
      flex: 1 1 0px;
    }

    ${theme.mediaQueries.tablet} {
      max-width: 740px;
      display: block;
    }
  `}
`
export const PageImage = styled.div`
  ${({ theme }) => css`
    max-width: 740px;

    ${theme.mediaQueries.tablet} {
      &:nth-child(n + 2) {
        margin-top: 55px;
      }
    }
  `}
`

interface PageTextInnerProps {
  isAlone: boolean
}

export const PageText = styled.div<PageTextInnerProps>`
  ${({ isAlone, theme }) => css`
    padding: ${isAlone ? 0 : '0 8 8'};
    margin: ${isAlone ? '0 auto' : 0};
    ${theme.mediaQueries.tablet} {
      padding: 9 30px 4;
    }
    ${theme.mediaQueries.mobile} {
      padding: 8 4 4;
    }
  `}
`

export const PageTextInner = styled.div<PageTextInnerProps>`
  ${({ isAlone, theme }) => css`
    max-width: ${isAlone ? '800px' : '370px'};
    margin: ${isAlone ? '0 auto' : '0'};
    ${theme.mediaQueries.tablet} {
      max-width: ${isAlone ? '800px' : '520px'};
    }
  `}
`
