import * as React from 'react'
import {
  CarouselContainer,
  SlidesContainer,
  CarouselButton,
  CarouselMask,
} from './styled'
import { Slide, SlideInfo } from './Slide'
import { Dots } from './Dots'
import { useViewportSize } from '../../utils'
import { useSwipeReducer } from './swipeReducer'

const { useState, useEffect, useMemo, useRef } = React

interface CarouselContextProps {
  currentSlide: number | null
  setCurrentSlide: (num: number) => void
}

const CarouselContext = React.createContext<CarouselContextProps | void>(
  undefined,
)

export const useCarousel = () => {
  const ctx = React.useContext(CarouselContext)
  if (!ctx) {
    throw new Error('useCarouselContext must be used within a CarouselProvider')
  }
  return ctx
}

interface CarouselProps {
  initialSlide?: number
  children: React.ReactNode
  columnCount?: number
  buttons?: boolean
  dots?: boolean
  single?: boolean
}

export const CarouselInner = ({
  children,
  columnCount,
  dots,
  buttons: customButtons,
  single,
}: CarouselProps) => {
  const { width: viewportWidth } = useViewportSize()
  const { currentSlide, setCurrentSlide } = useCarousel()
  const [hasOverflow, setHasOverflow] = useState(false)
  const outerRef = useRef<HTMLDivElement>(null)
  const [slides, setSlides] = useState<SlideInfo[]>([])
  const buttons = customButtons !== undefined ? customButtons : true

  const { state, startSwipe } = useSwipeReducer(outerRef.current)

  const goNext = () => {
    if (currentSlide === null || currentSlide === slides.length - 1) return
    setCurrentSlide(currentSlide + 1)
  }

  const goPrevious = () => {
    if (currentSlide === null || currentSlide === 0) return
    setCurrentSlide(currentSlide - 1)
  }

  const isAtFirst = currentSlide === 0
  const isAtLast = Boolean(
    currentSlide && currentSlide + (columnCount || 4) >= slides.length,
  )

  /* Don't allow scrolling beyond the last slide */
  useEffect(() => {
    if (currentSlide === null || state.active || state.diff === 0) {
      return
    }
    if (!outerRef.current) return
    const containerWidth = outerRef.current.getBoundingClientRect().right

    const lastSlideRight = slides[slides.length - 1].ref.getBoundingClientRect()
      .right
    if (lastSlideRight < containerWidth) return

    const newSlide = slides.findIndex(
      (slide) => slide.ref.offsetLeft + slide.ref.offsetWidth / 2 > -state.diff,
    )
    setCurrentSlide(Math.max(0, newSlide || 0))
  }, [state.active, state.diff])

  /* Only show the next button if there is carousel overflow */
  useEffect(() => {
    if (!outerRef.current) return
    const accWidth = slides.reduce(
      (acc, slide) => acc + slide.ref.offsetWidth,
      0,
    )
    if (accWidth > outerRef.current.offsetWidth) {
      setHasOverflow(true)
    }
  }, [outerRef.current, viewportWidth])

  const addSlide = useMemo(
    () => (newSlide: SlideInfo) => {
      setSlides((prevSlides) =>
        [...prevSlides, newSlide].sort((a, b) => a.index - b.index),
      )
    },
    [],
  )

  const removeSlide = (index: number) => {
    setSlides((prevSlides) =>
      [...prevSlides.slice(0, index), ...prevSlides.slice(index + 1)].sort(
        (a, b) => a.index - b.index,
      ),
    )
  }

  const containerLeft = state.active
    ? state.diff
    : currentSlide !== null && slides[currentSlide]?.ref
    ? -slides[currentSlide].ref.offsetLeft
    : 0

  return (
    <CarouselContainer single={single}>
      {children && buttons ? (
        <CarouselButton
          visible={hasOverflow && !isAtFirst}
          aria-label="previous slide"
          direction="previous"
          onClick={goPrevious}
        />
      ) : null}
      <CarouselMask ref={outerRef}>
        <SlidesContainer
          isSwiping={state.active}
          left={containerLeft}
          onMouseDown={startSwipe(containerLeft)}
          onTouchStart={startSwipe(containerLeft)}
        >
          {React.Children.map(children, (child, index) => (
            <Slide
              addSlide={addSlide}
              removeSlide={removeSlide}
              columnCount={columnCount}
              index={index}
              key={index}
              single={single}
            >
              {child}
            </Slide>
          ))}
        </SlidesContainer>
      </CarouselMask>
      {children && buttons ? (
        <CarouselButton
          visible={hasOverflow && !isAtLast}
          direction="next"
          aria-label="next slide"
          onClick={goNext}
        />
      ) : null}
      {dots && slides.length > 1 && currentSlide !== null ? (
        <Dots currentSlide={currentSlide} totalSlides={slides.length} />
      ) : null}
    </CarouselContainer>
  )
}

interface CarouselProviderProps {
  children: React.ReactNode
  onSlideChange?: (slideNumber: number | null) => void
  initialSlide?: number
}

export const CarouselProvider = ({
  children,
  onSlideChange,
  initialSlide,
}: CarouselProviderProps) => {
  const [currentSlide, setCurrentSlideState] = useState<number>(
    initialSlide || 0,
  )

  const setCurrentSlide = (num: number) => {
    setCurrentSlideState(num)
  }

  useEffect(() => {
    if (onSlideChange) onSlideChange(currentSlide)
  }, [currentSlide])

  const value = {
    setCurrentSlide,
    currentSlide,
  }

  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  )
}

export const Carousel = ({
  initialSlide,
  buttons,
  children,
  columnCount,
  dots,
  single,
}: CarouselProps) => {
  return (
    <CarouselProvider initialSlide={initialSlide}>
      <CarouselInner
        single={single || false}
        buttons={buttons}
        dots={dots}
        columnCount={columnCount}
      >
        {children}
      </CarouselInner>
    </CarouselProvider>
  )
}

Carousel.Slide = Slide
