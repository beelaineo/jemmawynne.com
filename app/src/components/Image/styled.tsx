import * as React from 'react'
import styled, { DefaultTheme, css } from 'styled-components'

interface PictureProps {
  theme: DefaultTheme
  loaded: boolean
}

export const Wrapper = styled.div`
  position: relative;
`

export const Picture = styled.picture`
  ${({ loaded, theme }: PictureProps) => css`
    max-height: 100%;
    max-width: calc(100vw - (${theme.layout.spacing.three} * 2));
    width: auto;
    background-color: transparent;
    display: block;

    & > img {
      opacity: ${loaded ? '1' : '0'};
      transition: 0.3s;
      transition-delay: 0.3s;
      max-width: 100%;
      object-fit: cover;
    }

    ${theme.mediaQueries.tablet} {
      max-width: calc(100vw - ${theme.layout.spacing.two});
    }
  `}
`

export const RatioImageFill = styled.img`
  display: block;

  & + picture > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`
