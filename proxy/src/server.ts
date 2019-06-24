import { ApolloServer } from 'apollo-server'
import { createSchema } from './schema'
import { config } from './config'

const PORT = config.get('port')

const runServer = async () => {
	const { schema } = await createSchema()
	const server = new ApolloServer({
		schema,
		playground: true,
		introspection: true,
	})

	server.listen().then(({ url }) => {
		console.log(`Server ready at ${url}`)
	})
}

runServer()
