import * as React from 'react'
import { SlideContainer } from './styled'

const { useRef, useEffect } = React

export interface SlideInfo {
  ref: HTMLDivElement
}

export interface SlideProps {
  index: number
  children: React.ReactNode
  columnCount: number
  addSlide: (slide: SlideInfo) => void
}

export const Slide = ({ addSlide, children, columnCount }: SlideProps) => {
  const containerElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ref = containerElement.current
    if (!ref) return
    addSlide({
      ref,
    })
  }, [])

  return (
    <SlideContainer ref={containerElement} columnCount={columnCount}>
      {children}
    </SlideContainer>
  )
}
