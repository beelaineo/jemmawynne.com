import styled, { css, DefaultTheme } from 'styled-components'

interface WrapperProps {
	theme: DefaultTheme
	active?: boolean
}

export const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: ${(props) => props.wrap};
	min-height: ${(props) => (props.height === 'full' ? '100vh' : 'auto')};
`

export const FlexHalf = styled.div`
	flex-basis: 48.5%;
	width: 48.5%;
`

export const FlexThree = styled.div`
	flex: 1 1 33%;
	max-width: 33.33%;
	margin: ${(props) => props.margin};
	${(props: WrapperProps) => `
   		${props.theme.mediaQueries.tablet} {
			max-width: ${props.mobileWidth === '2' ? '49.65%' : '33.33%'};
	 	}
	`}
`

export const FlexFour = styled.div`
	flex: 4;
	${(props) =>
		props.container === 'true'
			? `
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: ${props.theme.layout.spacing.large};
	`
			: 'auto'}
`

export const FlexSix = styled.div`
	flex: 6;
	max-width: 70%;
`
