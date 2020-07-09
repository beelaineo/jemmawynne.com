import styled, { DefaultTheme, css } from '@xstyled/styled-components'

export const MainImage = styled.img``

export const HoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.3s;
`

export const PreloadWrapper = styled.div`
  position: fixed;
  top: -500;
  left: -500;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
  z-index: -100;
`

interface WithFill {
  fillContainer?: boolean
}

export const ImageWrapper = styled.div<WithFill>`
  ${({ fillContainer }) => css`
    ${fillContainer
      ? css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `
      : css`
          position: relative;
        `}
  `}
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
interface PictureProps {
  theme: DefaultTheme
  loaded: boolean
  objectFit?: string
}

export const Picture = styled.picture`
  ${({ loaded, objectFit }: PictureProps) => css`
    max-height: 100%;
    max-width: 100%;
    width: auto;
    background-color: transparent;
    display: block;

    & > ${MainImage} {
      opacity: ${loaded ? 1 : 0};
      transition: 0.3s;
      transition-delay: 0.3s;
      max-width: 100%;
      object-fit: ${objectFit || 'cover'};
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
export const RatioImageFill = styled.div`
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
