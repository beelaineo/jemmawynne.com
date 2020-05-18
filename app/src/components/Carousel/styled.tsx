import styled, { css, DefaultTheme } from '@xstyled/styled-components'

export const CarouselContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  flex-grow: 1;
`

export const CarouselMask = styled.div`
  overflow: hidden;
`

interface SlidesContainerProps {
  left: number
  theme: DefaultTheme
}

export const SlidesContainer = styled.div`
  ${({ left }: SlidesContainerProps) => css`
    position: relative;
    height: 100%;
    width: 100%;
    top: 0;
    white-space: nowrap;
    transform: translate(${left}px);
    transition: 0.4s cubic-bezier(0.57, 0.06, 0.05, 0.95);

    & > * {
      white-space: initial;
    }
  `}
`

interface WithColumnCount {
  theme: DefaultTheme
  columnCount: number
}

export const SlideContainer = styled.div`
  ${({ theme, columnCount }: WithColumnCount) => css`
    height: 100%;
    text-align: center;
    width: calc(
      (100% - (${theme.space[5]}px * ${columnCount - 1})) / ${columnCount}
    );
    margin-right: 5;
    display: inline-flex;
    vertical-align: top;

    &:last-of-type {
      margin-right: 0;
    }

    ${theme.mediaQueries.tablet} {
      width: calc((100% - (${theme.space[4]}px * 2)) / 3);
    }
    ${theme.mediaQueries.mobile} {
      width: calc((100% - (${theme.space[4]}px * 1)) / 2);
    }
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
  ${({ theme, visible, direction }: CarouselButtonProps) => css`
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

    ${theme.mediaQueries.mobile} {
      display: none;
    }
  `}
`
