import styled, { css, DefaultTheme } from 'styled-components'

interface WithOpen {
	theme: DefaultTheme
	open: boolean
}

export const ToggleButton = styled.button`
	${({ theme }) => css`
		font-size: ${(props) => props.theme.font.size.h6};
		text-transform: uppercase;
		letter-spacing: 1px;
		color: ${(props) => props.theme.color.dark};
	`}
`

export const Inner = styled.div`
	${({ theme, open }: WithOpen) => css`
		${open
			? css`
					visibility: visible;
					height: auto;
			  `
			: css`
					visibility: hidden;
					height: 0;
			  `}
	`}
`

export const Wrapper = styled.div`
	${({ theme }) => css`
		padding: ${theme.layout.spacing.small};
		margin: ${theme.layout.spacing.singleHalf} 0;
		border-top: 2px solid ${theme.color.light};
		border-bottom: 2px solid ${theme.color.light};
	`}
`
