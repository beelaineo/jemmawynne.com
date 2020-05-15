import * as React from 'react'
import gql from 'graphql-tag'
import { NotFound, StaticPage } from '../src/views'
import { Page as PageType } from '../src/types'
import { heroFragment } from '../src/graphql'
import { PageContext, catchErrors } from './_app'

interface PageResponse {
  allPage: PageType[]
}

const pageQuery = gql`
  query PageQuery($slug: String) {
    allPage(where: { slug: { current: { eq: $slug } } }) {
      _id
      _type
      _key
      title
      slug {
        current
      }
      textAlign
      hero {
        ...HeroFragment
      }
      contentRaw
    }
  }
  ${heroFragment}
`

interface PageProps {
  page: PageType
}

const Page = ({ page }: PageProps) => {
  if (!page) return <NotFound />
  return <StaticPage page={page} />
}

Page.getInitialProps = catchErrors(async (ctx: PageContext) => {
  const { apolloClient, query } = ctx
  const variables = { slug: query.pageSlug }

  const response = await apolloClient.query({
    query: pageQuery,
    variables,
  })

  const pages = response?.data?.allPage

  const page = pages.length ? pages[0] : undefined
  return { page }
})

export default Page
