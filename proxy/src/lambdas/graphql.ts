import { APIGatewayEvent, Context, Handler } from 'aws-lambda'
import { ApolloServer, gql } from 'apollo-server-lambda'
import { createSchema } from '../graphql/schema'

const runHandler = (
	event: APIGatewayEvent,
	context: Context,
	handler: Handler,
) =>
	new Promise((resolve, reject) => {
		// @ts-ignore
		const callback = (error, body) => (error ? reject(error) : resolve(body))
		handler(event, context, callback)
	})

const run = async (event: APIGatewayEvent, context: Context) => {
	const schema = await createSchema()

	const server = new ApolloServer({
		// @ts-ignore // GraphQL Schema versions aren't type-compatible. Graphql-tools uses a different version of graphql
		schema,
		introspection: true,
		playground: true,
	})

	const handler = server.createHandler({
		cors: {
			origin: '*',
			credentials: true,
			allowedHeaders: ['ContentType', 'content-type', 'Origin', 'Accept'],
		},
	})

	const response = await runHandler(event, context, handler)

	return response
}

exports.handler = run
