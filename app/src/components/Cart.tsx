import styled, { css, DefaultTheme } from '@xstyled/styled-components'

interface CartSidebarProps {
  theme: DefaultTheme
  open?: boolean
}

export const CartSidebar = styled.div`
  ${(props: CartSidebarProps) => css`
    position: fixed;
    right: ${props.open ? '0px' : '-510px'};
    top: 0;
    max-width: 500px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: body.0;
    box-shadow: -5px 0 5px rgba(0, 0, 0, 0.1);
    transition: 350ms ease-out;
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: transparent;
    }
  `}
`

export const CartBottom = styled.div`
  background-color: body.2;
  border-top: 1px solid black;
  position: absolute;
  bottom: 0px;
  left: 0;
  padding: 5;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const CartNav = styled.div`
  position: fixed;
  top: 45vh;
  right: 0;
`

export const CartInner = styled.div`
  flex-grow: 1;
  overflow: scroll;
  padding: 5;
`
