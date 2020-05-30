import styled, { css, DefaultTheme } from '@xstyled/styled-components'

interface WithOpen {
  theme: DefaultTheme
  open: boolean
}

export const ToggleButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Inner = styled.div`
  ${({ open }: WithOpen) => css`
    display: ${open ? 'block' : 'none'};
    padding: 2 0 4;
  `}
`

interface PlusMinusProps {
  open: boolean
}

export const PlusMinus = styled.span<PlusMinusProps>`
  ${({ open }) => css`
    width: 9px;
    height: 9px;
    margin-left: 1em;
    display: block;
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      background-color: body.8;
    }

    &:after {
      left: 4px;
      top: 0px;
      height: 100%;
      width: 1px;
      display: ${open ? 'none' : 'block'};
    }

    &:before {
      left: 0;
      top: 4px;
      width: 100%;
      height: 1px;
    }
  `}
`

export const Wrapper = styled.div`
  margin: 3 0;
  border-color: body.4;

  & + & {
    border-top: none;
  }
`
