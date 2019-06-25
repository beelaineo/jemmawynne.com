import styled, { css, DefaultTheme } from 'styled-components'
import { ContentSection } from '../../types'

interface WithBlock {
	theme: DefaultTheme
	block: ContentSection
}

export const Wrapper = styled.div`
	${({ theme, block }: WithBlock) => css`
		position: relative;
		height: 400px;
		padding: ${theme.layout.spacing.double};
		${block.backgroundColor
			? `background-color: ${theme.color[block.backgroundColor]};`
			: ''}

		${block.textColor
			? `color: ${theme.color[block.textColor]};`
			: ''}

    & > * {
			z-index: 1;
			position: relative;
		}

		& > img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			z-index: 0;
		}
	`}
`
