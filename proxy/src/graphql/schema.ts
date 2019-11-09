import {
  makeRemoteExecutableSchema,
  introspectSchema,
  mergeSchemas,
  transformSchema,
  RenameTypes,
} from 'graphql-tools'
import { GraphQLSchema } from 'graphql'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'
import { config } from '../config'

type Fetch = GlobalFetch['fetch']

const createRemoteExecutableSchema = async (link: ApolloLink) => {
  const remoteSchema = await introspectSchema(link)
  const remoteExecutableSchema = makeRemoteExecutableSchema({
    schema: remoteSchema,
    link,
  })
  return remoteExecutableSchema
}

const createShopifySchema = async () => {
  const shopifyLink = new HttpLink({
    uri: `https://${config.get('shopify.shopName')}.myshopify.com/api/graphql`,
    // Node-fetch type signatures do not match what apollo wants
    fetch: (fetch as unknown) as Fetch,
    headers: {
      'X-Shopify-Storefront-Access-Token': config.get('shopify.accessToken'),
    },
  })

  return await createRemoteExecutableSchema(shopifyLink)
}

const createSanitySchema = async () => {
  const sanityLink = new HttpLink({
    uri: `https://${config.get(
      'sanity.projectId',
    )}.api.sanity.io/v1/graphql/${config.get('sanity.dataset')}/default
  `,
    // Node-fetch type signatures do not match what apollo wants
    fetch: (fetch as unknown) as Fetch,
  })
  const schema = await createRemoteExecutableSchema(sanityLink)
  const transformedSchema = transformSchema(schema, [
    new RenameTypes((name) => {
      switch (name) {
        case 'Image':
          return 'SanityImage'
        default:
          return name
      }
    }),
  ])
  return transformedSchema
}

interface Stuff {
  schema: GraphQLSchema
}

let merged: GraphQLSchema | void = undefined

export const createSchema = async () => {
  if (merged) return merged
  const [shopify, sanity] = await Promise.all([
    createShopifySchema(),
    createSanitySchema(),
  ])

  const schema = mergeSchemas({
    schemas: [shopify, sanity],
  })

  // @ts-ignore
  merged = schema

  return schema
}
