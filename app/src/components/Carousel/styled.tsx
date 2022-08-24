import styled, { css, DefaultTheme } from '@xstyled/styled-components'
import { ImageWrapper } from '../Image/styled'

interface WithSingle {
  single?: boolean
}

export const CarouselContainer = styled.div<WithSingle>`
  ${({ theme, single }) => css`
    position: relative;
    height: 100%;
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
    img,
    picture {
      pointer-events: none;
    }
    padding: 0 9;
    ${theme.mediaQueries.desktop} {
      padding: 0 9;
    }
    ${theme.mediaQueries.mobile} {
      padding: 0;
    }
  `}
`

export const CarouselMask = styled.div<WithSingle>`
  ${({ theme, single }) => css`
    overflow: hidden;

    ${theme.mediaQueries.mobile} {
      max-width: calc(100% - (${theme.space[6]}px * 2));
      margin: 0 auto;
    }
  `}
`

interface SlidesContainerProps {
  left: number
  isSwiping: boolean
  theme: DefaultTheme
}

export const SlidesContainer = styled.div<SlidesContainerProps>`
  ${({ theme, left, isSwiping }) => css`
    position: relative;
    height: 100%;
    width: 100%;
    top: 0;
    white-space: nowrap;
    transform: translateX(${left}px);
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

export const SlideContainer = styled.div<WithColumnCount>`
  ${({ theme, columnCount, single }) => css`
    height: 100%;
    text-align: center;
    margin-right: 5;
    display: inline-flex;
    vertical-align: top;

    &:last-of-type {
      margin-right: 0;
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
          width: calc((100% - (20px * 4)) / 5);
          margin-right: 20px;

          ${ImageWrapper} {
            overflow: hidden;
            picture {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
          }

          ${theme.mediaQueries.desktop} {
            margin-right: 20px;
            width: calc((100% - (20px * 3)) / 4);
          }

          ${theme.mediaQueries.tablet} {
            width: calc((100% - (20px * 2)) / 3);
          }
          ${theme.mediaQueries.mobile} {
            width: calc((100% - (20px * 1)) / 2);
          }
        `}
  `}
`

interface ButtonWrapperProps {
  visible: boolean
  direction: 'previous' | 'next'
}

export const ButtonPadding = styled.div`
  ${({ theme }) => css`
    position: relative;
    top: 0;
    width: 30%;
    padding-bottom: 100%;
    ${theme.mediaQueries.mobile} {
      width: 20px;
    }
  `}
`

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  ${({ direction, visible, theme }) => css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    opacity: ${visible ? '1' : '0'};
    pointer-events: ${visible ? 'auto' : 'none'};

    button {
      position: absolute;
      top: 0;
      left: ${direction === 'next' ? 0 : 'auto'};
      right: ${direction === 'next' ? 'auto' : 0};
      width: ${theme.space[9]}px;
      height: 100%;
    }

    ${direction === 'next'
      ? css`
          left: 100%;
        `
      : css`
          right: 100%;
        `}

    width: calc((100% - (20px * 4)) / 5);

    ${theme.mediaQueries.desktop} {
      width: calc((100% - (20px * 3)) / 4);
    }

    ${theme.mediaQueries.tablet} {
      width: calc((100% - (20px * 2)) / 3);
    }
    ${theme.mediaQueries.mobile} {
      width: calc((100% - (20px * 1)) / 2);
      justify-content: ${direction === 'next' ? 'flex-start' : 'flex-end'};

      button {
        width: ${theme.space[6]}px;
      }
    }
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: ${theme.space[9]}px;
    width: calc(100% - (${theme.space[9]}px * 2));
    height: 100%;

    ${theme.mediaQueries.mobile} {
      width: calc(100% - (${theme.space[6]}px * 2));
      left: ${theme.space[6]}px;
    }
  `}
`

interface CarouselButtonProps {
  direction: 'previous' | 'next'
}
export const CarouselButton = styled.button<CarouselButtonProps>`
  ${({ theme, direction }) => css`
    width: 100%;
    height: 100%;
    z-index: 15;
    top: calc(50% - 30px);
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;

    ${direction === 'next'
      ? css`
          right: -25px;
        `
      : css`
          left: -25px;
          transform: rotate(180deg);
        `}
    background: transparent;
  `}
`
