import * as React from 'react'
import fetch from 'isomorphic-unfetch'
import { useQuery } from 'urql'
import { homepageQuery, HomepageResponse } from '../queries/homepageQuery'
import { graphqlQuery } from '../queries/utils'
import { ContentBlock } from '../components/ContentBlock'

export const Homepage = () => {
  const [response] = useQuery<HomepageResponse>({ query: homepageQuery })
  const { fetching, data, error } = response
  if (error)
    return (
      <React.Fragment>
        <p>error!</p>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </React.Fragment>
    )

  if (fetching || !data || !data.Homepage.content) return null
  const { content } = data.Homepage
  return (
    <React.Fragment>
      {content.map((content, index) =>
        content ? <ContentBlock key={content._key} content={content} /> : null,
      )}
    </React.Fragment>
  )
}

Homepage.getInitialProps = async () => {
  return {}
}

export default Homepage
