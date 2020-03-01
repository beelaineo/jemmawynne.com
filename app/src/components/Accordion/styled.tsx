import styled, { css, DefaultTheme } from '@xstyled/styled-components'

interface WithOpen {
  theme: DefaultTheme
  open: boolean
}

export const ToggleButton = styled.button`
  font-size: 6;
  font-weight: 5;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: body0;
`

export const Inner = styled.div`
  ${({ open }: WithOpen) => css`
    display: ${open ? 'block' : 'none'};
    padding: 3 0;
  `}
`

export const Span = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    position: relative;
    top: -1.5px;
    margin-left: 3;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 3;
    margin: 4 0;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: body.4;

    & + & {
      border-top: none;
    }
  `}
`
