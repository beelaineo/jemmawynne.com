import * as React from 'react'
import styled, { DefaultTheme, css } from '@xstyled/styled-components'

interface PictureProps {
  theme: DefaultTheme
  loaded: boolean
}

export const Wrapper = styled.div`
  position: relative;
`

export const HoverImageWrapper = styled.div`
  position: absolute;

  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.3s;

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export const Picture = styled.picture`
  ${({ loaded }: PictureProps) => css`
    max-height: 100%;
    width: auto;
    background-color: transparent;
    display: block;

    &:hover ${HoverImageWrapper} {
      opacity: 1;
    }

    & > img {
      opacity: ${loaded ? '1' : '0'};
      transition: 0.3s;
      transition-delay: 0.3s;
      max-width: 100%;
      object-fit: cover;
    }
  `}
`

export const ImageFillWrapper = styled.div`
  position: relative;

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

export const RatioImageFill = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
