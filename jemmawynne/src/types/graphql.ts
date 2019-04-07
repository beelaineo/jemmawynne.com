interface Edge<T> {
	cursor: string | number
	node: T
}

export interface Paginated<T> {
	pageInfo: {
		hasNextPage: boolean
		hasPrevPage: boolean
	}
	edges: Edge<T>[]
}
