import * as React from 'react'
import { Heading } from '../../components/Text'
import { Column } from '../../components/Layout'
import { PressItem as PressItemType, PressPage } from '../../types'
import { PressItemsContainer, FilterButton, FilterButtons } from './styled'
import { PressItem } from './PressItem'
import { definitely } from '../../utils'

const { useState } = React

interface PressViewProps {
  pressPage: PressPage
  pressItems?: PressItemType[]
}

export const PressView = ({ pressPage, pressItems }: PressViewProps) => {
  const [filter, setFilterState] = useState('all')

  const setFilter = (type: string) => () => setFilterState(type)

  return (
    <Column py={5} maxWidth="wide">
      <Heading textAlign="center" level={1}>
        {pressPage.title || 'Press'}
      </Heading>
      <FilterButtons>
        <FilterButton isActive={filter === 'all'} onClick={setFilter('all')}>
          View All
        </FilterButton>
        <FilterButton
          isActive={filter === 'editorial'}
          onClick={setFilter('editorial')}
        >
          Editorial
        </FilterButton>
        <FilterButton
          isActive={filter === 'celebrity'}
          onClick={setFilter('celebrity')}
        >
          Celebrity
        </FilterButton>
      </FilterButtons>
      <PressItemsContainer>
        {definitely(pressItems)
          .filter((pi) => (filter === 'all' ? true : pi.type === filter))
          .map((pi) => (
            <PressItem key={pi._id || 'some-key'} pressItem={pi} />
          ))}
      </PressItemsContainer>
    </Column>
  )
}
