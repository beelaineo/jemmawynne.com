import * as React from 'react'
import { IoMdClose } from 'react-icons/io'
import { DocumentLink } from '../DocumentLink'
import styled, { css } from '@xstyled/styled-components'
import { useShopData } from '../../providers/ShopDataProvider'
import { Heading } from '../../components/Text'
import { getCookie, setCookie } from '../../utils'

const { useState, useEffect } = React

const ANNOUNCEMENT_DISMISSED = 'ANNOUNCEMENT_DISMISSED'

interface AnnouncementWrapperProps {
  open: boolean
  withCta: boolean
}

const AnnouncementWrapper = styled.div`
  ${({ open, withCta }: AnnouncementWrapperProps) => css`
    position: relative;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${open ? (withCta ? '65px' : '45px') : '0'};
    background-color: highlight;
    transition: 0.5s;
  `}
`

const CloseButton = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  font-size: 21px;
  transform: translateY(-50%);
  background-color: transparent;
`

export const Announcement = () => {
  const { siteSettings } = useShopData()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const dismissed = getCookie(ANNOUNCEMENT_DISMISSED)
    if (dismissed) return
    const timeout = setTimeout(() => {
      setOpen(true)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  const dismiss = () => {
    setOpen(false)
    setCookie(ANNOUNCEMENT_DISMISSED, true)
  }

  if (!siteSettings) return null
  const { banner } = siteSettings
  if (!banner?.text || banner.text.length === 0) return null
  const { cta } = banner
  const withCta = Boolean(cta?.label && cta.link)

  return (
    <AnnouncementWrapper open={open} withCta={withCta}>
      <CloseButton onClick={dismiss}>
        <IoMdClose />
      </CloseButton>

      <Heading weight={2} family="sans" mb={0} level={5}>
        {banner.text}
      </Heading>
      {cta?.link ? (
        <DocumentLink document={cta.link.document}>
          <Heading
            weight={2}
            mt={1}
            family="sans"
            textDecoration="underline"
            level={5}
          >
            {cta.label}
          </Heading>
        </DocumentLink>
      ) : null}
    </AnnouncementWrapper>
  )
}
