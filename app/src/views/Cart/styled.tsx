import styled, { css, DefaultTheme } from '@xstyled/styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-column-gap: 3;
  margin-bottom: 4;
`

export const CheckoutItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3;
`

export const CheckoutItemImage = styled.img`
  flex: 1 1 33%;
  max-width: 33%;
`

export const CheckoutItemInfo = styled.div`
  margin: 3;
  flex: 6;
`

export const CheckoutPrice = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    flex-basis: 50%;
  }
`

export const RemoveCart = styled.div`
  &:hover {
    cursor: pointer;
  }
`
