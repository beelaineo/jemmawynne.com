import styled, { css, DefaultTheme } from 'styled-components'

export const OverLay = styled.div`
	${(props) => `
   		padding: ${props.theme.layout.spacing.large};
	`}
	> div {
		height: 10vh;
		width: auto;
		padding: 12vw 2rem 16vw;
		margin: 0 auto;
		text-align: center;
		${(props) => `
			transition: all ${props.theme.transition.slow} linear;
			a {
					color: transparent;
					transition: all ${props.theme.transition.slow} linear;
					text-decoration: none;
				}
				hr {
					width: 120px;
					margin: 24px auto;
					border: 1px solid transparent;
					transition: all ${props.theme.transition.slow} linear;
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

export const ProductGrid = styled.div`
	${({ theme }) => css`
		margin: 0 auto;
		max-width: 900px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-column-gap: ${theme.layout.spacing.single};
		grid-row-gap: ${theme.layout.spacing.single};
	`}
`

interface BackgroundImageProps {
	theme: DefaultTheme
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
