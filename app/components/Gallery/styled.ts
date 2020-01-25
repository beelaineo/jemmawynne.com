import styled, { css, DefaultTheme } from 'styled-components'
import { ImageWrapper } from '../Image'

export const GalleryWrapper = styled.div`
  position: relative;
`

export const MainImageWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.layout.spacing.single};
    position: relative;

    &:hover ${ZoomImageWrapper} {
      opacity: 1;
    }
  `}
`

export const Thumbnails = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: ${theme.layout.spacing.single};
  `}
`

export const ZoomImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
  transition: 0.2s;
`

interface ZoomInnerProps {
  zoomAmount: number
}

export const ZoomInner = styled.div`
  ${({ zoomAmount }: ZoomInnerProps) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% * ${zoomAmount});
    height: calc(100% * ${zoomAmount});

    & ${ImageWrapper} {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `}
`
