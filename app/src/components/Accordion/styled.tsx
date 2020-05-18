import styled, { css, DefaultTheme } from '@xstyled/styled-components'

interface WithOpen {
  theme: DefaultTheme
  open: boolean
}

export const ToggleButton = styled.button``

export const Inner = styled.div`
  ${({ open }: WithOpen) => css`
    display: ${open ? 'block' : 'none'};
    padding: 2 0 4;
  `}
`

export const Span = styled.span`
  margin-left: 3;
`

export const Wrapper = styled.div`
  margin: 3 0;
  border-color: body.4;

  & + & {
    border-top: none;
  }
`
