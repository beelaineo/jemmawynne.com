import { Collection } from 'use-shopify'
import { imageFragment } from '../../graphql/fragments'
import { Paginated } from '../../types'

export const COLLECTION_QUERY = /* GraphQL */ `
	query CollectionQuery($handle: String!) {
		collectionByHandle(handle: $handle) {
			id
			title
			description
			image {
				...ImageFragment
			}
			products(first: 200) {
				pageInfo {
					hasNextPage
					hasPreviousPage
				}
				edges {
					cursor
					node {
						id
						title
						handle
						images(first: 2) {
							edges {
								cursor
								node {
									...ImageFragment
								}
							}
						}
					}
				}
			}
		}
	}

	${imageFragment}
`

export interface CollectionResult {
	collectionByHandle: Collection
}
