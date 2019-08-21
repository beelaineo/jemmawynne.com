import * as React from 'react'
import { Link } from 'react-router-dom'
import { Header2, Header6 } from 'Components/Text'
import { FlexContainer, FlexHalf } from '../../components/Layout/Flex'

export const ProductListingHeader = (props) => {
	let image,
		title = props.collection
	if (image) {
		return (
			<FlexContainer>
				<FlexHalf>{title}</FlexHalf>
				<FlexHalf>{title}</FlexHalf>
			</FlexContainer>
		)
	} else {
		return (
			<FlexContainer marginVertical="triple" center margin="triple">
				<Header2>{title}</Header2>
			</FlexContainer>
		)
	}
}
