import React from 'react'

const ImagePreview = (props) => {
	console.log(props)
	return (
		<>
			{props.value.edges.map((imageEdge) => (
				<img src={imageEdge.node.transformedSrc} alt={imageEdge.node.altText} />
			))}
		</>
	)
	return null
}

const Product = {
	title: 'Products',
	name: 'shopifyProduct',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			readOnly: true,
			type: 'string',
			hidden: true,
		},
		{
			title: 'Page URI',
			name: 'handle',
			type: 'string',
			readOnly: true,
			hidden: true,
		},
		{
			title: 'Shopify ID',
			name: 'shopifyId',
			type: 'string',
			hidden: true,
		},
		{
			title: 'Shopify Data',
			name: 'sourceData',
			readOnly: true,
			type: 'object',
			fields: [
				{ title: 'Title', name: 'title', type: 'string' },
				{
					title: 'Handle',
					name: 'handle',
					type: 'string',
				},
				{
					title: 'Description',
					name: 'description',
					type: 'text',
					rows: 3,
				},
				{
					title: 'ID',
					name: 'id',
					type: 'string',
					hidden: true,
				},
				{
					title: 'Images',
					name: 'images',
					type: 'object',
					inputComponent: ImagePreview,
					fields: [
						{
							title: 'edges',
							name: 'edges',
							type: 'array',
							of: [
								{
									name: 'node',
									type: 'object',
									fields: [
										{
											title: 'altText',
											name: 'altText',
											type: 'string',
										},
										{
											title: 'id',
											name: 'id',
											type: 'string',
										},
										{
											title: 'originalSrc',
											name: 'originalSrc',
											type: 'string',
										},
										{
											title: 'w100',
											name: 'w100',
											type: 'string',
										},
										{
											title: 'w300',
											name: 'w300',
											type: 'string',
										},
										{
											title: 'w800',
											name: 'w800',
											type: 'string',
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
	preview: {
		select: {
			shopifyItem: 'shopifyItem',
			title: 'title',
		},
		prepare: ({ shopifyItem, title }) => ({
			title: shopifyItem ? title || shopifyItem.title : title,
		}),
	},
}

export default Product
