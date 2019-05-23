import styled, { css, DefaultTheme } from 'styled-components'

interface WrapperProps {
	theme: DefaultTheme
	active?: boolean
}

export const Wrapper = styled.div`
	min-height: ${(props) => (props.height === 'full' ? '100vh' : 'auto')};
	position: ${(props) => (props.height === 'full' ? 'relative' : 'initial')};
	top: ${(props) => (props.height === 'full' ? '-3.5rem' : 'initial')};
	${({ theme }: WrapperProps) => `
		margin: 0 auto;
		font-family: ${theme.font.family.sans};
	
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
	display: flex;
	flex-direction: row-reverse;
	position: relative;
	div[data-testid='current-image'] {
		> img {
			min-height: 100vh;
			max-width: max-content;
		}
	}
	div[data-testid='thumbnails'] {
		position: absolute;
		max-width: 100px;
		bottom: 30px;
		display: flex;
		left: 0;
		right: 0;
		margin: 0 auto;
		button {
			height: 8px;
			z-index: 2;
			background-color: black;
			width: 8px;
			border-radius: 5px;
			margin: 2px;
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
		margin: ${props.theme.layout.spacing.large};
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
		min-width: 8rem;
		min-height: 2.5rem;
		letter-spacing: 0.035em;
		padding: 0.25rem 0.5rem;
		text-align: center;
		text-transform: uppercase;
		transition: 0.2s;
		padding: ${props.theme.layout.spacing.small};
		margin: ${props.theme.layout.spacing.small} 0;
		opacity: ${props.disabled ? 0.3 : 1};
		pointer-events: ${props.disabled ? 'none' : 'auto'};
	`}
`

export const ButtonPrimary = styled(Button)`
	${(props: WrapperProps) => `
		&:hover {
			background-color:${props.theme.color.dark};
		}
	`}
`

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
