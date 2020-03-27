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
}

const AnnouncementWrapper = styled.div`
  ${({ open }: AnnouncementWrapperProps) => css`
    position: relative;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    height: ${open ? '45px' : '0'};
    background-color: body.2;
    transition: 0.5s;
  `}
`

const CloseButton = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  font-size: 21px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
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

  return (
    <AnnouncementWrapper open={open}>
      <CloseButton onClick={dismiss}>
        <IoMdClose />
      </CloseButton>

      <Heading weight={3} family="sans" mb={0} level={6}>
        {banner.text}
      </Heading>
      {cta?.link ? (
        <DocumentLink document={cta.link.document}>
          <Heading
            weight={3}
            mb={0}
            ml={2}
            family="sans"
            textDecoration="underline"
            level={6}
          >
            {cta.label}
          </Heading>
        </DocumentLink>
      ) : null}
    </AnnouncementWrapper>
  )
}
