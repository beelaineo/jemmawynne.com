import styled, { css, DefaultTheme } from 'styled-components'

interface WrapperProps {
	theme: DefaultTheme
	active?: boolean
}

export const Wrapper = styled.div`
	min-height: ${(props) => (props.height === 'full' ? '100vh' : 'auto')};
	position: ${(props) => (props.height === 'full' ? 'relative' : 'initial')};
	top: ${(props) => (props.height === 'full' ? '-15vh' : 'initial')};
	${({ theme }: WrapperProps) => `
		margin: 0 auto;
		font-family: ${theme.font.family.sans};
	`}
`

export const SmallText = styled.div`
	> * {
		${({ theme }: WrapperProps) => `
			font-size: ${theme.font.size.h6};
			color: ${theme.color.dark};
			text-transform: uppercase;
			text-decoration: none;
			letter-spacing: 1px;
			display: block;
			margin: ${theme.layout.spacing.small} 0;
		`}
	}
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
			${(props: WrapperProps) => `
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
	${(props: WrapperProps) => css`
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

/*
  NOTE: consider turning this into a "WithMargin" or "Spaced"
  component that we could use like this:

  <Spaced margin="small">...</Spaced>
  <Spaced margin="small" top="double">...</Spaced>

  would be nice to have a prop for padding too
*/
export const NormalizeDiv = styled.div`
	${(props: WrapperProps) => `
   		 margin: ${props.theme.layout.spacing.small} 0;
	`}
`

export const BackgroundImage = styled.div`
	background-image: url(${(props) => props.imageSrc || ''});
	background-size: cover;
	background-position: center;
	a {
		color: transparent;
	}
`

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
	border-top: ${(props) => (props.border === 'true' ? `2px solid ${props.theme.color.light}` : '')};
	border-bottom: ${(props) => (props.border === 'true' ? `2px solid ${props.theme.color.light}` : '')};
`

export const OverLay = styled.div`
	${(props: WrapperProps) => `
   		padding: ${props.theme.layout.spacing.large};
	`}
	> div {
		height: 10vh;
		width: auto;
		padding: 12vw 2rem 16vw;
		text-align: ${(props) => props.align};
		margin: 0 auto;
		${(props: WrapperProps) => `
			transition: all ${props.theme.layout.transition.slow} linear;
			a {
					color: transparent;
					transition: all ${props.theme.layout.transition.slow} linear;
					text-decoration: none;
				}
				hr {
					width: 120px;
					margin: 24px auto;
					border: 1px solid transparent;
					transition: all ${props.theme.layout.transition.slow} linear;
				}
				&:hover {
					background-color: rgba(0, 0, 0, 0.8);
					color: white;
					a {
						color: white;
					}
					hr {
						border: 1px solid white;
					}
				}
			${props.theme.mediaQueries.tablet} {
				padding: 10vw 2rem 25vw;
				&:hover {
					background-color: transparent;
					color: white;
					a {
						color: white;
					}
					hr {
						border: 1px solid white;
					}
				}
			  }
			  
		`}
	}
`

export const Small = styled.small`
	${(props: WrapperProps) => `
		font-size: ${props.theme.font.size.h6};
		font-family: ${props.theme.font.family.sans};
		font-weight: ${props.theme.font.weight.strong};
		letter-spacing: 1px;
    	line-height: 1.2;
	`}
`

interface ButtonProps {
	theme: DefaultTheme
	disabled?: boolean
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
	${(props: WrapperProps) => `
		text-align-last: center;
		height: 50px;
		border: 1px solid #f1f1f1;
		border-radius: 0;
		-webkit-transition: .2s;
		transition: .2s;
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
	`}
`

export const QuantitySelector = styled.div`
	${(props: WrapperProps) => `
		button {
			text-align-last: center;
			height: 50px;
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
			padding: .5rem 1.2rem;
			font-family: sans-serif;
		}
		input {
			text-align: center;
			width: 109px;
		}
	`}
`

export const Label = styled.label`
	${(props: WrapperProps) => `
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
