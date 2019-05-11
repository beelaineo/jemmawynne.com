import { Collection } from 'use-shopify'
import { Paginated } from '../../types'

export const SETTINGS_QUERY = /* GraphQL */ `
	{
		collections(first: 50) {
			edges {
				node {
					title
					id
					handle
					image {
						originalSrc
						id
						altText
					}
				}
			}
		}
	}
`

export interface SettingsResponse {
	collections: Paginated<Collection>
}
