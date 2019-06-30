import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: block;
	padding: 10px;
	margin: 10px;
	border: 1px dashed lightblue;
`

const CodeWrapper = styled.details`
	background-color: beige;
	padding: 15px;
`

const Code = styled.pre`
	padding: 5px;
	font-size: 12px;
`

interface Props {
	label?: string
	data?: any
	children?: React.ReactNode
}

export const Placeholder = ({ label, data, children }: Props) => (
	<Wrapper>
		{label && <h3>{label}</h3>}
		{data && Object.keys(data).length && (
			<CodeWrapper>
				<summary>Props:</summary>
				<Code>{JSON.stringify(data, null, 2)}</Code>
			</CodeWrapper>
		)}
		{children ? children : null}
	</Wrapper>
)
