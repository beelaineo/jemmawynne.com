import * as React from 'react'
import { Placeholder } from '../Placeholder'
import { Hero } from '../../types'
import { HeroBackground, HeroText } from '../Layout/Containers'
import { RichText } from '../RichText'

interface HeroBlockProps {
  hero: Hero
}

export const HeroBlock = (props: HeroBlockProps) => {
  let hero = props.hero
  return (
    <HeroBackground
      background={hero.image.asset.url}
      backgroundMobile={hero.mobileImage.asset.url}
    >
      <HeroText textAlign={hero.textPosition}>
        <RichText body={hero.bodyRaw} />
      </HeroText>
    </HeroBackground>
  )
}
