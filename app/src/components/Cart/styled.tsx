import styled, { css, DefaultTheme } from '@xstyled/styled-components'

interface WithUpdating {
  updating: boolean
}
export const Wrapper = styled.div<WithUpdating>`
  ${({ updating }) => css`
    display: grid;
    grid-template-columns: 110px 1fr;
    grid-column-gap: 3;
    padding: 4 0;
    border-top: 1px solid;
    opacity: ${updating ? 0.5 : 1};
    pointer-events: ${updating ? 'none' : 'inherit'};

    & + & {
      border-bottom: 1px solid;
    }
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
  background-color: body.2;
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
  border-bottom: 1px solid currentColor;
  height: 45px;
  background-color: body.2;
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
