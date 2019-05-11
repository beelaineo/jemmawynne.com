import styled, { css, DefaultTheme } from 'styled-components'

interface TextStyleProps {
	theme: DefaultTheme
	align?: 'left' | 'center' | 'right'
	weight?: 'xlight' | 'light' | 'book' | 'normal' | 'semi' | 'strong'
	color?: string
	family?: string
	transform?: string
}

const commonHeaderStyles = ({ theme, align, transform, weight, color, family }: TextStyleProps) => css`
	font-weight: ${theme.font.weight[weight] || family === 'serif' ? theme.font.weight.normal : theme.font.weight.semi};
	font-family: ${theme.font.family[family] || theme.font.family.sans};
	color: ${theme.color[color] || 'inherit'};
	text-align: ${align || 'inherit'};
	text-transform: ${transform || 'auto'};
	margin: 0.3em 0;
	letter-spacing: 0.03em;

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}
`

export const Header1 = styled.h2`
	${(props: TextStyleProps) => css`
		${commonHeaderStyles(props)}
		font-size: ${props.theme.font.size.h2};
		font-family: ${props.theme.font.family.serif};
		font-weight: ${props.theme.font.weight.normal};
		${props.theme.mediaQueries.tablet} {
			font-size: calc(${props.theme.font.size.h2} * 0.8);
		}
		${props.theme.mediaQueries.phone} {
			font-size: calc(${props.theme.font.size.h2} * 0.7);
		}
	`};
`

export const Header2 = styled.h2`
	${(props: TextStyleProps) => css`
		${commonHeaderStyles(props)};
		font-size: ${props.theme.font.size.h2};
		font-family: ${props.theme.font.family.serif};
		font-weight: ${props.theme.font.weight.normal};
		${props.theme.mediaQueries.tablet} {
			font-size: calc(${props.theme.font.size.h2} * 0.8);
		}
		${props.theme.mediaQueries.phone} {
			font-size: calc(${props.theme.font.size.h2} * 0.7);
		}
	`};
`

export const Header3 = styled.h3`
	${(props: TextStyleProps) => css`
		${commonHeaderStyles(props)};
		font-size: ${props.theme.font.size.h3};
		${props.theme.mediaQueries.tablet} {
			font-size: calc(${props.theme.font.size.h3} * 0.8);
		}
		${props.theme.mediaQueries.phone} {
			font-size: calc(${props.theme.font.size.h3} * 0.7);
		}
	`};
`

export const Header4 = styled.h4`
	${(props: TextStyleProps) => css`
		${commonHeaderStyles(props)};
		font-size: ${props.theme.font.size.h4};

		${props.theme.mediaQueries.tablet} {
			font-size: calc(${props.theme.font.size.h4} * 0.8);
		}
	`};
`

export const Header5 = styled.h5`
	${(props: TextStyleProps) => css`
		${commonHeaderStyles(props)};
		font-size: ${props.theme.font.size.h5};
	`};
`

export const Header6 = styled.h6`
	${(props: TextStyleProps) => css`
		${commonHeaderStyles(props)};
		font-size: ${props.theme.font.size.h6};
	`};
`

export const P = styled.p`
	${({ theme, align }: TextStyleProps) => css`
		text-align: ${align || 'inherit'};
		margin: 0.5em 0;
		font-size: ${theme.font.size.p};

		& + ${P} {
			margin-top: 1em;
		}

		&:first-child {
			margin-top: 0;
		}

		&:last-child {
			margin-bottom: 0;
		}
	`};
`

export const TextAnchor = styled.a`
	${({ theme }) => `
		color: ${theme.color.pink};
	`};
`

export const BlockQuote = styled.blockquote``

const listStyles = css`
	${({ theme }) => `
		margin: ${theme.layout.spacing.single} 0;
		padding-left: 2em;
	`};
`

export const Ol = styled.ol`
	${listStyles};
`

export const Ul = styled.ul`
	${listStyles};
`

export const Li = styled.li`
	& > ${Ol}, & > ${Ul} {
		margin: 0;
	}
`
