import * as React from 'react'
import styled, { css, DefaultTheme } from '@xstyled/styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: block;
    position: relative;
    z-index: nav;
    font-family: sans;
    box-shadow: 0 1px 9px 0px rgba(0, 0, 0, 0.2);
  `}
`

export const NavTop = styled.div`
  ${({ theme }) => css`
    padding-top: 5;
    margin-bottom: 5;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  `}
`

export const Inner = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    padding: 0 6 3;
    width: 100%;
    margin: 0 auto;
  `}
`

interface WithReady {
  theme: DefaultTheme
  ready: boolean
  align?: string
}

export const NavSection = styled.div`
  ${({ ready }: WithReady) => css`
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
  `}
`

export const NavTools = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 28px;
  right: 24px;
`

export const Logo = styled.img`
  width: 100%;
  max-width: 310px;
`

interface CartButtonProps {
  disabled?: boolean
}

export const CartCount = styled.div`
  font-size: 6;
  font-weight: 3;
  width: 18px;
  height: 18px;
  font-family: sans;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid currentColor;
  background-color: body.0;
  position: absolute;
  top: -4px;
  right: -11px;
`

export const CartButton = styled.button`
  ${({ disabled }) => css`
    position: relative;
    opacity: ${disabled ? '0.6' : '1'};
    pointer-events: ${disabled ? 'none' : 'inherit'};
    display: flex;
    font-size: 2;
    align-items: center;
  `}
`

export const NavHeader = styled.div`
  border-bottom: 1px solid transparent;
  font-weight: 2;
  letter-spacing: 0.08em;
  padding-bottom: 1;
  transition: 0.2s;
`

interface NavHeaderWrapperProps {
  active?: boolean
}

export const NavHeaderWrapper = styled.div`
  ${({ active }: NavHeaderWrapperProps) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: default;
    align-items: center;
    margin: 0 2em;

    &:focus > ${NavHeader}, &:hover > ${NavHeader} {
      border-bottom-color: black;
    }
    ${active
      ? css`
          & > ${NavHeader} {
            border-bottom-color: black;
          }
        `
      : ''}
  `}
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
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
    z-index: calc(${theme.zIndices.nav} - 1);
    top: 100%;
    left: 0;
    width: 100%;
    min-height: 200px;
    background-color: white;
    transition: 0.2s;
  `}
`

interface WithVisible {
  theme: DefaultTheme
  active: Boolean
}

export const SubMenuColumns = styled.div`
  ${({ theme, active }: WithVisible) => css`
    display: ${active ? 'grid' : 'none'};
    margin: 0 auto;
    max-width: xWide;
    grid-template-columns: repeat(5, 1fr);
    padding: 3 5;
    grid-column-gap: 3;
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
