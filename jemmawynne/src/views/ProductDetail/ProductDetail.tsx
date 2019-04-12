import * as React from 'react'
// import { path } from 'ramda'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery } from 'graphql-hooks'
import { productQuery, QueryResult } from './query'
import { useShopify } from '../../providers/shopify'
import { propByPath } from '../../utils/data'
import { Placeholder } from '../../components/Placeholder'
import { ProductVariantSelector, BuyButton } from '../../components/Product'

interface MatchParams {
	handle: string
}

export const ProductDetail = ({ match }: RouteComponentProps<MatchParams>) => {
	/* Product Fetching */
	const { handle } = match.params
	const result = useQuery<QueryResult>(productQuery, { variables: { handle } })
	const { data, loading, fetchError, httpError, graphQLErrors } = result
	const product = propByPath('shop.productByHandle', data)

	/* State */
	const { checkout, hooks } = useShopify()
	const { currentVariant, selectVariant } = hooks.useProductVariant(product)

	/** Todo: implement loading in actual view instead of showing this */
	if (loading) return <p>Loading...</p>
	/** Todo: look into these errors and handle in a real way */
	if (fetchError || httpError || graphQLErrors) {
		console.log(fetchError || httpError || graphQLErrors)
		throw new Error('Error loading product, see console')
	}

	return (
		<div>
			<Placeholder>Product Images</Placeholder>
			<Placeholder>Product title & description</Placeholder>
			<ProductVariantSelector variants={product.variants} currentVariant={currentVariant} selectVariant={selectVariant} />
			<BuyButton currentVariant={currentVariant} addToCheckout={checkout.addToCheckout} />
		</div>
	)
}
