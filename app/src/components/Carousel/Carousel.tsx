import * as React from 'react'
// @ts-ignore
import { init, last } from 'ramda'
import { useSwipeable } from 'react-swipeable'
import {
  CarouselContainer,
  SlidesContainer,
  SlideSpacer,
  CarouselButton,
  CarouselMask,
} from './styled'
import { Slide, SlideInfo } from './Slide'

const {
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} = React

interface CarouselContextProps {
  currentSlide: number | null
  addSlide: (slide: SlideInfo) => void
}

const CarouselContext = React.createContext<CarouselContextProps | void>(
  undefined,
)

export const useCarousel = () => {
  const ctx = React.useContext(CarouselContext)
  if (!ctx)
    throw new Error('useCarouselContext must be used within a CarouselProvider')
  return ctx
}

interface CarouselProps {
  children: React.ReactNode
  columnCount?: number
}

export const Carousel = ({
  children,
  columnCount: customColumnCount,
}: CarouselProps) => {
  const columnCount = customColumnCount || 4
  const [currentSlide, setCurrentSlide] = useState<number | null>(null)
  const [hideButtons, setHideButtons] = useState(false)
  const [slides, setSlides] = useState<SlideInfo[]>([])
  const [attempts, setAttempts] = useState(0)
  const [hasOverflow, setHasOverflow] = useState(false)
  const innerRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)

  const addSlide = useMemo(
    () => (newSlide: SlideInfo) => {
      setSlides((prevSlides) => [...prevSlides, newSlide])
    },
    [],
  )

  useEffect(() => {
    setCurrentSlide(0)
  }, [Boolean(slides.length)])

  /* Only show the next button if there is carousel overflow */
  useEffect(() => {
    if (!outerRef.current) return
    const accWidth = slides.reduce(
      (acc, slide) => acc + slide.ref.offsetWidth,
      0,
    )
    /* Give it 5 attempts to load images & get a width greater than 0 */
    if (accWidth === 0) {
      if (attempts === 5) return
      const timeoutId = setTimeout(() => {
        setAttempts(attempts + 1)
      }, 100)
      return () => clearTimeout(timeoutId)
    }
    if (accWidth > outerRef.current.offsetWidth) {
      setHasOverflow(true)
    }
  }, [outerRef.current, attempts])

  const handleImageLoad = () => {
    if (!innerRef.current) return
    const el = innerRef.current
    if (el.scrollWidth <= el.offsetWidth) setHideButtons(true)
  }

  const goNext = () => {
    if (currentSlide === null || currentSlide === slides.length - 1) return
    setCurrentSlide(currentSlide + 1)
  }

  const goPrevious = () => {
    if (currentSlide === null || currentSlide === 0) return
    setCurrentSlide(currentSlide - 1)
  }

  const handlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goPrevious,
  })

  const isAtFirst = currentSlide === 0
  const isAtLast = currentSlide + columnCount >= slides.length
  const value = {
    addSlide,
    currentSlide,
  }

  return (
    <CarouselContext.Provider value={value}>
      <CarouselContainer ref={outerRef}>
        {children ? (
          <CarouselButton
            aria-label="previous slide"
            direction="previous"
            onClick={goPrevious}
            visible={!isAtFirst}
          />
        ) : null}
        <CarouselMask>
          <SlidesContainer
            {...handlers}
            ref={innerRef}
            left={currentSlide ? -slides[currentSlide].ref.offsetLeft : 0}
          >
            {React.Children.map(children, (child, index) => (
              <Slide columnCount={columnCount} index={index} key={index}>
                {child}
              </Slide>
            ))}
          </SlidesContainer>
        </CarouselMask>
        {children ? (
          <CarouselButton
            visible={!isAtLast}
            direction="next"
            aria-label="next slide"
            onClick={goNext}
          />
        ) : null}
      </CarouselContainer>
    </CarouselContext.Provider>
  )
}

Carousel.Slide = Slide
