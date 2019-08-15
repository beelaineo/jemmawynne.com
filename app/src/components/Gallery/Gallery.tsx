import * as React from 'react'
import { Image as ImageType } from '../../types'
import { Image } from '../Image'
import { GalleryWrapper, MainImageWrapper, Thumbnails } from './styled'

const { useState } = React

interface GalleryProps {
	images: ImageType[]
	currentImageId?: string
}

export const Gallery = ({ images, currentImageId }: GalleryProps) => {
	const getImageById = (id: string): ImageType | undefined =>
		images.find((i) => i.id === id)

	const [currentImage, setCurrentImage] = useState(
		getImageById(currentImageId) || images[0],
	)

	const changeImage = (imageId: string) => () =>
		setCurrentImage(getImageById(imageId))

	return (
		<GalleryWrapper>
			<MainImageWrapper data-testid="current-image">
				<Image ratio={1} image={currentImage} />
			</MainImageWrapper>
			{images.length > 1 && (
				<Thumbnails data-testid="thumbnails">
					{images.map((image, i) => (
						<button key={image.id} onClick={changeImage(image.id)}>
							<Image ratio={1} image={image} />
						</button>
					))}
				</Thumbnails>
			)}
		</GalleryWrapper>
	)
}
