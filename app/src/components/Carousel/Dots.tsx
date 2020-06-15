import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'

interface DotsProps {
  currentSlide: number
  totalSlides: number
}

interface WithActive {
  active: boolean
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 3 auto 2;
  padding: 0 3;
  max-width: small;
`

const Dot = styled.div<WithActive>`
  ${({ active }) => css`
    margin: 0 1;
    width: 6px;
    height: 6px;
    border-radius: 10px;
    background-color: ${active ? 'body.7' : 'body.4'};
  `}
`

export const Dots = ({ currentSlide, totalSlides }: DotsProps) => {
  return (
    <Wrapper>
      {Array(totalSlides)
        .fill(null)
        .map((_, index) => (
          <Dot key={index} active={index === currentSlide} />
        ))}
    </Wrapper>
  )
}
