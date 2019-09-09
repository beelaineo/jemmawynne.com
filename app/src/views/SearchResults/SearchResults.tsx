import * as React from 'react'
import { useSearch } from 'use-shopify'
import { CurrentSearchTerm, Wrapper } from './styled'
import { Header2 } from '../../components/Text'
import { ItemGrid } from '../../components/ItemGrid'

interface SearchResultsProps {
	/* */
}

export const SearchResults = (props: SearchResultsProps) => {
	const { searchTerm, loading, results, products, collections } = useSearch()
	if (searchTerm.length < 3) return null

	const items = [...collections, ...products]

	return (
		<Wrapper>
			<Header2 color="lightGrayBody">
				Search Results for:{' '}
				<CurrentSearchTerm>"{searchTerm}"</CurrentSearchTerm>
			</Header2>
			{loading ? <p>Loading...</p> : <ItemGrid items={items} />}
		</Wrapper>
	)
}
