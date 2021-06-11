import * as React from 'react'
import styled from '@xstyled/styled-components'
import { ContentBlock } from '../components/ContentBlock'
import { InstagramBlock } from '../components/Instagram'
import { SEO } from '../components/SEO'
import { Homepage as HomepageType } from '../types'
import { getHeroImage, definitely } from '../utils'
import Sentry from '../services/sentry'

const HomepageWrapper = styled.div``

interface HomepageProps {
  homepage: HomepageType
  /* */
}

export const Homepage = ({ homepage }: HomepageProps) => {
  const { content, seo } = homepage

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
      <HomepageWrapper>
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
