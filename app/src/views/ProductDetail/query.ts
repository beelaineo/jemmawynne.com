import { Product } from 'Types'

export const productQuery = /* GraphQL */ `
	query ProductQuery($handle: String!) {
		shop {
			productByHandle(handle: $handle) {
				id
				title
				handle
				images(first: 50) {
					edges {
						node {
							id
							altText
							originalSrc
						}
					}
				}
				variants(first: 50) {
					edges {
						node {
							id
							availableForSale
							price
							sku
							title
							image {
								id
								altText
								originalSrc
							}
						}
					}
				}
			}
		}
	}
`

export interface QueryResult {
	shop: {
		productByHandle: Product | void
	}
}
