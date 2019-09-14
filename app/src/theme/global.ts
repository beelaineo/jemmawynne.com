import { createGlobalStyle } from 'styled-components'
import normalized from './normalized'
import fontFaces from './fontFaces'

export const GlobalStyles = createGlobalStyle`

	${normalized}
	${fontFaces}

	* {
		box-sizing: border-box;
	}

	body {
		font-family: ${({ theme }) => theme.font.family.serif};
		overflow-x: hidden;
	}

	button, input, select, option, textarea {
		background: white;
		font-weight: 300;
		border: none;
		outline: none;
		line-height: normal;
		padding: 0;
		border-radius: 0;
	}

	img {
		max-width: 100%;
	}

	button {
		cursor: pointer;
	}
`
