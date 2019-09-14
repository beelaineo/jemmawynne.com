import styled, { css, DefaultTheme } from 'styled-components'

export const CheckoutItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin: ${theme.layout.spacing.small};
  `}
`

export const CheckoutItemImage = styled.img`
  flex: 1 1 33%;
  max-width: 33%;
`

export const CheckoutItemInfo = styled.div`
  ${({ theme }) => css`
    margin: ${theme.layout.spacing.single};
    flex: 6;
  `}
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
