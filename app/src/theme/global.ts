import { createGlobalStyle } from 'styled-components'
import normalized from './normalized'
import fonts from './fonts'

export const GlobalStyles = createGlobalStyle`
	${normalized}
	${fonts}

	* {
		box-sizing: border-box;
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

	button {
		cursor: pointer;
	}
`
