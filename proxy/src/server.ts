import { config } from './config'
import { createServer } from './graphql/apollo'

const PORT = config.get('port')

const runServer = async () => {
  const server = await createServer()

  server.listen(PORT).then(({ url }) => {
    console.log(`Server ready at ${url}`)
  })
}

runServer()
