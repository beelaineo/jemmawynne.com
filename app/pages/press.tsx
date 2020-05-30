import * as React from 'react'
import gql from 'graphql-tag'
import { NotFound, PressView } from '../src/views'
import { PressItem as PressItemType } from '../src/types'
import { PageContext, catchErrors } from './_app'
import { externalLinkFragment, sanityRichImageFragment } from '../src/graphql'

interface PressItemResponse {
  stockists: PressItemType
}

const query = gql`
  query PressQuery($currentDate: Date) {
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
  pressItems: PressItemType[]
}

const PressPage = ({ pressItems }: PressItemProps) => {
  if (!pressItems) return <NotFound />
  return <PressView pressItems={pressItems} />
}

PressPage.getInitialProps = catchErrors(async (ctx: PageContext) => {
  const { apolloClient } = ctx
  const now = new Date()
  const currentDate = [
    now.getFullYear(),
    (now.getMonth() + 1).toString().padStart(2, '0'),
    now
      //
      .getDate()
      .toString()
      .padStart(2, '0'),
  ].join('-')

  const variables = {
    currentDate,
  }
  const response = await apolloClient.query({ query, variables })

  const pressItems = response?.data?.allPressItem
  return { pressItems }
})

export default PressPage
