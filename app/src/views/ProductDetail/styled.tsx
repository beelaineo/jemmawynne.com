import styled, { css, DefaultTheme } from '@xstyled/styled-components'

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
  font-family: sans;
  padding: 6 0 0;
`

export const ProductDetails = styled.div`
  ${({ theme }) => css`
    max-width: xWide;
    margin: 0 auto;
    padding: 0 6;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5;

    ${theme.mediaQueries.mobile} {
      max-width: 500px;
      margin: 0 auto;
      grid-template-columns: 1fr;
    }
  `}
`

export const ProductImagesWrapper = styled.div``

export const ProductInfoWrapper = styled.div`
  ${({ theme }) => css`
    padding-top: 8;

    ${theme.mediaQueries.tablet} {
      padding-top: 6;
    }

    ${theme.mediaQueries.mobile} {
      padding-top: 3;
    }
  `}
`

export const Nav = styled.div`
  width: calc(100% - 4rem);
  max-width: 1200px;
  margin: 0 auto;
  font-family: sans;
`

export const ProductGalleryWrapper = styled.div`
  ${({ theme }) => css``}
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
