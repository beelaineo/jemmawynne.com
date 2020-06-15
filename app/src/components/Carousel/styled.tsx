import styled, { css, DefaultTheme } from '@xstyled/styled-components'

interface WithSingle {
  single?: boolean
}

export const CarouselContainer = styled.div<WithSingle>`
  position: relative;
  height: 100%;
  width: 100%;
  flex-grow: 1;
  img,
  picture {
    pointer-events: none;
  }
`

export const CarouselMask = styled.div`
  overflow: hidden;
  max-width: 100%;
`

interface SlidesContainerProps {
  left: number
  isSwiping: boolean
  theme: DefaultTheme
}

export const SlidesContainer = styled.div.attrs<SlidesContainerProps>(
  (props) => ({
    style: {
      transform: `translateX(${props.left}px)`,
    },
  }),
)`
  ${({ theme, isSwiping }: SlidesContainerProps) => css`
    position: relative;
    height: 100%;
    width: 100%;
    top: 0;
    white-space: nowrap;
    transition: ${isSwiping ? 0 : '0.4s cubic-bezier(0.57, 0.06, 0.05, 0.95)'};

    & > * {
      white-space: initial;
    }

    ${theme.mediaQueries.mobile} {
      padding: 0;
    }
  `}
`

interface WithColumnCount {
  theme: DefaultTheme
  columnCount?: number
  single?: boolean
}

export const SlideContainer = styled.div`
  ${({ theme, columnCount, single }: WithColumnCount) => css`
    height: 100%;
    text-align: center;
    margin-right: 5;
    display: inline-flex;
    vertical-align: top;

    &:last-of-type {
      margin-right: 0;
    }

    & > * {
      width: 100%;
    }

    ${single
      ? css`
          width: 100%;
          margin-right: 0;
        `
      : columnCount
      ? css`
          width: calc(
            (100% - (${theme.space[5]}px * ${columnCount - 1})) / ${columnCount}
          );
        `
      : css`
          width: calc((100% - (${theme.space[5]}px * 4)) / 5);
          margin-right: 5;

          ${theme.mediaQueries.desktop} {
            width: calc((100% - (${theme.space[4]}px * 3)) / 4);
            margin-right: 4;
          }

          ${theme.mediaQueries.tablet} {
            width: calc((100% - (${theme.space[4]}px * 2)) / 3);
          }
        `}
  `}
`

interface CarouselButtonProps {
  theme: DefaultTheme
  visible: boolean
  direction: 'previous' | 'next'
}

const WIDTH = 20
const HEIGHT = WIDTH * 2
const STROKE = 2

export const CarouselButton = styled.button`
  ${({ visible, direction }: CarouselButtonProps) => css`
    opacity: ${visible ? '1' : '0'};
    pointer-events: ${visible ? 'auto' : 'none'};
    position: absolute;
    width: ${WIDTH}px;
    z-index: 15;
    height: ${HEIGHT}px;
    top: calc(50% - 30px);
    transition: 0.2s;

    ${direction === 'previous'
      ? css`
          left: -25px;
        `
      : css`
          right: -25px;
        `}
    background: transparent;

    &:before,
    &:after {
      content: '';
      position: absolute;
      ${direction === 'previous'
        ? css`
            left: 1px;
            transform-origin: ${STROKE / 2}px 50%;
          `
        : css`
            right: 3px;
            transform-origin: calc(100% - ${STROKE / 2}px) 50%;
          `};
      top: 50%;
      height: ${STROKE}px;
      width: ${WIDTH}px;
      background-color: black;
    }

    ${direction === 'previous'
      ? css`
          &:before {
            transform: rotate(-315deg);
          }
          &:after {
            transform: rotate(-45deg);
          }
        `
      : css`
          &:before {
            transform: rotate(45deg);
          }
          &:after {
            transform: rotate(-45deg);
          }
        `}
  `}
`

