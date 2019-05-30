import styled, { css, DefaultTheme } from 'styled-components'

interface WrapperProps {
	theme: DefaultTheme
	active?: boolean
}

export const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	min-height: ${(props) => (props.height === 'full' ? '100vh' : 'auto')};
	flex-wrap: ${(props) => props.wrap};
	${(props: WrapperProps) => `
   		${props.theme.mediaQueries.tablet} {
			flex-wrap: ${props.wrapmobile ? props.wrapmobile : props.wrap};
	 	}
	`}
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
			max-width: ${props.mobileWidth === '2' ? '49.5%' : '33.33%'};
			text-align: ${props.mobilealign === 'center' ? 'center' : 'initial'};
		 }
	`}
`

export const FlexFour = styled.div`
	flex: 4;
	${(props: WrapperProps) => `
   		${props.theme.mediaQueries.tablet} {
			flex: 1;
			width: 100%;
			flex-basis: 100%;
	 	}
	`}
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
	${(props: WrapperProps) => `
   		${props.theme.mediaQueries.tablet} {
			max-width: 100%;
	 	}
	`}
`
