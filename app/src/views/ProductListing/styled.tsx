import styled, { css, DefaultTheme } from 'styled-components'

export const PLPHeader = styled.div`
  padding: 6;
  background-color: body.5;
  box-shadow: 0 -9px 9px -6px rgba(0, 0, 0, 0.2) inset;
`

export const PLPHeaderInner = styled.div`
  display: grid;
  max-width: 900px;
  margin: 0 auto;
  grid-gap: 6;
  grid-template-columns: 1fr 1fr;
`

interface PLPTextProps {
  theme: DefaultTheme
  align?: string
}

export const PLPText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const PLPImage = styled.div`
  ${({ theme }) => css`
    flex-grow: 1;
  `}
`
