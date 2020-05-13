import * as React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import {
  imageBlockFragment,
  textBlockFragment,
  carouselFragment,
  heroFragment,
} from '../src/graphql'
import { Homepage as HomepageType } from '../src/types'
import { Homepage as HomepageView } from '../src/views/Homepage'

interface HomepageResponse {
  Homepage: HomepageType
}

const homepageQuery = /*  GraphQL */ gql`
  query HomepageQuery {
    Homepage(id: "homepage") {
      _id
      content {
        ... on ImageTextSection {
          _key
          _type
          title
          subtitleRaw
          blocks {
            ... on TextBlock {
              ...TextBlockFragment
            }
            ... on ImageBlock {
              ...ImageBlockFragment
            }
          }
        }
        ... on Hero {
          ...HeroFragment
        }
        ... on Carousel {
          ...CarouselFragment
        }
      }
    }
  }
  ${textBlockFragment}
  ${imageBlockFragment}
  ${carouselFragment}
  ${heroFragment}
`

export const Homepage = () => {
  const { loading, error, data } = useQuery<HomepageResponse>(homepageQuery)
  console.log(data)
  if (error)
    return (
      <React.Fragment>
        <p>error!</p>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </React.Fragment>
    )

  if (loading || !data || !data.Homepage.content) return null

  return <HomepageView homepage={data.Homepage} />
}

export default Homepage
