import nextWithApollo from 'next-with-apollo'
import ApolloClient, {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { SANITY_GRAPHQL_URL } from '../config'

import introspectionQueryResultData from '../../fragmentTypes-sanity.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

export const withApollo = nextWithApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: SANITY_GRAPHQL_URL,
      cache: new InMemoryCache({ fragmentMatcher }).restore(initialState || {}),
    })
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      )
    },
  },
)
