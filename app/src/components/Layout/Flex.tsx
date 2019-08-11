import styled, { css, DefaultTheme } from 'styled-components'

interface WrapperProps {
	theme: DefaultTheme
	active?: boolean
	marginVertical?: string
}

export const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: ${(props) => props.wrap};
	margin: ${(props) => props.theme.layout.spacing[props.margin]};
	${({ theme, marginVertical }: WrapperProps) => `
		margin-top: ${theme.layout.spacing[marginVertical] || 'initial'} ;
	`}
	.visible {
		opacity: 1;
		transition: 250ms ease-in;
	}
	.invisible {
		opacity: 0;
		transition: 250ms ease-in;
	}
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
	flex: 5;
`

export const FlexSix = styled.div`
	flex: 6;
	margin: 10px;
	${({ theme, marginVertical }: WrapperProps) => `
		margin-top: ${theme.layout.spacing[marginVertical] || 'initial'} ;
	`}
`
