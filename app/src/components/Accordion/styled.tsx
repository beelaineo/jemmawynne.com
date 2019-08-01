import styled, { css, DefaultTheme } from 'styled-components'

interface WithOpen {
	theme: DefaultTheme
	open: boolean
}

export const ToggleButton = styled.button`
	${({ theme }) => css`
		font-size: ${theme.font.size.h6};
		font-weight: ${theme.font.weight.semi};
		text-transform: uppercase;
		letter-spacing: 1px;
		color: ${(props) => props.theme.color.dark};
	`}
`

export const Inner = styled.div`
	${({ theme, open }: WithOpen) => css`
		display: ${open ? 'block' : 'none'};
		padding: ${theme.layout.spacing.single} 0;
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
