// @flow
import { css, keyframes } from 'styled-components'

const dashLength = '15px'
const dashWidth = '1px'

const moveBorder = keyframes`
0% {
	background-position: left top, right bottom, left bottom, right   top;
 }
 100% {
	background-position: left ${dashLength} top, right ${dashLength} bottom , left bottom ${dashLength} , right   top ${dashLength};
 }

`

export const dashedBorder = css`
	${({ theme, borderActive, borderActiveOnHover }) => {
		const onColor = theme.color.defaults.highlight
		const color = borderActive ? onColor : 'transparent'
		return css`
			background-image: linear-gradient(90deg, ${color} 50%, transparent 50%),
				linear-gradient(90deg, ${color} 50%, transparent 50%), linear-gradient(0deg, ${color} 50%, transparent 50%),
				linear-gradient(0deg, ${color} 50%, transparent 50%);
			background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
			background-size: ${dashLength} ${dashWidth}, ${dashLength} ${dashWidth}, ${dashWidth} ${dashLength},
				${dashWidth} ${dashLength};
			background-position: left top, right bottom, left bottom, right top;

			&:hover {
				background-image: ${borderActiveOnHover
					? `
					linear-gradient(90deg, ${onColor} 50%, transparent 50%),
					linear-gradient(90deg, ${onColor} 50%, transparent 50%), linear-gradient(0deg, ${onColor} 50%, transparent 50%),
					linear-gradient(0deg, ${onColor} 50%, transparent 50%);
				
				`
					: ''};
			}
		`
	}};
	animation: ${moveBorder} 1s linear infinite;
`

export const fixedFullSize = css`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`

export const flexCenter = css`
	display: flex;
	justify-content: flex-center;
	align-items: center;
`
