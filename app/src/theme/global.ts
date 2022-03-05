import { css, createGlobalStyle } from '@xstyled/styled-components'
import normalized from './normalized'

export const GlobalStyles = createGlobalStyle`

	${normalized}

	* {
		box-sizing: border-box;
	}

  button {
    color: inherit;
  }

  html, body, #__next, main {
    height: 100%;
  }

  main {
    height: 100%;
    overflow: scroll;
  }

	body {
    font-family: serif;
		overflow-x: hidden;
	}

  pre {
    margin: 0;
  }

  h1 {font-size: 1; }
  h2 { font-size: 2; }
  h3 { font-size: 3; }
  p, h4 { font-size: 4; }
  h5, label { font-size: 5; }
  h6 { font-size: 6; }

  ${({ theme }) => css`
    ${theme.mediaQueries.mobile} {
      h1 {
        font-size: ${theme.mobileFontSizes[1]};
      }
      h2 {
        font-size: ${theme.mobileFontSizes[2]};
      }
      h3 {
        font-size: ${theme.mobileFontSizes[3]};
      }
      p,
      h4 {
        font-size: ${theme.mobileFontSizes[4]};
      }
      h5,
      label {
        font-size: ${theme.mobileFontSizes[5]};
      }
      h6 {
        font-size: ${theme.mobileFontSizes[6]};
      }
    }
  `}


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
