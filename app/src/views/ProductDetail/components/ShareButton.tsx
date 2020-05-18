import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { ShopifyProduct } from '../../../types'
import { Button } from '../../../components/Button'
import { Heading } from '../../../components/Text'
import { ShareButtonWrapper, ShareButtonDropdown } from '../styled'

const { useState, useEffect } = React

interface ButtonInfo {
  label: string
  href: string
}

interface ShareLinkProps {
  button: ButtonInfo
}

const ShareLink = ({ button }: ShareLinkProps) => (
  <Heading level={6} family="sans" color="body.5" textAlign="center">
    <a href={button.href} target="_blank" rel="noopener noreferrer">
      {button.label}
    </a>
  </Heading>
)

interface GetButtonsProps {
  url: string
  text: string
  imageUrl: string
}

const getButtons = ({ url, text, imageUrl }: GetButtonsProps): ButtonInfo[] => [
  {
    label: 'Facebook',
    href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
  {
    label: 'Twitter',
    href: `https://twitter.com/share?url=${url}&text=${text}`,
  },
  {
    label: 'Pinterest',
    href: `http://pinterest.com/pin/create/button/?url=${url}&media=${imageUrl}&description=${text}`,
  },
]
interface ShareButtonProps {
  product: ShopifyProduct
  /* */
}

export const ShareButton = ({ product }: ShareButtonProps) => {
  const [open, setOpen] = useState(false)
  const openDropdown = () => setOpen(true)
  const closeDropdown = () => setOpen(false)
  const url = `https://www.jemmawynne.com/produts/${product.handle}`
  const text = product?.sourceData?.description ?? ''
  const [images] = unwindEdges(product?.sourceData?.images)
  const imageUrl = images.length ? images[0].originalSrc || '' : ''

  const buttons = getButtons({ url, text, imageUrl })

  const handleClick = async () => {
    if (navigator && navigator.share) {
      navigator.share({
        title: product.title || 'Jemma Wynne',
        text: `Jemma Wynne - ${product.title}`,
        url: `https://www.jemmawynne.com/products/${product.handle}`,
      })
      return
    }
    openDropdown()
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('click', closeDropdown)
      return () => document.removeEventListener('click', closeDropdown)
    }
  }, [open])
  return (
    <ShareButtonWrapper>
      <Button my={0} level={3} onClick={handleClick}>
        Share
      </Button>
      <ShareButtonDropdown open={open}>
        {buttons.map((button) => (
          <ShareLink key={button.label} button={button} />
        ))}
      </ShareButtonDropdown>
    </ShareButtonWrapper>
  )
}
