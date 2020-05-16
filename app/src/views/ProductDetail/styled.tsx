import styled, { css } from '@xstyled/styled-components'

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
      grid-template-columns: 1fr;
      margin: 0 auto;
    }
  `}
`

export const ProductImagesWrapper = styled.div``

export const ProductInfoWrapper = styled.div``

export const DescriptionWrapper = styled.div`
  padding-right: 6;
  max-width: 550px;
`

export const Nav = styled.div`
  width: calc(100% - 4rem);
  max-width: 1200px;
  margin: 0 auto;
  font-family: sans;
`

export const ProductGalleryWrapper = styled.div``

export const SwatchWrapper = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr;
`

export const SwatchLabelWrapper = styled.div`
  display: flex;
  > label {
    margin-right: 2;
  }
`

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
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
  height: 500px;
`

export const ProductOptionWrapper = styled.div`
  margin-top: 3;
  display: flex;
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
