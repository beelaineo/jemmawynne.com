import * as React from 'react'
import { Header2 } from 'Components/Text'
import { FlexContainer, FlexHalf } from '../../components/Layout/Flex'

export const ProductListingHeader = (props) => {
  let { image, title, description } = props.collection
  if (image) {
    return (
      <FlexContainer
        marginVertical="triple"
        height="400px"
        padding="small"
        margin="small"
        center
      >
        <FlexHalf vertical="center" padding="0 60px">
          <Header2>{title}</Header2>
          <p>{description}</p>
        </FlexHalf>
        <FlexHalf
          style={{
            backgroundImage: `url(${image.originalSrc})`,
            backgroundSize: 'cover',
          }}
        ></FlexHalf>
      </FlexContainer>
    )
  } else {
    return (
      <FlexContainer
        center
        text="center"
        align="center"
        padding="small"
        vertical="center"
        maxwidth="600px"
        marginVertical="triple"
        margin="triple"
      >
        <Header2>{title}</Header2>
        <p>{description}</p>
      </FlexContainer>
    )
  }
}
