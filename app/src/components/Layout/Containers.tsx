import styled, { css, DefaultTheme } from '@xstyled/styled-components'

interface ColumnProps {
  theme: DefaultTheme
  width: string
  center?: boolean
}

export const Column = styled.divBox`
  margin: 0 auto;
`

export const TextHeader = styled.div`
  padding: 6;
  display: flex;
  justify-content: center;
  align-items: center;
`
