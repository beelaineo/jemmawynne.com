import * as React from 'react'
import { useSearch } from 'use-shopify'

export const SearchInput = () => {
	const { search, searchTerm, setSearchTerm } = useSearch()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newTerm = e.target.value
		setSearchTerm(newTerm)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		search()
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" onChange={handleChange} value={searchTerm} />
		</form>
	)
}
