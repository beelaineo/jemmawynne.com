import styled, { css } from '@xstyled/styled-components'
import { getColor, getTextAlignment } from '../../theme/utils'
import { Wrapper as ImageWrapper } from '../Image/styled'

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
      max-width: 400px;
    }

    ${theme.mediaQueries.tablet} {
      position: relative;
      padding: 3 3;
      div {
        max-width: 350px;
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
      height: 45vw;
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
