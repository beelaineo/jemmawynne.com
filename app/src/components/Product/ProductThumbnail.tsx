import * as React from 'react'
import { Product } from '../../types'
import { Link } from 'react-router-dom'
import { unwindEdges } from '@good-idea/unwind-edges'
import { Header3, Header6 } from '../Text'
import { Image } from '../Image'

import { ProductInfo, ProductThumb } from './styled'

interface ProductThumbnail {
	product: Product
}

export const ProductThumbnail = ({ product }: ProductThumbnail) => {
	const [images] = unwindEdges(product.images)
	const productImage = images.length ? images[0] : undefined
	let { minVariantPrice, maxVariantPrice } = product.priceRange
	const to = `/products/${product.handle}`
	return (
		<ProductThumb>
			<Link to={to}>
				<Image key={product.id} image={productImage} />
				<ProductInfo>
					<Header3>{product.title}</Header3>
					{minVariantPrice !== undefined &&
					minVariantPrice.amount !== maxVariantPrice.amount ? (
						<Header6>
							${minVariantPrice.amount} - ${maxVariantPrice.amount}
						</Header6>
					) : (
						<Header6>${maxVariantPrice.amount}</Header6>
					)}
				</ProductInfo>
			</Link>
		</ProductThumb>
	)
}
