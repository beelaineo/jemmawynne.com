import { unwindEdges } from '@good-idea/unwind-edges'
const fetch = require('node-fetch')

const url = 'https://jemmawynne.myshopify.com/api/graphql'

const fetchOriginal = async (query: string) => {
	return fetch(url, {
		method: 'POST',
		body: query,
		headers: {
			'Content-Type': 'application/graphql',
			'X-Shopify-Storefront-Access-Token': '329967ff884953b32490bed58d2cd713',
		},
	}).then((r) => {
		return r.json()
	})
}

const getHandle = (shopify_product) => {
	const matches = shopify_product.match(/product_handle="([\w-]+)"/)
	return matches && matches.length >= 1 ? matches[1] : undefined
}

const byHandle = (handle: string): string => /* GraphQL */ `
{
  productByHandle(handle: "${handle}") {
    id
    title
    availableForSale
options {
  name
  id
  values
}
images(first: 100) {
  edges {
    node {
      originalSrc
    }
  }
}
variants(first: 100){
  edges {
    node {
      availableForSale
      sku
      title
      selectedOptions {
        name
        value
      }
      compareAtPriceV2 {
        currencyCode
        amount
      }
      image {
        originalSrc
      }
      priceV2 {
        currencyCode
        amount
      }
    }
  }
}
 }
}
`

const paginate = (nodes) => {
	return {
		pageInfo: {},
		edges: nodes.map((node) => ({
			cursor: 'xyz',
			node,
		})),
	}
}
export const getOriginalProduct = async (data) => {
	try {
		const handle = getHandle(data.metadata.shopify_product)
		if (handle) {
			const query = byHandle(handle)
			const result = await fetchOriginal(query)
			return result.data.productByHandle
		} else {
			// if no existing shopify product exists, fake one
			const { metadata } = data
			const images = [metadata.image, ...metadata.product_slideshow].map(
				(src) => ({ originalSrc: src }),
			)
			const variants = [
				{
					title: data.post_title,
					selectedOptions: [],
					priceV2: {
						amount:
							data.metadata.price && data.metadata.price.length
								? data.metadata.price
								: '0',
					},
					image: images[0],
				},
			]
			return {
				images: paginate(images),
				variants: paginate(variants),
				availableForSale: true,
				options: [],
			}
		}
	} catch (e) {
		console.log('error fetching original product info')
		console.log(data)
	}
}
