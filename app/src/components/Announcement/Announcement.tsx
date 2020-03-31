import * as React from 'react'
import { IoMdClose } from 'react-icons/io'
import { DocumentLink } from '../DocumentLink'
import styled, { css, DefaultTheme } from '@xstyled/styled-components'
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

const Announcements = styled.div``

interface AnnouncementTextProps {
  theme: DefaultTheme
  active: boolean
}

const AnnouncementText = styled.div`
  ${({ active }: AnnouncementTextProps) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${active ? '1' : '0'};
    pointer-events: ${active ? 'initial' : 'none'};
    transition: 0.3s;
    transition-delay: ${active ? '0.5s' : '0'};
  `}
`

export const Announcement = () => {
  const { siteSettings } = useShopData()
  const [open, setOpen] = useState(false)
  const [activeAnnouncement, setActiveAnnouncement] = useState(0)
  const { banner } = siteSettings || {}
  const { dismissable, announcements } = banner || {}

  useEffect(() => {
    const dismissed = getCookie(ANNOUNCEMENT_DISMISSED)
    if (dismissed) return
    const timeout = setTimeout(() => {
      setOpen(true)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!open) return
    if (!announcements || announcements.length === 0) return
    const timeout = setTimeout(() => {
      const nextIndex =
        activeAnnouncement === announcements.length - 1
          ? 0
          : activeAnnouncement + 1
      setActiveAnnouncement(nextIndex)
    }, 10000)
    return () => clearTimeout(timeout)
  }, [open, announcements, activeAnnouncement])

  const dismiss = () => {
    setOpen(false)
    setCookie(ANNOUNCEMENT_DISMISSED, true)
  }

  if (!siteSettings) return null

  if (!banner) return null
  if (!announcements || announcements.length === 0) return null

  return (
    <AnnouncementWrapper open={open}>
      {dismissable ? (
        <CloseButton onClick={dismiss}>
          <IoMdClose />
        </CloseButton>
      ) : null}
      <Announcements>
        {announcements.map((announcement, index) =>
          announcement ? (
            <AnnouncementText
              key={announcement._key || 'some-key'}
              active={index === activeAnnouncement}
              aria-hidden={!Boolean(index === activeAnnouncement)}
            >
              <Heading weight={3} family="sans" mb={0} level={6}>
                {announcement.text}
              </Heading>
              {announcement.cta?.link ? (
                <DocumentLink document={announcement.cta.link.document}>
                  <Heading
                    weight={3}
                    mb={0}
                    ml={2}
                    family="sans"
                    textDecoration="underline"
                    level={6}
                  >
                    {announcement.cta.label}
                  </Heading>
                </DocumentLink>
              ) : null}
            </AnnouncementText>
          ) : null,
        )}
      </Announcements>
    </AnnouncementWrapper>
  )
}
