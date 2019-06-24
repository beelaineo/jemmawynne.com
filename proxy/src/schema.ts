import {
	makeRemoteExecutableSchema,
	introspectSchema,
	mergeSchemas,
} from 'graphql-tools'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'
import { config } from './config'

type Fetch = GlobalFetch['fetch']

const shopifyLink = new HttpLink({
	uri: `https://${config.get('shopify.shopName')}.myshopify.com/api/graphql`,
	// Node-fetch type signatures do not match what apollo wants
	fetch: (fetch as unknown) as Fetch,
	headers: {
		'X-Shopify-Storefront-Access-Token': config.get('shopify.accessToken'),
	},
})

const sanityLink = new HttpLink({
	uri: `https://${config.get(
		'sanity.projectId',
	)}.api.sanity.io/v1/graphql/${config.get('sanity.dataset')}/default
  `,
	// Node-fetch type signatures do not match what apollo wants
	fetch: (fetch as unknown) as Fetch,
})

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
