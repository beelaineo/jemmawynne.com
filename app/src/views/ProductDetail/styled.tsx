import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
	${({ theme }) => css`
		position: relative;
		min-height: 100vh;
		margin: 0 auto;
		font-family: ${theme.font.family.sans};
	`}
`

export const ProductDetails = styled.div`
	${({ theme }) => css`
		justify-content: space-between;
		display: flex;
		${theme.mediaQueries.mobile} {
			flex-wrap: wrap;
		}
	`}
`

export const ProductImagesWrapper = styled.div`
	${({ theme }) => css`
		flex: 6;
		max-width: 70%;
		${theme.mediaQueries.tablet} {
			max-width: 100%;
		}
	`}
`

export const ProductInfoWrapper = styled.div`
	${({ theme }) => css`
		flex: 4;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: ${theme.layout.spacing.large};
		${theme.mediaQueries.tablet} {
			flex: 1;
			width: 100%;
			flex-basis: 100%;
			text-align: center;
		}
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
	line-height: 0;
	display: flex;
	flex-direction: row-reverse;
	position: relative;
	div[data-testid='current-image'] {
		> img {
			min-height: 100vh;
			max-width: max-content;
			${(props) => `
				${props.theme.mediaQueries.tablet} {
					min-height: initial;
					max-width: 100vw;
				}
			`}
		}
	}
	div[data-testid='thumbnails'] {
		position: absolute;
		max-width: 100px;
		bottom: 60px;
		display: flex;
		left: 0;
		right: 0;
		margin: 0 auto;
		button {
			height: 10px;
			z-index: 2;
			background-color: black;
			width: 10px;
			border-radius: 5px;
			margin: 2px 6px;
		}
		img {
			display: none;
		}
	}
`

export const ProductGalleryImage = styled.div`
	flex: 4;
`

export const ProductGalleryThumbnails = styled.div`
	${(props) => css`
		flex: 1;
		padding-right: ${props.theme.layout.spacing.small};
		> button {
			padding: ${props.theme.layout.spacing.small};
		}
	`}
`

export const ProductRelatedWrapper = styled.div`
	${(props) => css`
		background-color: ${props.theme.color.gray};
		padding: ${props.theme.layout.spacing.large};
		> div > div {
			margin: ${props.theme.layout.spacing.small};
			h4,
			a {
				text-decoration: none;
				font-family: ${props.theme.font.family.serif};
			}
		}
		> h2 {
			font-size: ${props.theme.font.size.h1};
			color: black;
		}
		${props.theme.mediaQueries.tablet} {
			> h2 {
				font-size: ${props.theme.font.size.h2};
			}
		}
	`}
`

export const ProductRelatedInner = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-column-gap: ${theme.layout.spacing.single};
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
}

export const NormalizeDiv = styled.div`
	max-width: ${(props: NormalizeDivProps) => (props.width === 'half' ? '50%' : '100%')};
	${(props) => `
   		margin: ${props.theme.layout.spacing.small};
	`}
`

interface BackgroundImageProps {
	imageSrc: string
}

export const BackgroundImage = styled.div`
	background-image: url(${(props: BackgroundImageProps) => props.imageSrc || ''});
	background-size: cover;
	background-position: center;
	a {
		color: transparent;
	}
`

interface AccordionProps {
	theme: DefaultTheme
	border: boolean
}

export const Accordion = styled.div`
	max-width: 50%;
	p {
		transition: height 250ms linear;
		font-size: ${(props) => props.theme.font.size.h5};
		color: ${(props) => props.theme.color.dark};
		font-weight: ${(props) => props.theme.font.weight.strong};
	}
	button {
		font-size: ${(props) => props.theme.font.size.h6};
		text-transform: uppercase;
		letter-spacing: 1px;
		color: ${(props) => props.theme.color.dark};
	}
	${(props) =>
		props.className === 'open'
			? `
		> p{
			visibility: visible;
			height: auto;
			
		}
	   
	`
			: `
		> p{
			visibility: hidden;
			height: 0;
			margin: 0;
		}
     `}
	padding: ${(props) => props.theme.layout.spacing.small};
	margin: ${(props) => props.theme.layout.spacing.singleHalf} 0;
	border-top: ${(props: AccordionProps) => (props.border === true ? `2px solid ${props.theme.color.light}` : '')};
	border-bottom: ${(props: AccordionProps) => (props.border === true ? `2px solid ${props.theme.color.light}` : '')};
`

interface ButtonProps {
	theme: DefaultTheme
	disabled?: boolean
	weight?: 'xlight' | 'light' | 'book' | 'normal' | 'semi' | 'strong'
	background?: string
	color?: string
	family?: string
	transform?: string
}

export const Button = styled.button`
	${(props: ButtonProps) => css`
		background-color: ${props.theme.color.dark};
		color: ${props.theme.color.light};
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
		padding: ${props.theme.layout.spacing.small};
		margin: ${props.theme.layout.spacing.small} 0;
		opacity: ${props.disabled ? 0.3 : 1};
		pointer-events: ${props.disabled ? 'none' : 'auto'};
		max-width: 200px;
		border-radius: 2px;
	`}
`

export const ButtonPrimary = styled(Button)``

export const Select = styled.select`
	text-align-last: center;
	height: 50px;
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
	padding: 1rem 2rem;
	font-family: sans-serif;
	option {
		font-family: sans-serif;
	}
`

export const QuantitySelector = styled.div`
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
		color:${props.theme.color.lightGrayBody};
		display: block;
		margin-bottom: ${props.theme.layout.spacing.small};
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
	color: ${(props) => props.theme.color.dark};
	${(props) => props.theme.mediaQueries.tablet} {
		display: none;
	}
`
