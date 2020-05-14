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
