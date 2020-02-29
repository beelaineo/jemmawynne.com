import * as React from 'react'
import { ContentBlock } from '../components/ContentBlock'
import { Homepage as HomepageType } from '../types'

interface HomepageProps {
  homepage: HomepageType
  /* */
}

export const Homepage = ({ homepage }: HomepageProps) => {
  const { content } = homepage
  return (
    <React.Fragment>
      {content
        ? content.map((content, index) =>
            content ? (
              <ContentBlock
                key={content._key || 'some-key'}
                content={content}
              />
            ) : null,
          )
        : null}
    </React.Fragment>
  )
}
