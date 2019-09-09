import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
	${({ theme }) => css`
		position: fixed;
		z-index: calc(${theme.layout.z.navigation} - 1);
		top: ${theme.layout.navHeight};
		left: 0;
		width: 100%;
		height: calc(100vh - ${theme.layout.navHeight});
		overflow: scroll;
		background-color: white;
		text-align: center;
	`}
`

export const CurrentSearchTerm = styled.span`
	${({ theme }) => css`
		color: ${theme.color.semiDark};
	`}
`
