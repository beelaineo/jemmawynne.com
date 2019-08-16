import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery } from 'urql'
import { Link } from 'react-router-dom'
import { PRODUCT_QUERY, ProductQueryResult } from './query'
import { Product, ProductInfo, ProductInfoBlock } from '../../types/generated'
import { useProductVariant, useCheckout, Variant } from 'use-shopify'
import { unwindEdges } from '../../utils/graphql'
import { NotFound } from '../NotFound'
import { Column } from '../../components/Layout'
import {
	ProductVariantSelector,
	BuyButton,
	ProductImages,
	ProductDetailHeader,
	ProductDetailFooter,
	ProductRelated,
} from './components'
import { useShopData } from '../../providers/ShopDataProvider'
import { useCounter } from 'Utils/hooks'
import {
	Wrapper,
	ProductDetails,
	ProductInfoWrapper,
	ProductImagesWrapper,
	NormalizeDiv,
	ArrowDown,
} from './styled'
import { RichText } from '../../components/RichText'
import { Accordion } from '../../components/Accordion'
import { getInfoBlocksByType, getInfoBlocksByTag } from './utils'
import { Header5, Header6 } from 'Components/Text'

interface Props {
	product: Product
}

const ProductDetailMain = ({ product }: Props) => {
	/* get additional info blocks from Sanity */
	const { ready, productInfoBlocks } = useShopData()
	const accordions = productInfoBlocks
		? [
				...getInfoBlocksByType(product.productType, productInfoBlocks),
				...getInfoBlocksByTag(product.tags, productInfoBlocks),
		  ]
		: []

	/* hook to manage quantity input */
	const {
		count: quantity,
		increment,
		decrement,
		setCount: setQuantity,
	} = useCounter(1, { min: 1 })
	/* get product variant utils */
	const { currentVariant, selectVariant } = useProductVariant(product)

	/* get checkout utils */
	const { addItemToCheckout } = useCheckout()
	const [variants] = unwindEdges<Variant>(product.variants)

	return (
		<Wrapper>
			<Column>
				<ProductDetails>
					<ProductImagesWrapper>
						<ProductImages currentVariant={currentVariant} product={product} />
					</ProductImagesWrapper>
					<ProductInfoWrapper>
						<ProductDetailHeader
							currentVariant={currentVariant}
							product={product}
						/>
						<ProductDetailFooter product={product} />
						<ProductVariantSelector
							setQuantity={setQuantity}
							quantity={quantity}
							increment={increment}
							decrement={decrement}
							variants={variants}
							currentVariant={currentVariant}
							selectVariant={selectVariant}
						/>
						<BuyButton
							addItemToCheckout={addItemToCheckout}
							currentVariant={currentVariant}
							quantity={quantity}
						/>
						<NormalizeDiv>
							{accordions
								? accordions.map(({ _key, title, bodyRaw }) => (
										<Accordion key={_key} label={title} content={bodyRaw} />
								  ))
								: null}
						</NormalizeDiv>
					</ProductInfoWrapper>
				</ProductDetails>
			</Column>
			<ProductRelated product={product} />
		</Wrapper>
	)
}

/**
 * View Wrapper
 */

interface MatchParams {
	handle: string
}

export const ProductDetail = ({ match }: RouteComponentProps<MatchParams>) => {
	/* fetch the product data */
	const { handle } = match.params
	const variables = { handle }
	const [response] = useQuery<ProductQueryResult>({
		query: PRODUCT_QUERY,
		variables,
	})
	const product =
		(response && response.data && response.data.productByHandle) || undefined
	if (response.fetching) return <p>Loading..</p>
	if (!product) return <NotFound />
	return <ProductDetailMain product={product} />
}
