import styled, { css } from '@xstyled/styled-components'
import {
  getColor,
  getFlexAlignment,
  getFlexJustification,
  getTextAlignment,
} from '../../theme/utils'
import { Position } from '../../types'
import { ImageWrapper } from '../Image/styled'

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 6;
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
  min-width: 540px;
`

export const TextContainer = styled.div`
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
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
    text-align: ${getTextAlignment(textAlign) || 'center'};

    ${theme.mediaQueries.aboveTablet} {
      height: 40vw;
      max-height: 85vh;
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
  alignment?: string | null
  backgroundColor?: string | null
  shiftDown?: boolean
  padTop?: boolean
}

export const PageBlockWrapper = styled.div<PageBlockWrapperProps>`
  ${({ alignment, padTop, shiftDown, backgroundColor }) => css`
    padding: ${padTop ? 11 : 3} 6 6;
    display: flex;
    justify-content: ${getFlexJustification(alignment)};
    align-items: ${getFlexAlignment(alignment)};
    background-color: ${getColor(backgroundColor) || 'body.0'};
    margin-bottom: ${shiftDown ? '-100px' : '0'};

    & > * {
      flex: 1 1 0px;
    }
  `}
`

export const PageText = styled.div`
  padding: 0 5;
`

export const PageImage = styled.div`
  max-width: 600px;
`
