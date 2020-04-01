import styled, { css, DefaultTheme } from '@xstyled/styled-components'

export const CollectionsMain = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-column-gap: 8;
  padding: 6;
  position: relative;
`
export const CollectionsMenu = styled.div`
  padding-top: 6;
  position: sticky;
  top: 0;
`

export const Hr = styled.hr`
  border: 0;
  border-bottom: 1px solid currentColor;
  color: body.8;
  box-shadow: none;
  margin: 0;
`

export const PLPHeader = styled.div`
  padding: 6;
  background-color: body.3;
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

  &:nth-child(1) {
    grid-column: span 2;
  }
`

export const PLPImage = styled.div`
  ${({ theme }) => css`
    flex-grow: 1;
  `}
`
