import styled, { css, DefaultTheme } from 'styled-components'

export const ProductThumb = styled.div`
	${({ theme }) => css`
		text-align: left;
		width: 100%;
		a {
			text-decoration: none;
			&:hover {
				text-decoration: underline;
				color: ${theme.color.grays[0]};
			}
		}
	`}
`

export const ProductInfo = styled.div`
	${({ theme }) => css`
		color: black;
		display: grid;
		grid-template-columns: 3fr 1fr;
		padding: ${theme.layout.spacing.single} 0;
		h6 {
			text-align: right;
		}
	`}
`
