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
    max-width: xxWide;
    margin: 0 auto;
    padding: 0 6;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 7;

    ${theme.mediaQueries.mobile} {
      max-width: 500px;
      grid-template-columns: 1fr;
      margin: 0 auto;
    }
  `}
`

export const ProductImagesWrapper = styled.div``

export const ProductInfoWrapper = styled.div`
  position: relative;
`

export const DescriptionWrapper = styled.div`
  padding-right: 6;
  max-width: 550px;
  margin-bottom: 7;
`

export const HintFieldsWrapper = styled.div`
  width: 425px;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1;
  grid-gap: 4;
`

export const Nav = styled.div`
  width: calc(100% - 4rem);
  max-width: 1200px;
  margin: 0 auto;
  font-family: sans;
`

export const ProductGalleryWrapper = styled.div`
  ${({ theme }) => css`
    position: sticky;
    top: ${theme.space[4]}px;
  `}
`

export const SwatchWrapper = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr;
  align-items: center;
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

export const ProductOptionsWrapper = styled.div`
  margin-bottom: 7;
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

export const TitleWrapper = styled.div`
  position: relative;
  margin-bottom: 6;
`

export const ShareButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`

interface WithOpen {
  open: boolean
}

export const ShareButtonDropdown = styled.div<WithOpen>`
  ${({ open }) => css`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 2;
    display: ${open ? 'grid' : 'none'};
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2;

    & > * {
      display: inline;

      &:hover {
        color: body.7;
      }
    }
  `}
`
