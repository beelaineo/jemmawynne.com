import * as React from 'react'
import { Heading } from '../../components/Text'
import { Column } from '../../components/Layout'
import { PressItem as PressItemType } from '../../types'
import { PressItemsContainer, FilterButton, FilterButtons } from './styled'
import { PressItem } from './PressItem'

const { useState } = React

interface PressViewProps {
  pressItems: PressItemType[]
}

export const PressView = ({ pressItems }: PressViewProps) => {
  const [filter, setFilterState] = useState('all')

  const setFilter = (type: string) => () => setFilterState(type)

  return (
    <Column py={5} maxWidth="wide">
      <Heading textAlign="center" level={1}>
        Press
      </Heading>
      <FilterButtons>
        <FilterButton
          active={filter === 'all'}
          level={4}
          onClick={setFilter('all')}
        >
          View All
        </FilterButton>
        <FilterButton
          active={filter === 'editorial'}
          level={4}
          onClick={setFilter('editorial')}
        >
          Editorial
        </FilterButton>
        <FilterButton
          active={filter === 'celebrity'}
          level={4}
          onClick={setFilter('celebrity')}
        >
          Celebrity
        </FilterButton>
      </FilterButtons>
      <PressItemsContainer>
        {pressItems
          .filter((pi) => (filter === 'all' ? true : pi.type === filter))
          .map((pi) => (
            <PressItem key={pi._key || 'some-key'} pressItem={pi} />
          ))}
      </PressItemsContainer>
    </Column>
  )
}
