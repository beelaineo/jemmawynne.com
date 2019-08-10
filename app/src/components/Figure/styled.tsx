import styled, { css, DefaultTheme } from 'styled-components'
import { Link } from 'react-router-dom'
import { Header5 } from '../Text'

interface WithAsAndTo {
	theme: DefaultTheme
	justify?: string
	as?: string | typeof Link
	to?: string
}

export const FigureWrapper = styled.div`
	${({ theme, justify }: WithAsAndTo) => css`
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		justify-content: ${justify || 'center'};
		color: inherit;
		text-decoration: none;
	`}
`

export const ImageWrapper = styled.div`
	display: flex;

	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const Caption = styled(Header5)`
	${({ theme }) => css`
		margin-top: ${theme.layout.spacing.half};
		min-height: 2.35em;
		color: inherit;
		text-decoration: none;
	`}
`
