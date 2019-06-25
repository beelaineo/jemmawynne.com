import styled, { css, DefaultTheme } from 'styled-components'
import { ContentSection } from '../../types'

export const ImageBlockWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
	`}
`

export const TextBlockWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
	`}
`

interface WithSection {
	theme: DefaultTheme
	section: ContentSection
}

export const Wrapper = styled.div`
	${({ theme, section }: WithSection) => css`
		position: relative;
    display: flex;
    align-items: center;
    justify-content: ${() => {
			switch (section.alignItems) {
				case 'left':
					return 'flex-start'
				case 'right':
					return 'flex-end'
				default:
					return 'center'
			}
		}};
		min-height: 400px;
		padding: ${theme.layout.spacing.double};
		${
			section.backgroundColor
				? `background-color: ${theme.color[section.backgroundColor]};`
				: ''
		}

		${section.textColor ? `color: ${theme.color[section.textColor]};` : ''}

		text-align: ${section.textAlign};

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

    ${TextBlockWrapper},
    ${ImageBlockWrapper} {
      ${
				section.alignItems === 'center' || section.alignItems === undefined
					? `max-width: 800px`
					: `max-width: 400px`
			}
    }

	`}
`
