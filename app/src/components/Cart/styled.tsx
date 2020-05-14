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
  padding: 3 2;
  background-color: body.2;
`

interface QuantitySelectorProps {
  theme: DefaultTheme
  width?: string
}

export const QuantitySelector = styled.div`
  ${(props: QuantitySelectorProps) => css`
    input[type='text'] {
      min-width: ${props.width ? props.width : 'initial'};
      max-width: ${props.width ? props.width : 'initial'};
    }
  `}
  button {
    text-align-last: center;
    height: 50px;
    border: 1px solid #f1f1f1;
    border-radius: 0;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    font-size: 0.85rem;
    cursor: pointer;
    -moz-appearance: none;
    appearance: none;
    -webkit-appearance: none;
    border: none;
    background: none;
    border-radius: 0;
    border: 1px solid #f1f1f1;
    padding: 0.5rem 1.2rem;
    font-family: sans-serif;
  }
  input {
    text-align: center;
    width: 109px;
  }
`

export const QuantitySelectorCart = styled(QuantitySelector)`
  margin-top: 4;
  margin-bottom: 2;
  button {
    text-align-last: center;
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
  }
  input {
    text-align: center;
    width: 2px;
  }
`
