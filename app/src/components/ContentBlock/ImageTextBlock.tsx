import * as React from 'react'
import { Placeholder } from '../Placeholder'
import { ImageTextBlock as ImageTextBlockType } from '../../types'
import { ImageText } from '../Layout/index'
import { RichText } from '../RichText'

interface ImageTextBlockProps {
  content: ImageTextBlockType
}

export const ImageTextBlock = (props: ImageTextBlockProps) => {
  let content = props.content
  let [background, link] = ''

  if (content.backgroundImage !== null) {
    background = content.backgroundImage.asset.url
  }
  if (content.link[0]._type === 'pageLink') {
    link = content.link[0].document.title
  } else {
    link = content.link[0].url
  }
  return (
    <a href={`/${link}`}>
      <ImageText textAlign={content.textPosition} background={background}>
        <div>
          <RichText body={content.bodyRaw} />
          <span>
            <a href={`/${link}`}>{props.content.ctaText}</a>
          </span>
        </div>
      </ImageText>
    </a>
  )
}
