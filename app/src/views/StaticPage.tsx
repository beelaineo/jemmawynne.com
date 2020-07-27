import * as React from 'react'
import { Page } from '../types'
import { Heading } from '../components/Text'
import { HeroBlock, PageBodyBlock } from '../components/ContentBlock'
import { definitely, isValidHero } from '../utils'

interface StaticPageProps {
  page: Page
}

export const StaticPage = ({ page }: StaticPageProps) => {
  const { hero, body, title } = page
  return (
    <>
      {isValidHero(hero) ? <HeroBlock hero={hero} /> : null}
      <Heading textAlign="center" fontWeight={1} my={6} mb={0} level={1}>
        {title}
      </Heading>
      {definitely(body).map((b, index, blocks) => (
        <PageBodyBlock
          key={b._key || 'some-key'}
          block={b}
          previousBlock={blocks[index - 1]}
        />
      ))}
    </>
  )
}
