import {
	makeRemoteExecutableSchema,
	introspectSchema,
	mergeSchemas,
} from 'graphql-tools'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'
import { config } from './config'

const shopifyLink = new HttpLink({
	uri: `https://${config.get('shopify.shopName')}.myshopify.com/api/graphql`,
	fetch,
	headers: {
		'X-Shopify-Storefront-Access-Token': config.get('shopify.accessToken'),
	},
})
console.log(
	`https://${config.get('shopify.shopName')}.myshopify.com/api/graphql`,
)

const sanityLink = new HttpLink({
	uri: `https://${config.get(
		'sanity.projectId',
	)}.api.sanity.io/v1/graphql/${config.get('sanity.dataset')}/default
  `,
	fetch,
})

console.log(
	`https://${config.get(
		'sanity.projectId',
	)}.api.sanity.io/v1/graphql/${config.get('sanity.dataset')}/default
  `,
)
const createRemoteExecutableSchema = async (link) => {
	const remoteSchema = await introspectSchema(link)
	const remoteExecutableSchema = makeRemoteExecutableSchema({
		schema: remoteSchema,
		link,
	})
	return remoteExecutableSchema
}

export const createSchema = async () => {
	const remoteSchemas = await Promise.all([
		createRemoteExecutableSchema(shopifyLink),
		createRemoteExecutableSchema(sanityLink),
	])

	const schema = mergeSchemas({
		schemas: [...remoteSchemas],
	})

	return {
		schema,
	}
}
