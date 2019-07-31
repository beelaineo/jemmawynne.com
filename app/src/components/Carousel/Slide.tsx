import * as React from 'react'
import { SlideContainer } from './styled'
import { useCarousel } from './Carousel'

const { useRef, useEffect } = React

export interface SlideInfo {
	// index: number
	ref: HTMLDivElement
}

interface SlideProps {
	index: number
	children: React.ReactNode
	columnCount: number
}

export const Slide = ({ index, children, columnCount }: SlideProps) => {
	const { currentSlide, addSlide } = useCarousel()
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
