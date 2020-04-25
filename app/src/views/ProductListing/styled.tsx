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

export const HeaderWrapper = styled.div`
  padding: 6 3;
`
