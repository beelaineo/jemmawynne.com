import * as React from 'react'
import { useSearch } from 'use-shopify'
import { CurrentSearchTerm, Wrapper } from './styled'
import { Header2 } from '../../components/Text'

interface SearchResultsProps {
	/* */
}

export const SearchResults = (props: SearchResultsProps) => {
	const { searchTerm, loading, results, products, collections } = useSearch()
	if (searchTerm.length < 3) return null
	console.log(results)

	return (
		<Wrapper>
			<Header2 color="lightGrayBody">
				Search Results for:{' '}
				<CurrentSearchTerm>"{searchTerm}"</CurrentSearchTerm>
			</Header2>
			{loading ? (
				<p>Loading...</p>
			) : (
				<p>
					{collections.length} collections, {products.length} products
				</p>
			)}
		</Wrapper>
	)
}
