import * as React from 'react'
import { Page } from '../types'
import { HeroBlock, PageBodyBlock } from '../components/ContentBlock'
import { definitely, isValidHero } from '../utils'

interface StaticPageProps {
  page: Page
}

export const StaticPage = ({ page }: StaticPageProps) => {
  const { hero, body } = page
  return (
    <>
      {isValidHero(hero) ? <HeroBlock hero={hero} /> : null}
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
