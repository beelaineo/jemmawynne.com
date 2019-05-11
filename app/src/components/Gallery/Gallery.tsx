import * as React from 'react'
import { Image as ImageType } from '../../types'
import { Image } from '../Image'
import { MainImageWrapper, Thumbnails } from './styled'

const { useState } = React

interface GalleryProps {
	images: ImageType[]
	currentImageId?: string
}

export const Gallery = ({ images, currentImageId }: GalleryProps) => {
	const getImageById = (id: string): ImageType | undefined => images.find((i) => i.id === id)

	const [currentImage, setCurrentImage] = useState(getImageById(currentImageId) || images[0])

	const changeImage = (imageId: string) => () => setCurrentImage(getImageById(imageId))

	return (
		<React.Fragment>
			<MainImageWrapper data-testid="current-image">
				<Image image={currentImage} />
			</MainImageWrapper>
			<Thumbnails data-testid="thumbnails">
				{images.map((image) => (
					<button key={image.id} onClick={changeImage(image.id)}>
						<Image image={image} />
					</button>
				))}
			</Thumbnails>
		</React.Fragment>
	)
}
