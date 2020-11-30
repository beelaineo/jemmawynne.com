import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { useAnnouncement } from '../providers/AnnouncementProvider'
import { ContentBlock } from '../components/ContentBlock'
import { HeroWrapper } from '../components/ContentBlock/styled'
import { InstagramBlock } from '../components/Instagram'
import { SEO } from '../components/SEO'
import { Homepage as HomepageType } from '../types'
import { getHeroImage, definitely } from '../utils'

interface WithAnnouncement {
  announcementOpen: boolean
}

const HomepageWrapper = styled.div<WithAnnouncement>`
  ${({ announcementOpen, theme }) => css`
    ${HeroWrapper} {
      transition: 0.3s;
      min-height: ${announcementOpen
        ? `calc(100vh - ${theme.navHeight} - ${theme.announcementHeight})`
        : `calc(100vh - ${theme.navHeight})`};
    }
  `}
`

interface HomepageProps {
  homepage: HomepageType
  /* */
}

export const Homepage = ({ homepage }: HomepageProps) => {
  const { content, seo } = homepage
  const { open: announcementOpen } = useAnnouncement()

  const firstHero = definitely(content).find((b) => b.__typename === 'Hero')
  const defaultSeo = {
    title: 'Jemma Wynne',
    image:
      firstHero && firstHero.__typename === 'Hero'
        ? getHeroImage(firstHero)
        : undefined,
  }

  return (
    <>
      <SEO seo={seo} defaultSeo={defaultSeo} path="" />
      <HomepageWrapper announcementOpen={announcementOpen}>
        {content
          ? content.map((content) =>
              content ? (
                <ContentBlock
                  key={content._key || 'some-key'}
                  content={content}
                />
              ) : null,
            )
          : null}
        <InstagramBlock />
      </HomepageWrapper>
    </>
  )
}
