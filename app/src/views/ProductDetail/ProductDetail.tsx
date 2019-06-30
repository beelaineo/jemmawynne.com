import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery } from 'urql'
import { Link } from 'react-router-dom'
import { PRODUCT_QUERY, ProductQueryResult } from './query'
import { useProductVariant, useCheckout, Variant, Product } from 'use-shopify'
import { unwindEdges } from '../../utils/graphql'
import { NotFound } from '../NotFound'
import {
	ProductVariantSelector,
	BuyButton,
	ProductImages,
	ProductDetailHeader,
	ProductDetailFooter,
	ProductRelated,
} from './components'
import { useCounter } from 'Utils/hooks'
import {
	Wrapper,
	ProductDetails,
	ProductInfoWrapper,
	ProductImagesWrapper,
	NormalizeDiv,
	ArrowDown,
} from './styled'
import { Header6 } from 'Components/Text'

interface Props {
	product: Product
}

const ProductDetailMain = ({ product }: Props) => {
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
						<Header6 color="dark" transform="uppercase">
							<Link to="#">Shipping & returns</Link>
							<button>FAQ</button>
						</Header6>
					</NormalizeDiv>
					<ArrowDown>&darr;</ArrowDown>
				</ProductInfoWrapper>
			</ProductDetails>
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
