import styled, { css, DefaultTheme } from 'styled-components'

export const CarouselContainer = styled.div`
	${({ theme }) => css`
		position: relative;
		height: 100%;
		width: 100%;
		flex-grow: 1;
	`}
`

export const CarouselMask = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`

interface SlidesContainerProps {
	left: number
	theme: DefaultTheme
}

export const SlidesContainer = styled.div`
	${({ theme, left }: SlidesContainerProps) => css`
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		white-space: nowrap;
		left: ${left}px;
		transition: 0.4s cubic-bezier(0.57, 0.06, 0.05, 0.95);

		& > * {
			white-space: initial;
		}
	`}
`

interface WithColumnCount {
	theme: DefaultTheme
	columnCount: number
}

export const SlideContainer = styled.div`
	${({ theme, columnCount }: WithColumnCount) => css`
		height: 100%;
		text-align: center;
		width: calc(
			(100% - (${theme.layout.spacing.double} * ${columnCount - 1})) /
				${columnCount}
		);
		margin-right: ${theme.layout.spacing.double};
		display: inline-flex;
		vertical-align: top;
		align-items: center;

		picture,
		img {
			height: 100%;
		}

		&:last-of-type {
			margin-right: 0;
		}

		${theme.mediaQueries.tablet} {
			width: 50%;
		}
	`}
`

interface CarouselButtonProps {
	theme: DefaultTheme
	visible: boolean
	direction: 'previous' | 'next'
}

const WIDTH = 20
const HEIGHT = WIDTH * 2
const STROKE = 2

export const CarouselButton = styled.button`
	${({ theme, visible, direction }: CarouselButtonProps) => css`
		opacity: ${visible ? '1' : '0'};
		pointer-events: ${visible ? 'auto' : 'none'};
		position: absolute;
		width: ${WIDTH}px;
		z-index: 10;
		height: ${HEIGHT}px;
		top: calc(50% - 30px);
		transition: 0.2s;

		${direction === 'previous'
			? css`
					left: -${theme.layout.spacing.double};
			  `
			: css`
					left: auto;
					right: -${theme.layout.spacing.double};
			  `}
		background: transparent;

		&:before,
		&:after {
			content: '';
			position: absolute;
			${direction === 'previous'
				? css`
						left: 1px;
						transform-origin: ${STROKE / 2}px 50%;
				  `
				: css`
						right: 3px;
						transform-origin: calc(100% - ${STROKE / 2}px) 50%;
				  `};
			top: 50%;
			height: ${STROKE}px;
			width: ${WIDTH}px;
			background-color: black;
		}

		${direction === 'previous'
			? css`
					&:before {
						transform: rotate(-315deg);
					}
					&:after {
						transform: rotate(-45deg);
					}
			  `
			: css`
					&:before {
						transform: rotate(45deg);
					}
					&:after {
						transform: rotate(-45deg);
					}
			  `}

		${theme.mediaQueries.tablet} {
			display: none;
		}
	`}
`
