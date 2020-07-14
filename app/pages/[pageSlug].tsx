import * as React from 'react'
import gql from 'graphql-tag'
import { GetStaticProps, GetStaticPaths } from 'next'
import { NotFound, StaticPage } from '../src/views'
import { Page as PageType } from '../src/types'
import {
  heroFragment,
  carouselFragment,
  pageBlockFragment,
  request,
  requestShopData,
} from '../src/graphql'
import { definitely } from '../src/utils'

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

      body {
        ... on Hero {
          ...HeroFragment
        }
        ... on Carousel {
          ...CarouselFragment
        }
        ... on PageBlock {
          ...PageBlockFragment
        }
      }
      hero {
        ...HeroFragment
      }
    }
  }
  ${heroFragment}
  ${carouselFragment}
  ${pageBlockFragment}
`

interface PageProps {
  page: PageType
}

const Page = ({ page }: PageProps) => {
  if (!page) return <NotFound />
  return <StaticPage page={page} />
}

/**
 * Initial Props
 */

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx
  if (!params) return { props: { page: undefined } }
  const variables = { slug: params.pageSlug }
  const [response, shopData] = await Promise.all([
    request<PageResponse>(pageQuery, variables),
    requestShopData(),
  ])

  const pages = response?.allPage
  const page = pages && pages.length ? pages[0] : null
  return { props: { page, shopData }, unstable_revalidate: 60 }
}

/**
 * Static Paths
 */

const pageHandlesQuery = gql`
  query PageSlugQuery {
    allPage {
      _id
      slug {
        current
      }
    }
  }
`

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await request<PageResponse>(pageHandlesQuery)
  const pages = definitely(result?.allPage)
  const paths = pages.map((page) => ({
    params: { pageSlug: page?.slug?.current ?? undefined },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default Page
