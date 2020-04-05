import { createGlobalStyle } from '@xstyled/styled-components'
import normalized from './normalized'

export const GlobalStyles = createGlobalStyle`

	${normalized}

	* {
		box-sizing: border-box;
	}

	body {
    font-family: serif;
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

  svg {
    width: 100%;
    fill: currentColor;
  }
	img {
		max-width: 100%;
	}

	button {
		cursor: pointer;
	}

  a {
    text-decoration: none;
    color: inherit;
  }
`
