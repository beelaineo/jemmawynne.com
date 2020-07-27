import * as React from 'react'
import { PressItem as PressItemType } from '../../types'
import { PressItemContainer } from './styled'
import { Image } from '../../components/Image'
import { Button } from '../../components/Button'
import { Heading } from '../../components/Text'

interface PressItemProps {
  pressItem: PressItemType
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const PressItem = ({ pressItem }: PressItemProps) => {
  const { link, title, image, subtitle, publishDate } = pressItem

  const date = new Date(publishDate)
  const dateString = [months[date.getMonth()], date.getFullYear()].join(' ')

  const renderInner = (children: React.ReactNode) => {
    if (!link?.url) return <>{children}</>
    const { url, newTab } = link
    return (
      <a href={link.url} target={newTab !== false ? '_blank' : undefined}>
        {children}
      </a>
    )
  }
  return (
    <PressItemContainer>
      {renderInner(
        <>
          <Image
            ratio={1.3}
            image={image}
            sizes="(max-width: 600px) 90vw, 500px"
          />
          <Heading fontWeight={1} mt={3} mb={subtitle ? 0 : 2} level={3}>
            {title}
          </Heading>
          {subtitle ? (
            <Heading mt={0} mb={0} level={4} color="body.6">
              {subtitle}
            </Heading>
          ) : null}
          <Heading mt={2} fontStyle="italic" level={5} color="body.6">
            {dateString}
          </Heading>
          {link && link.url ? (
            <Button mt={3} mx="auto" level={4}>
              Read More
            </Button>
          ) : null}
        </>,
      )}
    </PressItemContainer>
  )
}
