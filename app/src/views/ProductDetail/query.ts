import { Product } from 'use-shopify'
import { imageFragment } from '../../graphql/fragments'

export const PRODUCT_QUERY = /* GraphQL */ `
	query ProductQuery($handle: String!) {
		productByHandle(handle: $handle) {
			id
			title
			handle
			description
			collections(first: 5) {
				edges {
					node {
						title
						products(first: 8) {
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
			}
			images(first: 50) {
				edges {
					node {
						...ImageFragment
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
							...ImageFragment
						}
					}
				}
			}
		}
	}
	${imageFragment}
`

export interface ProductQueryResult {
	productByHandle: Product | void
}
