import styled, { css, DefaultTheme } from 'styled-components'

export const GalleryWrapper = styled.div`
	position: relative;
`

export const MainImageWrapper = styled.div`
	${({ theme }) => css`
		margin-bottom: ${theme.layout.spacing.single};
	`}
`

export const Thumbnails = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: ${theme.layout.spacing.single};
	`}
`
