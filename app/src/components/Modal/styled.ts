import styled, { css } from '@xstyled/styled-components'

interface WithOpen {
  open: boolean
}

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: dialog;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
`

export const Background = styled.button<WithOpen>`
  ${({ open }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 0;
    margin: 0;
    transition: 0.2s;
    opacity: ${open ? 1 : 0};
    pointer-events: ${open ? 'initial' : 'none'};
  `}
`

export const ModalWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 8 4;
    max-width: calc(100% - ${theme.space[4]}px);
    z-index: 2;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
    background-color: body.2;

    cursor: initial;
  `}
`

export const CloseButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.space[3]}px;
    right: ${theme.space[3]}px;
    background-color: transparent;
    width: 30px;
    height: 30px;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 15px;
      left: 55%;
      width: 110%;
      height: 2px;
      background-color: body.9;
    }

    &:before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  `}
`
