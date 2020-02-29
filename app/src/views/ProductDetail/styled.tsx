import styled, { css, DefaultTheme } from '@xstyled/styled-components'

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
  font-family: sans;
  padding: 6 0;
`

export const ProductDetails = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5;

    ${theme.mediaQueries.mobile} {
      grid-template-columns: 1fr;
    }
  `}
`

export const ProductImagesWrapper = styled.div``

export const ProductInfoWrapper = styled.div`
  padding-top: 8;
`

export const Nav = styled.div`
  width: calc(100% - 4rem);
  max-width: 1200px;
  margin: 0 auto;
  font-family: sans;
`

export const ProductGalleryWrapper = styled.div`
  margin-bottom: 6;
`

export const ProductGalleryImage = styled.div``

export const ProductGalleryThumbnails = styled.div`
  flex: 1;
  padding-right: 3;
  > button {
    padding: 3;
  }
`

export const ProductRelatedWrapper = styled.div`
  background-color: body.7;
  padding: 8;
`

export const ProductRelatedInner = styled.div`
  ${({ theme }) => css`
    height: 500px;
  `}
`

export const NormalizeDiv = styled.div`
  margin: 3;
`

export const ProductOptionWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 3;
  `}
`

interface BackgroundImageProps {
  imageSrc: string
}

export const BackgroundImage = styled.div`
  ${({ imageSrc }: BackgroundImageProps) => css`
    background-image: url(${(props: BackgroundImageProps) =>
      props.imageSrc || ''});
    background-size: cover;
    background-position: center;
    a {
      color: transparent;
    }
  `}
`

interface ButtonProps {
  theme: DefaultTheme
  isDisabled?: boolean
}

export const Button = styled.button`
  ${({ isDisabled }: ButtonProps) => css`
    background-color: body.0;
    color: body.9;
    cursor: ${isDisabled ? 'auto' : 'pointer'};
    display: inline-block;
    font-family: sans;
    font-weight: 4;
    font-size: 5;
    letter-spacing: 0.035em;
    padding: 0.25rem 0.5rem;
    text-align: center;
    text-transform: uppercase;
    transition: 0.2s;
    padding: 3;
    margin: 3 0;
    opacity: ${isDisabled ? 0.3 : 1};
    pointer-events: ${isDisabled ? 'none' : 'auto'};
    max-width: 200px;
    border-radius: 2px;
  `}
`

export const ButtonPrimary = styled(Button)``

export const Select = styled.select`
  text-align-last: center;
  border: 1px solid #f1f1f1;
  border-radius: 0;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  font-size: 1rem;
  cursor: pointer;
  -moz-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  background: none;
  border-radius: 0;
  border: 1px solid #f1f1f1;
  padding: 12px;
  font-family: sans-serif;
  width: 150px;
  option {
    font-family: sans-serif;
  }
`
interface QuantitySelector {
  theme: DefaultTheme
  width?: string
}

export const QuantitySelector = styled.div`
  ${(props: QuantitySelector) => css`
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
  button {
    text-align-last: center;
    height: 2rem;
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
    padding: 0.5rem 0.5rem;
    font-family: sans-serif;
  }
  input {
    text-align: center;
    width: 2px;
  }
`

export const Label = styled.label`
  display: block;
  margin-bottom: 4;
  -moz-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  background: none;
  border-radius: 0;
`

export const ArrowDown = styled.div`
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  position: relative;
  top: 17vh;
  font-size: 2;
  color: body.0;
  ${(props) => props.theme.mediaQueries.tablet} {
    display: none;
  }
`
