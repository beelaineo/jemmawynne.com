import styled, { css } from '@xstyled/styled-components'
import {
  getColor,
  getFlexAlignment,
  getFlexJustification,
  getTextAlignment,
} from '../../theme/utils'
import { Position } from '../../types'
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
      padding: 3 3;
    }
  `}
`
export const HeroWrapper = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 450px;
  overflow: hidden;
`

export const TextOuter = styled.div`
  ${({ theme }) => css`
    min-width: 540px;

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
      max-height: 85vh;
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

export const BackgroundImageWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.2s;

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
      height: 80vw;
      max-height: 420px;
    }
  `}
`

interface PageBlockWrapperProps {
  backgroundColor?: string | null
  shiftDown?: boolean
  padTop?: boolean
  isAlone?: boolean
}

export const PageBlockWrapper = styled.div<PageBlockWrapperProps>`
  ${({ padTop, shiftDown, isAlone, backgroundColor }) => css`
    padding: 0 6;
    padding-top: ${isAlone ? '100px' : padTop ? '150px' : 3};
    padding-bottom: ${isAlone ? '100px' : 10};
    background-color: ${getColor(backgroundColor) || 'body.0'};
    margin-bottom: ${shiftDown ? '-170px' : '0'};
  `}
`

interface PageBlockInnerProps {
  alignment?: string | null
}

export const PageBlockInner = styled.div<PageBlockInnerProps>`
  ${({ alignment }) => css`
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    justify-content: ${getFlexJustification(alignment)};
    align-items: ${getFlexAlignment(alignment)};
    & > * {
      flex: 1 1 0px;
    }
  `}
`
interface PageTextInnerProps {
  isAlone: boolean
}

export const PageText = styled.div<PageTextInnerProps>`
  ${({ isAlone }) => css`
    padding: ${isAlone ? 0 : '0 8 8'};
  `}
`

export const PageTextInner = styled.div<PageTextInnerProps>`
  ${({ isAlone }) => css`
    max-width: ${isAlone ? '800px' : '370px'};
    margin: ${isAlone ? '0 auto' : '0'};
    text-align: ${isAlone ? 'center' : 'left'};
  `}
`

export const PageImage = styled.div`
  max-width: 740px;
  max-height: 75vh;
`
