// @ts-ignore
import styled, { css, DefaultTheme } from '@xstyled/styled-components'
import {
  Wrapper as ImageElementWrapper,
  Picture,
} from '../../components/Image/styled'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: block;
    position: relative;
    z-index: nav;
    font-family: sans;

    ${theme.mediaQueries.tablet} {
      position: sticky;
      top: 0;
      height: 42px;
      width: 100%;
      background-color: white;
    }
  `}
`

export const NavTop = styled.div`
  ${({ theme }) => css`
    padding-top: 30px;
    margin-bottom: 5;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    svg {
      max-height: 100%;
    }

    ${theme.mediaQueries.tablet} {
      padding-top: 0;
      margin-bottom: 0;
    }
  `}
`

export const DesktopInner = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    padding: 0 6 3;
    width: 100%;
    margin: 0 auto;

    ${theme.mediaQueries.tablet} {
      display: none;
    }
  `}
`
interface InnerProps {
  theme: DefaultTheme
  open: boolean
}

export const TabletInner = styled.nav`
  ${({ theme, open }: InnerProps) => css`
    ${theme.mediaQueries.aboveTablet} {
      display: none;
    }
    position: sticky;
    width: 100vw;
    height: 100vh;
    transform: translateX(${open ? '0' : '-102vw'});
    transition: 0.3s;
    background-color: body.2;
    padding: 3 6;
    display: block;
  `}
`

export const BurgerMenu = styled.button`
  ${({ theme }) => css`
    display: none;
    position: absolute;
    top: 11px;
    left: 15px;
    font-size: 21px;

    ${theme.mediaQueries.tablet} {
      display: block;
    }
  `}
`

interface WithReady {
  theme: DefaultTheme
  ready: boolean
  align?: string
}

export const NavSection = styled.div`
  ${({ theme, ready }: WithReady) => css`
    transition: 0.3s;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    opacity: ${ready ? '1' : '0'};

    &:last-child {
      justify-content: flex-end;
    }

    ${theme.mediaQueries.tablet} {
      height: auto;
      display: block;
    }
  `}
`

export const NavTools = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    width: 24px;
    height: 24px;
    top: 28px;
    right: 24px;
    ${theme.mediaQueries.tablet} {
      top: 9px;
      right: 15px;
    }
  `}
`

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 360px;
    display: block;

    ${theme.mediaQueries.tablet} {
      max-width: 60vw;
      height: 17px;
    }
  `}
`

interface CartButtonProps {
  disabled?: boolean
}

export const CartCount = styled.span`
  font-size: 6;
  font-weight: 3;
  font-family: sans;
`

export const CartButton = styled.button`
  ${({ theme, disabled }) => css`
    position: relative;
    opacity: ${disabled ? '0.6' : '1'};
    pointer-events: ${disabled ? 'none' : 'inherit'};
    display: flex;
    font-size: 2;
    align-items: center;
    min-width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;

    ${theme.mediaQueries.tablet} {
      font-size: 21px;
    }
  `}
`

export const NavHeader = styled.div`
  border-bottom: 1px solid transparent;
  letter-spacing: 0.08em;
  padding-bottom: 1;
  transition: 0.2s;
`

interface WithBorders {
  borders?: boolean
}

export const NavHeaderMobile = styled.button<WithBorders>`
  ${({ theme, borders }) => css`
    ${theme.mediaQueries.aboveTablet} {
      display: none;
    }
    cursor: pointer;
    display: block;
    width: 100%;
    padding: 3 0;
    background-color: transparent;
    justify-content: space-between;
    align-items: center;
    display: flex;
    border-bottom: ${borders ? '1px solid currentColor' : 'none'};
  `}
`
interface PlusWrapperProps {
  theme: DefaultTheme
  active?: boolean
}

export const PlusWrapper = styled.div<PlusWrapperProps>`
  ${({ theme, active }) => css`
    display: none;
    ${theme.mediaQueries.tablet} {
      display: initial;
      vertical-align: top;
      width: 16px;
      height: 16px;
      position: relative;

      &:before,
      &:after {
        content: '';
        position: absolute;
        background-color: currentColor;
      }

      &:before {
        height: 100%;
        width: 1px;
        top: 0;
        left: 8px;
        display: ${active ? 'none' : 'initial'};
      }
      &:after {
        width: 100%;
        height: 1px;
        top: 8px;
        left: 0;
      }
    }
  `}
`

interface WithBorders {
  borders?: boolean
}

export const NavHeaderWrapper = styled.div<WithBorders>`
  ${({ theme, borders }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: default;
    align-items: center;
    margin: 0 2em;

    &:focus > ${NavHeader}, &:hover > ${NavHeader} {
      border-bottom-color: ${borders ? 'body.9' : 'transparent'};
    }
    ${theme.mediaQueries.tablet} {
      margin: 0;
      display: block;
      padding: 0;
      text-align: left;
    }
  `}
`

interface NavPageLinkWrapperProps {
  small?: boolean
  borders?: boolean
  align?: string
}

export const NavPageLinkWrapper = styled.div<NavPageLinkWrapperProps>`
  ${({ small, borders, align }) =>
    small
      ? css`
          text-align: ${align || 'center'};
          padding: ${borders ? '5 0' : '3 0'};
          border-bottom: ${borders ? '1px solid currentColor' : 'none'};
        `
      : ''}
`

interface WithOpen {
  theme: DefaultTheme
  open: boolean
}

export const SubmenuPane = styled.div`
  ${({ theme, open }: WithOpen) => css`
    opacity: ${open ? 1 : 0};
    pointer-events: ${open ? 'initial' : 'none'};
    position: absolute;
    z-index: calc(${theme.zIndices.nav} - 1);
    top: 100%;
    left: 0;
    width: 100%;
    padding-top: 2;
    min-height: 260px;
    background-color: white;
    transition: 0.2s;

    ${theme.mediaQueries.tablet} {
      top: 0;
      height: 100%;
      z-index: calc(${theme.zIndices.nav} + 1);
    }
  `}
`

interface WithActive {
  theme: DefaultTheme
  active: boolean
}

export const SubMenuWrapper = styled.div`
  padding: 0 3;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 250px 1fr;
`

export const SubMenuTitles = styled.div``

export const ImageLinkWrapper = styled.div`
  grid-column: span 2;
`

export const SubMenuContent = styled.div`
  position: relative;
`

export const SubMenuItemWrapper = styled.div`
  flex-basis: 25%;
  margin-bottom: -16px;

  &:last-child {
    flex-grow: 1;
  }
  & + & {
    margin-left: 2;
  }
`

export const ImageWrapper = styled.div`
  flex-basis: 25%;
  position: relative;

  & + &,
  ${SubMenuItemWrapper} + & {
    margin-left: 2;
  }
  &:last-child {
    flex-grow: 1;

    ${ImageElementWrapper}, ${Picture}, img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
`

export const SubMenuContentSection = styled.div`
  ${({ active }: WithActive) => css`
    display: ${active ? 'flex' : 'none'};
    justify-content: space-between;
    grid-template-columns: repeat(10, 1fr);
    grid-column-gap: 3;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `}
`

export const SubMenuTitle = styled.div`
  ${({ active }: WithActive) => css`
    margin-bottom: 3;
    & > * {
      cursor: pointer;
      display: inline;
      padding-bottom: 1;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        transition: 0.3s ease-out;
        width: ${active ? '100%' : '0'};
        height: 1px;
        background-color: currentColor;
      }
    }
  `}
`

export const SubMenuColumns = styled.div`
  ${({ theme, active }: WithActive) => css`
    display: ${active ? 'grid' : 'none'};
    margin: 0 auto;
    max-width: xWide;
    grid-template-columns: repeat(5, 1fr);
    padding: 3 5 5;
    grid-column-gap: 3;

    ${theme.mediaQueries.tablet} {
      grid-template-columns: 1fr;
      grid-row-gap: 3;
      justify-items: flex-start;

      > a {
        display: grid;
        grid-template-columns: 20vw 1fr;
        grid-column-gap: 3;
      }
    }
  `}
`

export const ModalBackground = styled.div`
  ${({ open }: WithOpen) => css`
    height: 100vh;
    position: fixed;
    background: #0000004d;
    width: 100vw;
    top: 0;
    cursor: pointer;
    display: ${open ? 'block' : 'none'};
  `}
`

interface Loading {
  theme: DefaultTheme
  isLoading: boolean
}

export const Loading = styled.div`
  transition: 250ms ease;
  display: flex;
  ${({ theme, isLoading }: Loading) => css`
    opacity: ${isLoading ? '0.5' : '1'};

    div:nth-child(1) {
      margin-right: 3;
      padding-top: 1px;
    }
  `}
`
