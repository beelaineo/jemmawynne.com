import styled, { DefaultTheme } from 'styled-components'

interface WrapperProps {
	theme: DefaultTheme
	active?: boolean
}

export const Wrapper = styled.div`
	width: calc(100% - 4rem);
	max-width: 1200px;
	margin: 0 auto;
`

export const ProductGalleryWrapper = styled.div`
	${(props: WrapperProps) => `
		display: flex;
		flex-direction: row-reverse;
		div[data-testid="current-image"] {
			flex:4;
		}
		div[data-testid="thumbnails"] {
			flex:1;
			padding-right: ${props.theme.layout.spacing.small};
			> button {
				padding: ${props.theme.layout.spacing.small};
			}
		}
	`}
`

export const ProductRelatedWrapper = styled.div`
	${(props: WrapperProps) => `
		margin: ${props.theme.layout.spacing.large};
		h2 {
			text-transform: uppercase;
			color: ${props.theme.color.lightGrayBody};
			letter-spacing: .035rem;
		}
		.product__related__item {
			h4 {
				text-align: center;
				font-size: ${props.theme.font.size.h5};
				margin: ${props.theme.layout.spacing.small};
				font-weight: ${props.theme.font.weight.xlight};
			}
		}
	`}
`

export const NormalizeDiv = styled.div`
	${(props: WrapperProps) => `
   		margin: ${props.theme.layout.spacing.small};
	`}
`

export const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

export const FlexHalf = styled.div`
	flex-basis: 48.5%;
	width: 48.5%;
`

export const FlexFour = styled.div`
	flex: 5;
	margin: 10px;
`

export const Button = styled.button`
	${(props: WrapperProps) => `
	    background-color: ${props.theme.color.semiDark};
		border: 1px solid #4b4b4b;
		color: #fff;
		cursor: pointer;
		display: inline-block;
		font-family: serif;
		font-size: ${props.theme.font.size.h5};
		min-width: 13rem;
		min-height: 3.5rem;
		letter-spacing: .035em;
		padding: .25rem 1rem;
		text-align: center;
		text-transform: uppercase;
		-webkit-transition: .2s;
		transition: .2s;
		padding: ${props.theme.layout.spacing.small};
		margin: ${props.theme.layout.spacing.small};
		   
	`}
`

export const ButtonPrimary = styled(Button)`
	${(props: WrapperProps) => `
		&:hover {
			background-color:${props.theme.color.dark};
		}
	`}
`

export const BodyText = styled.p`
	${(props: WrapperProps) => `
		color:${props.theme.color.lightGrayBody};
		font-size: ${props.theme.font.size.h4};
		letter-spacing: .12px;
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

// HEADINGS

export const LightHeadingH1 = styled.h2`
	${(props: WrapperProps) => `
		font-weight: 100;
		color: ${props.theme.color.semiDark};
	`}
`

export const LightHeadingH2 = styled.h2`
	${(props: WrapperProps) => `
		font-weight: 100;
		color: ${props.theme.color.semiDark};
		color: ${(props) => (props.primary ? 'red' : 'blue')};
	`}
`

export const LightHeadingH2Center = styled(LightHeadingH2)`
	${(props: WrapperProps) => `
		text-align: center;
		width: 100%;
	`}
`

export const LightHeadingH3 = styled.h3`
	${(props: WrapperProps) => `
		font-weight: 100;
		color: ${props.theme.color.semiDark};
		font-size: ${props.theme.font.size.h4};
	`}
`
