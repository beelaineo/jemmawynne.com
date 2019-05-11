import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import { Gallery } from '../Gallery'
import { Image } from '../../types'

const images: Image[] = [
	{ id: '123', __typename: 'Image', originalSrc: './images/123.jpg' },
	{ id: '234', __typename: 'Image', originalSrc: './images/234.jpg' },
	{ id: '345', __typename: 'Image', originalSrc: './images/345.jpg' },
	{ id: '456', __typename: 'Image', originalSrc: './images/456.jpg' },
]

describe('Gallery', () => {
	it('should render the first image by default', async () => {
		const { getByTestId } = render(<Gallery images={images} />)
		const currentImage = getByTestId('current-image').querySelector('img')
		expect(currentImage.getAttribute('src')).toBe(images[0].originalSrc)
	})

	it('should render the current image', async () => {
		const { getByTestId } = render(<Gallery images={images} currentImageId={images[1].id} />)
		const currentImage = getByTestId('current-image').querySelector('img')
		expect(currentImage.getAttribute('src')).toBe(images[1].originalSrc)
	})

	it('should render thumbnails for each image', async () => {
		const { getByTestId } = render(<Gallery images={images} />)
		const thumbnails = getByTestId('thumbnails').querySelectorAll('img')
		thumbnails.forEach((thumbnail) => {
			const src = thumbnail.getAttribute('src')
			const matchingImage = images.find((i) => i.originalSrc === src)
			expect(matchingImage).toBeTruthy
		})
	})

	it('should change the current image when a thumbnail is clicked', async () => {
		const { getByTestId } = render(<Gallery images={images} />)
		const thumbnail2 = getByTestId('thumbnails').querySelectorAll('img')[2]
		const currentImage = getByTestId('current-image').querySelector('img')
		expect(currentImage.getAttribute('src')).toBe(images[0].originalSrc)
		fireEvent.click(thumbnail2)
		expect(currentImage.getAttribute('src')).toBe(images[2].originalSrc)
	})
})
