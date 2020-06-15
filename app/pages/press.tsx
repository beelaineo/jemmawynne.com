import * as React from 'react'
import gql from 'graphql-tag'
import { GetStaticProps } from 'next'
import { NotFound, PressView } from '../src/views'
import {
  PressPage as PressPageType,
  PressItem as PressItemType,
} from '../src/types'
import {
  request,
  requestShopData,
  externalLinkFragment,
  sanityRichImageFragment,
} from '../src/graphql'

interface PressPageResponse {
  allPressItem: PressItemType[]
  PressPage: PressPageType
}

const query = gql`
  query PressQuery($currentDate: Date) {
    PressPage(id: "pressPage") {
      title
    }
    allPressItem(
      where: { publishDate: { lte: $currentDate } }
      sort: { publishDate: DESC }
    ) {
      _id
      publishDate
      type
      title
      subtitle
      link {
        ...ExternalLinkFragment
      }
      image {
        ...SanityRichImageFragment
      }
    }
  }

  ${sanityRichImageFragment}
  ${externalLinkFragment}
`

interface PressItemProps {
  pressPage?: PressPageType
  pressItems?: PressItemType[]
}

const PressPage = ({ pressPage, pressItems }: PressItemProps) => {
  if (!pressPage) return <NotFound />
  return <PressView pressPage={pressPage} pressItems={pressItems} />
}

export const getStaticProps: GetStaticProps = async () => {
  const now = new Date()
  const currentDate = [
    now.getFullYear(),
    (now.getMonth() + 1).toString().padStart(2, '0'),
    now.getDate().toString().padStart(2, '0'),
  ].join('-')
  const variables = {
    currentDate,
  }

  const [shopData, response] = await Promise.all([
    requestShopData(),
    request<PressPageResponse>(query, variables),
  ])
  const pressItems = response?.allPressItem
  const pressPage = response?.PressPage

  return {
    props: { shopData, pressItems, pressPage },
    unstable_revalidate: 60,
  }
}

export default PressPage
