import styled, { css, DefaultTheme } from 'styled-components'

interface WrapperProps {
	theme: DefaultTheme
	active?: boolean
}

export const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: ${(props) => props.wrap};
`

export const FlexHalf = styled.div`
	flex-basis: 48.5%;
	width: 48.5%;
`

export const FlexThree = styled.div`
	flex: 3 3 33%;
	margin: ${(props) => props.margin};
`

export const FlexFour = styled.div`
	flex: 5;
	margin: 10px;
`
