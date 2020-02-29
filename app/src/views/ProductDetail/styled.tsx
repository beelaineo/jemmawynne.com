import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    min-height: 100vh;
    margin: 0 auto;
    font-family: ${theme.font.family.sans};
    padding: ${theme.layout.spacing.triple} 0;
  `}
`

export const ProductDetails = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${theme.layout.spacing.double};

    ${theme.mediaQueries.mobile} {
      grid-template-columns: 1fr;
    }
  `}
`

export const ProductImagesWrapper = styled.div``

export const ProductInfoWrapper = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.layout.spacing.quadruple};
  `}
`

export const Nav = styled.div`
  ${({ theme }) => css`
    width: calc(100% - 4rem);
    max-width: 1200px;
    margin: 0 auto;
    font-family: ${theme.font.family.sans};
  `}
`

export const ProductGalleryWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.layout.spacing.double};
  `}
`

export const ProductGalleryImage = styled.div``

export const ProductGalleryThumbnails = styled.div`
  ${(props) => css`
    flex: 1;
    padding-right: ${props.theme.layout.spacing.single};
    > button {
      padding: ${props.theme.layout.spacing.single};
    }
  `}
`

export const ProductRelatedWrapper = styled.div`
  ${(props) => css`
    background-color: ${props.theme.color.grays[7]};
    padding: ${props.theme.layout.spacing.quadruple};

    ${props.theme.mediaQueries.tablet} {
      > h2 {
        font-size: ${props.theme.font.size.h2};
      }
    }
  `}
`

export const ProductRelatedInner = styled.div`
  ${({ theme }) => css`
    height: 500px;
  `}
`

/*
  NOTE: consider turning this into a "WithMargin" or "Spaced"
  component that we could use like this:

  <Spaced margin="small">...</Spaced>
  <Spaced margin="small" top="double">...</Spaced>

  would be nice to have a prop for padding too
*/

interface NormalizeDivProps {
  theme: DefaultTheme
  width?: string
  top?: string
  align?: string
}

export const NormalizeDiv = styled.div`
  max-width: ${(props: NormalizeDivProps) =>
    props.width === 'half' ? '50%' : '100%'};
  text-align: ${(props: NormalizeDivProps) => props.align || 'inherit'};

  ${(props) => `
   		margin: ${props.theme.layout.spacing.single};
	`}
`

export const ProductOptionWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.layout.spacing.single};
  `}
`

interface BackgroundImageProps {
  imageSrc: string
}

export const BackgroundImage = styled.div`
  background-image: url(${(props: BackgroundImageProps) =>
    props.imageSrc || ''});
  background-size: cover;
  background-position: center;
  a {
    color: transparent;
  }
`

interface ButtonProps {
  theme: DefaultTheme
  disabled?: boolean
  weight?: 'xlight' | 'light' | 'book' | 'normal' | 'semi' | 'strong'
  background?: string
  color?: string
  family?: string
  transform?: string
  href?: string
  width?: string
}

export const Button = styled.button`
  ${(props: ButtonProps) => css`
    background-color: ${props.theme.color.grays[0]};
    color: ${props.theme.color.grays[9]};
    cursor: ${props.disabled ? 'auto' : 'pointer'};
    display: inline-block;
    font-family: ${props.theme.font.family.sans};
    font-weight: ${props.theme.font.weight.strong};
    font-size: ${props.theme.font.size.h5};
    letter-spacing: 0.035em;
    padding: 0.25rem 0.5rem;
    text-align: center;
    text-transform: uppercase;
    transition: 0.2s;
    padding: ${props.theme.layout.spacing.single};
    margin: ${props.theme.layout.spacing.single} 0;
    opacity: ${props.disabled ? 0.3 : 1};
    pointer-events: ${props.disabled ? 'none' : 'auto'};
    max-width: 200px;
    border-radius: 2px;
    width: ${props.width || 'initial'};
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
  ${() => `
		button {
			text-align-last: center;
			height: 2rem;
			border: 1px solid #f1f1f1;
			border-radius: 0;
			-webkit-transition: .2s;
			transition: .2s;
			font-size: .85rem;
			cursor: pointer;
			-moz-appearance: none;
			appearance: none;
			-webkit-appearance: none;
			border: none;
			background: none;
			border-radius: 0;
			border: 1px solid #f1f1f1;
			padding: .5rem .5rem;
			font-family: sans-serif;
		}
		input {
			text-align: center;
			width: 2px;
		}
	`}
`

export const Label = styled.label`
  ${(props) => `
		color: #777;
		color:${props.theme.color.grays[3]};
		display: block;
		margin-bottom: ${props.theme.layout.spacing.single};
		-moz-appearance: none;
		appearance: none;
		-webkit-appearance: none;
		border: none;
		background: none;
		border-radius: 0;
	`}
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
  font-size: ${(props) => props.theme.font.size.h2};
  color: ${(props) => props.theme.color.grays[0]};
  ${(props) => props.theme.mediaQueries.tablet} {
    display: none;
  }
`
