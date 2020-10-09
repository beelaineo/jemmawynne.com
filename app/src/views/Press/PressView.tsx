import * as React from 'react'
import { Heading } from '../../components/Text'
import { Column } from '../../components/Layout'
import { PressItem as PressItemType, PressPage } from '../../types'
import { PressItemsContainer } from './styled'
import { PressItem } from './PressItem'
import { definitely } from '../../utils'

const { useState } = React

interface PressViewProps {
  pressPage: PressPage
  pressItems?: PressItemType[]
}

export const PressView = ({ pressPage, pressItems }: PressViewProps) => {
  return (
    <Column py={5} maxWidth="wide">
      <Heading fontWeight={1} textAlign="center" level={1}>
        {pressPage.title || 'Press'}
      </Heading>
      <PressItemsContainer>
        {definitely(pressItems).map((pi) => (
          <PressItem key={pi._id || 'some-key'} pressItem={pi} />
        ))}
      </PressItemsContainer>
    </Column>
  )
}
