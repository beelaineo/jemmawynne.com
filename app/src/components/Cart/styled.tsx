import styled, { css, DefaultTheme } from '@xstyled/styled-components'

interface WithUpdating {
  updating: boolean
}
export const Wrapper = styled.div<WithUpdating>`
  ${({ theme, updating }) => css`
    display: grid;
    grid-template-columns: 110px 1fr;
    grid-column-gap: ${theme.space[3]}px;
    opacity: ${updating ? 0.5 : 1};
    pointer-events: ${updating ? 'none' : 'inherit'};
  `}
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

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 15px;
  font-size: 21px;
  background-color: transparent;
`

export const CartMessage = styled.div`
  margin: 0 auto 4;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  span {
    background-color: highlight;
    margin-bottom: 2;
    padding: 1 2;
    border-radius: 2px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    height: 45px;
    background-color: ${theme.colors.body[2]};
  `}
`

export const LineItemsWrapper = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid;
    border-bottom: 1px solid;
    margin: 4 0;
    padding: 6 0;
    display: grid;
    grid-template-columns: 1;
    grid-gap: ${theme.space[6]}px;

    ${theme.mediaQueries.mobile} {
      padding: 5 0;
      grid-gap: ${theme.space[5]}px;
    }
  `}
`

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SubtotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

interface QuantitySelectorProps {
  theme: DefaultTheme
  width?: string
}

export const RemoveButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

export const QuantityButton = styled.button`
  text-align-last: center;
  border: 1px solid #f1f1f1;
  height: 1em;
  width: 1em;
  font-size: 6;
  border: none;
  transition: 0.2s;
  cursor: pointer;
  appearance: none;
  background: none;
  border-radius: 0;
  margin: 0 2;
  padding: 0;
  font-family: sans;
`

export const QuantitySelectorCart = styled.div`
  position: relative;
  margin-top: 4;
  margin-bottom: 2;
  input {
    text-align: center;
    width: 2px;
  }
`
